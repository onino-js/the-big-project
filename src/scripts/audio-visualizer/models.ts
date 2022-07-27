import { AudioAnalyser } from 'three'

export interface AudioMesh<T> {
  mesh: T
  getMesh: () => T
  update: (d: AudioMeshUpdateParams) => void
}

export interface AudioMeshUpdateParams {
  analyser?: AudioAnalyser
  data: Uint8Array
  accVal: number
  meanVal: number
}
