import React, {useLayoutEffect, useRef, useState} from 'react'
import c from 'classnames'
import {Swiper} from 'swiper/react'
import {Icon, IconButton} from 'rsuite'
import styles from './MySwiper.module.css'

export const MySwiper: React.FC = ({children}) => {
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
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      navigation={{nextEl: next.current || '', prevEl: prev.current || ''}}
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
      }}
    >
      {children}
      <div className={c(styles.control, styles.prev)} ref={prev}>
        <IconButton
          size="sm"
          circle
          disabled={prevDisabled}
          icon={<Icon icon="arrow-left-line" />}
        />
      </div>
      <div className={c(styles.control, styles.next)} ref={next}>
        <IconButton
          size="sm"
          circle
          disabled={nextDisabled}
          icon={<Icon icon="arrow-right-line" />}
        />
      </div>
    </Swiper>
  )
}
