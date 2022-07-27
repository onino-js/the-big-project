import { AudioListener, Audio, AudioLoader, AudioAnalyser } from 'three'

const AUDIO_PLAYER_CONFIGURATION_DEFAULT = {
  fftSize: 128,
}

export class AudioPlayer {
  public analyser?: AudioAnalyser
  public onLoadProgress?: (p: ProgressEvent<EventTarget>) => void
  public onLoad?: () => void
  private music?: Audio
  public onPlay?: (a: AudioAnalyser) => void
  private config = AUDIO_PLAYER_CONFIGURATION_DEFAULT

  constructor(
    opt: Partial<
      typeof AUDIO_PLAYER_CONFIGURATION_DEFAULT
    > = AUDIO_PLAYER_CONFIGURATION_DEFAULT,
  ) {
    Object.assign(this.config, opt)
  }

  public play(src: string) {
    const listener = new AudioListener()
    this.music = new Audio(listener)
    this.loadMusic(
      src,
      (buffer) => {
        this.onLoad && this.onLoad()
        this.createAnalyser(buffer)
        this.music?.play()
        this.onPlay && this.onPlay(this.analyser!)
      },
      (progress) => {
        this.onLoadProgress && this.onLoadProgress(progress)
      },
    )
  }

  public stop() {
    this.music?.stop()
  }

  public pause() {
    this.music?.pause()
  }

  loadMusic(
    sourceUrl: string,
    onLoad: (b: AudioBuffer) => void,
    onProgress: (p: ProgressEvent<EventTarget>) => void,
  ) {
    return new Promise((resolve) => {
      const loader = new AudioLoader()
      loader.load(
        sourceUrl,
        (b) => {
          onLoad(b)
          resolve(true)
        },
        onProgress,
      )
    })
  }

  createAnalyser(buffer: AudioBuffer) {
    this.music!.setBuffer(buffer)
    this.music!.setLoop(true)
    this.music!.setVolume(0.1)
    this.analyser = new AudioAnalyser(this.music!, 128)
  }
}
