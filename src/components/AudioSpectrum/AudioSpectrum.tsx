import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import styles from './AudioSpectrum.module.scss'
import { Wave } from '@foobar404/wave'
import { waveAnimations } from './wave-animations'
import { NicePlayButton } from './NicePlayButton/NicePlayButton'
import { NextButton } from './NextButton/NextButton'
import { createWavesurf } from './create-wavesurf'

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
    const wavesurfer = createWavesurf()
    wavesurferRef.current = wavesurfer
    wavesurfer.load('/music/theme.mp3')
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
      <div id={'waveform'} className={cx('waveform')}></div>
      <img src="shakka.jpg" alt="shakka" />
      <canvas
        className={cx('canvas-viz')}
        id="canvasElmId"
        height={size[0]}
        width={size[1]}
      />
      <div className={cx('btn-container')}>
        <NextButton left disabled={!isPlaying} />
        <NicePlayButton
          onClick={createSurf}
          disabled={isPlaying}
          onKeyDown={createSurf}
        />
        <NextButton disabled={!isPlaying} />
      </div>
    </div>
  )
}
