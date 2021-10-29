import {SwiperOptions} from 'swiper'

export const findAdaptiveSlidePerView = (
  breakpoints?: Record<number, Omit<SwiperOptions, 'breakpoints'>>,
  defaultPerView?: number | 'auto',
) => {
  const keys = breakpoints ? Object.keys(breakpoints) : []

  if (breakpoints && keys.length) {
    const key = keys
      .map(Number)
      .sort((a, b) => b - a)
      .find(key => window.matchMedia(`(min-width: ${key}px)`).matches)

    return key ? breakpoints[key].slidesPerView : defaultPerView
  }

  return defaultPerView
}
