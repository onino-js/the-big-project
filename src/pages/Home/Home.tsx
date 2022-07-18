import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import Header from '../../components/Header/header'
import styles from './Home.module.scss'
import { Howl } from 'howler'
import { Footer } from '../../components/Footer/Footer'
import { tracksList } from '../../assets/tracks/tracks-list'
import { Player } from '../../components/Player/Player'
import { AudioSpectrum } from '../../components/AudioSpectrum/AudioSpectrum'

const cx = classNames.bind(styles)
const assetDir = 'albums'

const getTrackPath = (t: [number, number]) =>
  `/${assetDir}/${tracksList[t[0]].id}/${
    tracksList[t[0]].tracks[t[1]].id
  }/${tracksList[0].tracks[0].id}`

export const Home = () => {
  const [selectedTrack, setSelectedTrack] = useState<[number, number]>([0, 0])

  const sound = useRef(
    new Howl({
      src: [
        `/${assetDir}/${tracksList[0].tracks[0].name}/${tracksList[0].tracks[0].name}.wav`,
      ],
    }),
  )

  useEffect(() => {
    sound.current.stop()
    sound.current = new Howl({
      src: [`${getTrackPath(selectedTrack)}.wav`],
    })
  }, [selectedTrack])

  const play = () => {
    sound.current.play()
  }
  const stop = () => {
    sound.current.stop()
  }
  const pause = () => {
    sound.current.stop()
  }

  const previous = () => {
    setSelectedTrack([selectedTrack[0], selectedTrack[1] - 1])
  }
  const next = () => {
    setSelectedTrack([selectedTrack[0], selectedTrack[1] + 1])
  }

  return (
    <div className={cx('home')}>
      <Header />
      <div>
        {/* <img src="shaka.jpg" alt="shakka"></img> */}
        <AudioSpectrum />
        <button onClick={previous}>PREVIOUS</button>
        <button onClick={play}>START</button>
        <button onClick={stop}>PAUSE</button>
        <button onClick={stop}>STOP</button>
        <button onClick={next}>NEXT</button>
      </div>
      {tracksList.map((album, albumIndex) => (
        <div className={cx("album")}>
          <h1>{album.name}</h1>
          {album.tracks.map((track, trackIndex) =>  <div className="tracks">
            <h3>{track.name}</h3>
            <img src={`${getTrackPath([albumIndex, trackIndex])}.png`} alt="album-jacket"/>
            <button onClick={()=>setSelectedTrack([albumIndex, trackIndex])}>Play</button>
            <p>{track.description.en}</p>
          </div>)}
        </div>
      ))}

      <Footer />
      <Player
        play={play}
        pause={pause}
        stop={stop}
        next={next}
        previous={previous}
      />
    </div>
  )
}

export default Home
