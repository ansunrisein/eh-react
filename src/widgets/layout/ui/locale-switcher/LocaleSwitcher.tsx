import React from 'react'
import {RiEarthFill} from 'react-icons/ri'
import {Dropdown, IconButton} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useLocale, useSetLocale, useSupportedLocales} from '@eh/shared/lib/i18n'
import S from './LocaleSwitcher.module.scss'

export const LocaleSwitcher: React.FC = () => {
  const setLocale = useSetLocale()
  const locale = useLocale()
  const supportedLocales = useSupportedLocales()

  return (
    <Dropdown
      renderToggle={(props, ref) => (
        <IconButton
          className={S.button}
          size="md"
          appearance="link"
          icon={<Icon as={RiEarthFill} />}
          {...props}
          ref={ref}
        />
      )}
      placement="bottomEnd"
      activeKey={locale}
      onSelect={setLocale}
    >
      {supportedLocales.map(locale => (
        <Dropdown.Item key={locale.code} eventKey={locale.code}>
          {locale.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  )
}
