import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from 'three'
import { AudioMesh, AudioMeshUpdateParams } from '../models'

const DEFAULT_CONFIG = {
  radius: 1,
  segments: 360,
  color: 0xffffff,
  lineWidth: 1,
}

export class AudioCircle
  implements AudioMesh<Line<BufferGeometry, LineBasicMaterial>> {
  public mesh
  private config
  constructor(opt?: Partial<typeof DEFAULT_CONFIG>) {
    this.config = { ...DEFAULT_CONFIG, ...opt }
    const { segments, radius, color, lineWidth } = this.config
    var points: Vector3[] = []
    for (let i = 0; i <= segments; i++) {
      points.push(
        new Vector3(
          Math.sin(i * (Math.PI / 180)) * radius,
          Math.cos(i * (Math.PI / 180)) * radius,
          0,
        ),
      )
    }
    const geometry = new BufferGeometry().setFromPoints(points)
    var material = new LineBasicMaterial({
      color,
      linewidth: lineWidth,
    })
    this.mesh = new Line(geometry, material)
  }
  getMesh() {
    return this.mesh!
  }
  update({ data, meanVal }: AudioMeshUpdateParams) {
    console.log(data)
    const scale = 1 + meanVal / 100
    this.mesh!.scale.setScalar(scale)
  }
}
