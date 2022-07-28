import WaveSurfer from 'wavesurfer'

export const createWavesurf = () => {
  return WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ffa100ff',
    progressColor: 'black',
    backend: 'MediaElement',
    fillParent: true,
    minPxPerSec: 10,
    height: 50,
    backgroundColor: '#FFFFFF',
    cursorWidth: 3,
    cursorColor: 'red',
    normalize: true,
  })
}
