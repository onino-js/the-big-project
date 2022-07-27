import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import styles from './AudioSpectrum.module.scss'
import { Wave } from '@foobar404/wave'
import WaveSurfer from 'wavesurfer'
import { waveAnimations } from './wave-animations'
import { NicePlayButton } from './NicePlayButton/NicePlayButton'
import { NextButton } from './NextButton/NextButton'

const cx = classNames.bind(styles)

interface Props {
  // onPlay?: () => void
  // stop?: () => void
  // // pause?: () => void
  // next?: () => void
  // previous?: () => void
}

export const AudioSpectrum: React.FC<Props> = () => {
  const wavesurferRef = useRef<any>(null)
  const [size] = useState([1000, 1200])
  const [isPlaying, setIsPlaying] = useState(false)

  const createSurf = () => {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ffa100ff',
      progressColor: 'black',
      backend: 'MediaElement',
      fillParent: true,
      minPxPerSec: 10,
      height: 70,
      backgroundColor: '#FFFFFF',
      cursorWidth: 3,
      cursorColor: 'red',
      normalize: true,
    })
    wavesurferRef.current = wavesurfer
    wavesurfer.load('/theme.mp3')
    wavesurfer.on('ready', function () {
      play()
      const audioEl = document.getElementsByTagName(
        'audio',
      )[0] as HTMLAudioElement
      audioEl && createViz(audioEl)
    })
  }

  const createViz = (audioEl: HTMLAudioElement) => {
    let canvasElement = document.querySelector(
      '#canvasElmId',
    )! as HTMLCanvasElement
    let wave = new Wave(audioEl, canvasElement)
    waveAnimations(wave)
    // var ctx = canvasElement.getContext('2d')!
    // ctx.fillStyle = 'blue'
  }

  // const pause = () => {
  //   wavesurferRef.current!.pause()
  // }

  // const stop = () => {
  //   wavesurferRef.current!.stop()
  // }

  const play = () => {
    wavesurferRef.current!.play()
    setIsPlaying(true)
  }

  return (
    <div className={cx('audio-specrtum')}>
      <img src="shakka.jpg" alt="shakka" />
      <canvas
        className={cx('canvas-viz')}
        id="canvasElmId"
        height={size[0]}
        width={size[1]}
      />
      <div id={'waveform'} className={cx('waveform')}></div>
      <div className={cx('btn-container')}>
        <NextButton left />
        <NicePlayButton onClick={createSurf} disabled={isPlaying} />
        <NextButton />
      </div>
    </div>
  )
}
