import HorizontalScroll from '@/components/HorizontalScroll'
import useWindowSize from '@/hooks/useWindowSize'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img2016 from 'images/2016.jpg'
import LocomotiveScroll from 'locomotive-scroll'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'

function App() {
  let scroller: LocomotiveScroll
  const pageContainerRef = useRef<any>()
  const panelWrapRef = useRef<any>()
  const [timeline] = useState<gsap.core.Timeline>(gsap.timeline())

  const { screenWidth } = useWindowSize()

  const imageSource = useMemo(() => {
    const urls = import.meta.glob('./assets/xiamen/*.jpg', {
      eager: true,
      import: 'default',
    })
    return Object.keys(urls).map((url: string) => urls[url]) as string[]
  }, [])

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray('#panelWrap img') as HTMLElement[]

      timeline.addLabel('HorizontalScroll-1').to(panelWrapRef.current, {
        xPercent: -100,
        x: screenWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: panelWrapRef.current,
          pin: true,
          scrub: true,
          // snap: 1 / images.length,
          start: 'top top',
          markers: true,
        },
      })

      timeline.addLabel('HorizontalScroll-2').from('#panelWrap2', {
        xPercent: -100,
        x: screenWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: '#panelWrap2',
          pin: true,
          scrub: true,
          // snap: 1 / images.length,
          start: 'top top',
          markers: true,
        },
      })
    }, pageContainerRef.current)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={pageContainerRef} className="overflow-x-hidden bg-black">
      <section className="flex h-screen justify-center bg-[#151515]">
        <img src={img2016} alt="" />
      </section>

      <section
        ref={panelWrapRef}
        id="panelWrap"
        className="box-border flex h-screen min-w-max flex-row flex-nowrap items-center gap-4 bg-gray-700 px-[100px]"
      >
        {imageSource.map((url: string) => (
          <img className="h-3/4" src={url} alt="" key={url} loading="eager" />
        ))}
      </section>

      <section
        id="panelWrap2"
        className="box-border flex h-screen min-w-max flex-row flex-nowrap items-center gap-4 bg-gray-700 px-[100px]"
      >
        {imageSource.map((url: string) => (
          <img className="h-3/4" src={url} alt="" key={url} loading="eager" />
        ))}
      </section>

      <HorizontalScroll
        className="box-border flex h-screen min-w-max flex-row flex-nowrap items-center gap-4 bg-gray-700 px-[100px]"
        direction="right"
        timeline={timeline}
      >
        {imageSource.map((url: string) => (
          <img className="h-3/4" src={url} alt="" key={url} loading="eager" />
        ))}
      </HorizontalScroll>

      <section className="flex h-screen justify-center bg-[#151515]">
        <img src={img2016} alt="" />
      </section>
    </div>
  )
  // return (
  //   <div className="text-center selection:bg-green-900">
  //     <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
  //       <img
  //         src={logo}
  //         className="animate-speed h-60 motion-safe:animate-spin"
  //         alt="logo"
  //       />
  //       <style>
  //         {
  //           '\
  //           .animate-speed{\
  //             animation-duration:20s;\
  //           }\
  //         '
  //         }
  //       </style>
  //       <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
  //         Vite + React + Typescript + Tailwindcss v3
  //       </p>
  //       <p className="mt-3">
  //         <button
  //           type="button"
  //           className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
  //           onClick={() => setCount((count) => count + 1)}
  //         >
  //           count is: {count}
  //         </button>
  //       </p>
  //       <p>
  //         Edit <code className="text-[#8d96a7]">App.tsx</code> and save to test
  //         HMR updates.
  //       </p>
  //       <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
  //         <a
  //           className="text-[#61dafb] transition-all hover:text-blue-400"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //         {' | '}
  //         <a
  //           className="text-[#61dafb] transition-all hover:text-blue-400"
  //           href="https://vitejs.dev/guide/features.html"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Vite Docs
  //         </a>
  //       </p>
  //       <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
  //     </header>
  //   </div>
  // )
}

export default App
