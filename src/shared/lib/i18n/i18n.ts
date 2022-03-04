import {Domain} from 'effector'
import {persist} from 'effector-storage/local'

export type LanguageDescriptor = {
  code: string
  name: string
}

export type I18NConfig = {
  sourceLocale: string
  supportedLocales: LanguageDescriptor[]
  domain: Domain
}

export type I18NModel = ReturnType<typeof createI18N>

export const createI18N = ({sourceLocale, supportedLocales, domain}: I18NConfig) => {
  const setCurrentLocale = domain.event<string>()

  const $currentLocale = domain.store(sourceLocale).on(setCurrentLocale, (_, payload) => payload)

  const $isSourceLocale = $currentLocale.map(currentLocale => currentLocale === sourceLocale)

  persist({store: $currentLocale})

  return {
    setCurrentLocale,
    $isSourceLocale,
    $currentLocale,
    supportedLocales,
  }
}
