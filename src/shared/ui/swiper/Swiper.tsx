import React, {useLayoutEffect, useRef, useState} from 'react'
import {Swiper as RSwiper} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import c from 'classnames'
import {IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import S from './Swiper.module.scss'

SwiperCore.use([Navigation])

export type SwiperProps = {
  withNavigation?: boolean
} & React.ComponentProps<typeof RSwiper>

export const Swiper: React.FC<SwiperProps> = ({
  withNavigation = false,
  onInit,
  className,
  children,
  ...props
}) => {
  const next = useRef<HTMLDivElement>(null)
  const prev = useRef<HTMLDivElement>(null)

  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

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
      slidesPerView="auto"
      spaceBetween={10}
      navigation={withNavigation && {nextEl: next.current || '', prevEl: prev.current || ''}}
      slidesPerGroup={2}
      speed={1000}
      autoHeight
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
      {withNavigation && (
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
