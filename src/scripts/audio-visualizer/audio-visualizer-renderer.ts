import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  Group,
  AudioAnalyser,
} from 'three'
import { AudioCircle } from './meshes/audio-circle'
import { AudioDigital } from './meshes/audio-digital'
import { AudioMesh } from './models'

const DEFAULT_CAMERA_CONFIG = {
  fov: 75,
  near: 0.1,
  far: 100,
  cameraSpeed: 0,
  cameraRadius: 4.5,
}

const DEFAULT_CONFIG = {
  backgroundColor: 0xffff00,
  camera: DEFAULT_CAMERA_CONFIG,
  particlesSpeed: 0,
  particlesCount: 3000,
  bloomStrength: 1.45,
  bloomThreshold: 0.34,
  bloomRadius: 0.5,
}

interface AudioVisualizerRendererParams {
  container: HTMLDivElement
  audioMeshes?: AudioMesh<any>[]
  options?: Partial<typeof DEFAULT_CONFIG>
}

export class AudioVisualizerRenderer {
  private config = DEFAULT_CONFIG
  private container?: HTMLDivElement
  private camera?: PerspectiveCamera
  public analyser?: AudioAnalyser
  private renderer?: WebGLRenderer
  private mainGroup?: Group
  private scene?: Scene
  private audioMeshes: AudioMesh<any>[] = []
  private resizeListenerRef = () => this.onResize()

  public onLoadProgress?: (p: ProgressEvent<EventTarget>) => void
  public onLoad?: () => void

  private audioDigital?: AudioDigital

  constructor({
    container,
    audioMeshes = [new AudioCircle()],
    options,
  }: AudioVisualizerRendererParams) {
    this.container = container
    this.audioMeshes = audioMeshes
    this.config = { ...this.config, ...options }
  }

  public init() {
    this.createScene()
    this.createCamera()
    this.createRenderer()
    this.createMainGroup()
    this.addAudioMeshes(this.audioMeshes)
    this.addListeners()
  }

  public start() {
    this.renderer!.setAnimationLoop(() => {
      this.update()
      this.render()
    })
  }

  public destroy() {
    this.renderer!.dispose()
    this.removeListeners()
  }

  public setAnalyzer(analyser: AudioAnalyser) {
    this.analyser = analyser
    //this.createDigitalVisualizer()
  }

  private update() {
    if (!!this.analyser) {
      const data = this.analyser.getFrequencyData()
      const accVal = data.reduce((prev, curr) => prev + curr, 0)
      const meanVal = accVal / data.length
      const params = { data, meanVal, accVal }
      this.audioMeshes.forEach((a) => a.update(params))
      //   this.audioDigital?.update(params)
    }
  }

  private render() {
    this.renderer!.render(this.scene!, this.camera!)
  }

  private createScene() {
    this.scene = new Scene()
  }

  private createCamera() {
    this.camera = new PerspectiveCamera(
      this.config.camera.fov,
      this.container!.clientWidth / this.container!.clientHeight,
      this.config.camera.near,
      this.config.camera.far,
    )
    this.camera.position.set(0, 0, this.config.camera.cameraRadius)
  }

  private createRenderer() {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    this.container!.appendChild(this.renderer.domElement)
    this.renderer.setSize(
      this.container!.clientWidth,
      this.container!.clientHeight,
    )
    this.renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio))
  }

  private createMainGroup() {
    this.mainGroup = new Group()
    this.scene!.add(this.mainGroup)
  }

  private addAudioMeshes(meshes: AudioMesh<any>[]) {
    meshes.forEach((audioMesh) => {
      this.audioMeshes.push(audioMesh)
      this.scene!.add(audioMesh.getMesh())
      this.mainGroup!.add(audioMesh.getMesh())
    })
  }

  private createDigitalVisualizer() {
    this.audioDigital = new AudioDigital(
      this.analyser!,
      this.renderer!.capabilities.isWebGL2,
    )
    this.scene?.add(this.audioDigital.getMesh())
  }

  private addListeners() {
    window.addEventListener('resize', this.resizeListenerRef, { passive: true })
  }

  private removeListeners() {
    window.removeEventListener('resize', this.resizeListenerRef)
  }

  private onResize() {
    this.camera!.aspect =
      this.container!.clientWidth / this.container!.clientHeight
    this.camera!.updateProjectionMatrix()

    this.renderer!.setSize(
      this.container!.clientWidth,
      this.container!.clientHeight,
    )
  }
}
