import useWindowSize from '@/hooks/useWindowSize'
import gsap from 'gsap'
import { useEffect, useMemo, useRef } from 'react'

interface HorizontalScrollProps {
  className?: string
  children?: JSX.Element[] | null
  direction?: 'left' | 'right'
  timeline?: gsap.core.Timeline
}

export default function HorizontalScroll({
  className,
  direction = 'left',
  timeline,
  children,
}: HorizontalScrollProps) {
  const wrapperRef = useRef<HTMLElement>(null)
  const { screenWidth } = useWindowSize()

  const scrollTriggerConfig = useMemo<gsap.TweenVars>(
    () => ({
      xPercent: -100,
      x: screenWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: true,
        // snap: children ? 1 / children.length : 1,
        start: 'top top',
        markers: true,
      },
    }),
    [children, screenWidth, wrapperRef.current],
  )

  useEffect(() => {
    console.log(
      '🚀 ~ file: HorizontalScroll.tsx:42 ~ useLayoutEffect ~ timeline:',
      timeline,
    )

    const ctx = gsap.context(() => {
      const main = timeline || gsap.timeline()
      const option = direction === 'left' ? 'to' : 'from'
      main
        .addLabel('HorizontalScroll-3')
        [option](wrapperRef.current, scrollTriggerConfig)
    })

    return () => ctx.revert()
  }, [timeline, direction, scrollTriggerConfig, wrapperRef])

  return (
    <section ref={wrapperRef} className={className}>
      {children}
    </section>
  )
}
