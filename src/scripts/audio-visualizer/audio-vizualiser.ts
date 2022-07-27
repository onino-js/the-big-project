import { AudioAnalyser } from 'three'
import { AudioPlayer } from './audio-player'
import { AudioVisualizerRenderer } from './audio-visualizer-renderer'
import { AudioCircle } from './meshes/audio-circle'
import { AudioIcosahedron } from './meshes/audio-icosahedron'

const audioMeshes = [new AudioCircle(), new AudioIcosahedron()]

export class AudioVisualizer {
  public audioPlayer = new AudioPlayer()
  public audioVisualizerRenderer?: AudioVisualizerRenderer
  constructor(container: HTMLDivElement) {
    this.audioVisualizerRenderer = new AudioVisualizerRenderer({
      container,
      audioMeshes,
    })
    this.audioVisualizerRenderer.init()
    // Connect audio player and audio renderer
    this.audioPlayer.onPlay = (analyser: AudioAnalyser) => {
      this.audioVisualizerRenderer!.setAnalyzer(analyser)
      this.audioVisualizerRenderer!.start()
    }
  }
  // Get audioplayer methods
  public play = this.audioPlayer.play
  public stop = this.audioPlayer.stop
  public pause = this.audioPlayer.pause
}
