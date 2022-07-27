import { gsap } from 'gsap'

export const PlayButtonFunctions = {
  playAnimate: (onPlay: () => void) => {
    //@ts-ignore
    const tl = new gsap.timeline({
      onComplete: () => {
        onPlay()
      },
    }) as gsap.core.Timeline

    tl.set('#play-btn-icon', { transition: 'none' })
      .to('#play-btn-label', { '--clip': 1, duration: 0.3 })
      .to(
        '#play-btn-icon',
        { rotation: 140, scale: 0.8, duration: 0.25 },
        '<0.05',
      )
      .to('#play-btn-icon', { opacity: 0, duration: 0.35 }, '<')
      .to('#play-btn', { ease: 'back.inOut(2)', duration: 0.45 }, '<0.2')
  },
  progressAnimate: (progress: ProgressEvent<EventTarget>) => {
    gsap.to('#play-btn-loader', {
      '--scale': () => progress.loaded / progress.total,
      duration: 0.15,
      overwrite: true,
      ease: 'power1.out',
    })
  },
  loadAnimate: () => {
    //@ts-ignore
    const tl = new gsap.timeline()
    tl.add('start')
      .to('#play-btn', {
        scale: 0,
        duration: 0.3,
        ease: 'back.in(2)',
      })
      .to('#play-btn', { autoAlpha: 0, duration: 0.35 }, 'start+=0.3')
  },
}
