import {
  AudioAnalyser,
  DataTexture,
  LuminanceFormat,
  Mesh,
  PlaneGeometry,
  RedFormat,
  ShaderMaterial,
  WebGLRenderer,
} from 'three'
import { AudioMesh, AudioMeshUpdateParams } from '../models'

const DEFAULT_CONFIG = {
  radius: 1,
  segments: 360,
  color: 0xffffff,
  lineWidth: 1,
}

export class AudioDigital implements AudioMesh<Mesh> {
  public mesh
  private config
  private uniforms
  private analyser

  constructor(
    analyser: AudioAnalyser,
    isWebGL2: boolean,
    opt?: Partial<typeof DEFAULT_CONFIG>,
  ) {
    this.config = { ...DEFAULT_CONFIG, ...opt }
    this.analyser = analyser
    const format = isWebGL2 ? RedFormat : LuminanceFormat

    this.uniforms = {
      tAudioData: {
        value: new DataTexture(analyser?.data, 128 / 2, 1, format),
      },
    }

    const material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: document.getElementById('vertexShader')!.textContent!,
      fragmentShader: document.getElementById('fragmentShader')!.textContent!,
    })
    const geometry = new PlaneGeometry(1, 1)
    this.mesh = new Mesh(geometry, material)
  }
  getMesh() {
    return this.mesh!
  }
  update({ analyser, meanVal }: AudioMeshUpdateParams) {
    this.analyser!.getFrequencyData()
    this.uniforms.tAudioData.value.needsUpdate = true
  }
}
