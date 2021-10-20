import {SwiperSlide} from 'swiper/react'
import {Swiper as SwiperComponent} from './Swiper'

export type {SwiperProps} from './Swiper'

export const Swiper = Object.assign(SwiperComponent, {
  Slide: SwiperSlide,
})
