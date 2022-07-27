import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { AudioSpectrum } from '../../components/AudioSpectrum/AudioSpectrum'

const cx = classNames.bind(styles)
// const assetDir = 'albums'

// const getTrackPath = (t: [number, number]) =>
//   `/${assetDir}/${tracksList[t[0]].id}/${tracksList[t[0]].tracks[t[1]].id}/${
//     tracksList[0].tracks[0].id
//   }`

export const Home = () => {
  // const [selectedTrack, setSelectedTrack] = useState<[number, number]>([0, 0])

  return (
    <div className={cx('home')}>
      <div>
        <AudioSpectrum />
      </div>
      {/* {tracksList.map((album, albumIndex) => (
        <div className={cx('album')}>
          <h1>{album.name}</h1>
          {album.tracks.map((track, trackIndex) => (
            <div className="tracks">
              <h3>{track.name}</h3>
              <img
                src={`${getTrackPath([albumIndex, trackIndex])}.png`}
                alt="album-jacket"
              />
              <button
                onClick={() => setSelectedTrack([albumIndex, trackIndex])}
              >
                Play
              </button>
              <p>{track.description.en}</p>
            </div>
          ))}
        </div>
      ))} */}

      {/* <Footer /> */}
      {/* <Player
        play={play}
        pause={pause}
        stop={stop}
        next={next}
        previous={previous}
      /> */}
    </div>
  )
}

export default Home
