import React, {createContext, useContext, useEffect, useState} from 'react'
import {useEvent, useStore} from 'effector-react'
import {IntlProvider} from 'react-intl'
import {Hoc} from '@eh/shared/types'
import {I18NModel} from './i18n'

export const I18NContext = createContext<I18NModel>(
  new Proxy({} as I18NModel, {
    get() {
      throw new Error('Use I18NProvider!')
    },
  }),
)

export type I18NProviderProps = {
  i18n: I18NModel
}

export const I18NProvider: React.FC<I18NProviderProps> = ({children, i18n}) => (
  <I18NContext.Provider value={i18n}>{children}</I18NContext.Provider>
)

export const useI18N = (): I18NModel => useContext(I18NContext)

export const useSupportedLocales = () => useI18N().supportedLocales

export const useLocale = () => {
  const {$currentLocale} = useI18N()

  return useStore($currentLocale)
}

export const useIsSourceLocale = () => {
  const {$isSourceLocale} = useI18N()

  return useStore($isSourceLocale)
}

export const useSetLocale = () => {
  const {setCurrentLocale} = useI18N()

  return useEvent(setCurrentLocale)
}

export const withModuleLocalization =
  (name: string): Hoc =>
  Component =>
  props => {
    const [messages, setMessages] = useState<Record<string, string> | null>(null)

    const isSourceLocale = useIsSourceLocale()
    const locale = useLocale()

    useEffect(() => {
      if (isSourceLocale) {
        setMessages({})
      } else {
        fetch(`/translation/${locale}/${name}.json`)
          .then(translations => translations.json())
          .then(setMessages)
          .catch(() => setMessages({}))
      }
    }, [isSourceLocale, locale])

    if (!messages) {
      return null
    }

    return (
      <IntlProvider locale={locale} messages={messages} onError={() => void 0}>
        <Component {...props} />
      </IntlProvider>
    )
  }
