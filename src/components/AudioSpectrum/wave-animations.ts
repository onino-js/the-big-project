import { Wave } from '@foobar404/wave'

const globs = [
  {
    lineWidth: 3,
    diameter: 25,
  },
  {
    lineWidth: 1.5,
    diameter: 60,
  },
  {
    lineWidth: 1.5,
    diameter: 60,
  },
  {
    lineWidth: 0.5,
    diameter: 100,
  },
  {
    lineWidth: 0.4,
    diameter: 200,
  },
  {
    lineWidth: 0.3,
    diameter: 300,
  },
  {
    lineWidth: 0.2,
    diameter: 400,
  },
  {
    lineWidth: 0.1,
    diameter: 600,
  },
  {
    lineWidth: 0.1,
    diameter: 800,
  },
  {
    lineWidth: 0.1,
    diameter: 1000,
  },
]

export const waveAnimations = (wave: Wave) => {
  globs.forEach((g) =>
    wave.addAnimation(
      new wave.animations.Glob({
        // fillColor: { gradient: ['red', 'blue', 'green'], rotate: 45 },
        // fillColor: 'rgba(255,255,255,0.3',
        fillColor: 'transparent',
        lineColor: '#d3d32c',
        glow: { color: 'white', strength: 7 },
        ...g,
      }),
    ),
  )

  wave.addAnimation(
    new wave.animations.Turntable({
      fillColor: { gradient: ['red', 'yellow'], rotate: 45 },
      lineWidth: 1,
      lineColor: 'yellow',
      diameter: 500,
      count: 100,
      glow: { color: 'red', strength: 7 },
      gap: 10,
      // cubeHeight: 2,
    }),
  )
}
