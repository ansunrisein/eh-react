import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {Swiper as RSwiper} from 'swiper/react'
import SwiperCore, {Navigation, SwiperOptions} from 'swiper'
import c from 'classnames'
import {IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import {findAdaptiveSlidePerView} from './helpers'
import S from './Swiper.module.scss'

SwiperCore.use([Navigation])

export type SwiperProps = {
  withNavigation?: boolean
  breakpoints?: Record<number, Omit<SwiperOptions, 'breakpoints'>>
} & Omit<React.ComponentProps<typeof RSwiper>, 'breakpoints'>

export const Swiper: React.FC<SwiperProps> = ({
  withNavigation = false,
  onInit,
  className,
  children,
  slidesPerView,
  breakpoints,
  ...props
}) => {
  const next = useRef<HTMLDivElement>(null)
  const prev = useRef<HTMLDivElement>(null)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(() =>
    findAdaptiveSlidePerView(breakpoints, slidesPerView),
  )

  const isNav = !withNavigation
    ? false
    : typeof currentSlidesPerView !== 'number'
    ? true
    : React.Children.count(children) <= currentSlidesPerView

  useEffect(() => {
    const fn = () => setCurrentSlidesPerView(findAdaptiveSlidePerView(breakpoints, slidesPerView))
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [breakpoints, slidesPerView])

  useLayoutEffect(() => {
    if (next.current && prev.current) {
      const observer = new MutationObserver(records => {
        records.forEach(record => {
          const target = record.target as HTMLDivElement
          const setter = target === next.current ? setNextDisabled : setPrevDisabled
          setter(target.classList.contains('swiper-button-disabled'))
        })
      })

      observer.observe(next.current, {attributes: true})
      observer.observe(prev.current, {attributes: true})

      return () => observer.disconnect()
    }
  }, [next, prev, setNextDisabled, setPrevDisabled])

  return (
    <RSwiper
      className={c(S.fix, className)}
      navigation={!isNav && {nextEl: next.current || '', prevEl: prev.current || ''}}
      slidesPerGroup={2}
      speed={1000}
      autoHeight
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      onInit={swiper => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.prevEl = prev.current
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.nextEl = next.current
        swiper.navigation.update()
        onInit?.(swiper)
      }}
      {...props}
    >
      {children}
      {!isNav && (
        <>
          <div className={c(S.control, S.prev)} ref={prev}>
            <IconButton
              size="sm"
              circle
              disabled={prevDisabled}
              icon={<Icon as={RiArrowLeftSLine} />}
            />
          </div>
          <div className={c(S.control, S.next)} ref={next}>
            <IconButton
              size="sm"
              circle
              disabled={nextDisabled}
              icon={<Icon as={RiArrowRightSLine} />}
            />
          </div>
        </>
      )}
    </RSwiper>
  )
}
