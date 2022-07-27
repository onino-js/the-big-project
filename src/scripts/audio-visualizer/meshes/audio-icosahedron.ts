import { IcosahedronGeometry, Mesh, MeshBasicMaterial } from 'three'
import { AudioMesh, AudioMeshUpdateParams } from '../models'

const DEFAULT_CONFIG = {
  color: 0xffffff,
  wireframe: true,
  transparent: true,
  opacity: 0.5,
}

export class AudioIcosahedron
  implements AudioMesh<Mesh<IcosahedronGeometry, MeshBasicMaterial>> {
  public mesh
  private config
  constructor(opt?: Partial<typeof DEFAULT_CONFIG>) {
    this.config = { ...DEFAULT_CONFIG, ...opt }
    const geom = new IcosahedronGeometry(1.2, 0)
    const mat = new MeshBasicMaterial(this.config)
    this.mesh = new Mesh(geom, mat)
  }
  getMesh() {
    return this.mesh!
  }
  update({ meanVal }: AudioMeshUpdateParams) {
    const scale = 1 + meanVal / 100
    this.mesh!.scale.setScalar(scale)
  }
}
