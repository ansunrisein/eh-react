import React from 'react'
import {RiLoader2Fill} from 'react-icons/ri'
import {FormattedMessage, useIntl} from 'react-intl'
import {TagPicker, TagPickerProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {useBoardTags} from '../../model'
import {texts} from './texts'
import S from './BoardTagPicker.module.scss'

export type BoardTagPickerProps = Omit<TagPickerProps, 'data' | 'menu'>

export const BoardTagPicker: React.FC<BoardTagPickerProps> = withModuleLocalization(
  'board-tags-entity',
)(({...props}) => {
  const {boardTags, loading} = useBoardTags()
  const tags = boardTags?.map(e => ({value: e._id, label: e.name})) || [{}]

  const {formatMessage} = useIntl()

  return (
    <TagPicker
      placeholder={formatMessage(texts.selectTags)}
      {...props}
      renderMenu={menu =>
        loading ? (
          <div className={S.tagLoading}>
            <Icon as={RiLoader2Fill} spin />
            <FormattedMessage {...texts.loading} />
          </div>
        ) : (
          menu
        )
      }
      data={tags}
    />
  )
})
