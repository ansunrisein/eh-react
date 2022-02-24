import React from 'react'
import {RiLoader2Fill} from 'react-icons/ri'
import {TagPicker, TagPickerProps} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useBoardTags} from '../../model'
import S from './BoardTagPicker.module.scss'

export type BoardTagPickerProps = Omit<TagPickerProps, 'data' | 'menu'>

export const BoardTagPicker: React.FC<BoardTagPickerProps> = ({...props}) => {
  const {boardTags, loading} = useBoardTags()
  const tags = boardTags?.map(e => ({value: e._id, label: e.name})) || [{}]

  return (
    <TagPicker
      placeholder="Tags Select"
      {...props}
      renderMenu={menu =>
        loading ? (
          <div className={S.tagLoading}>
            <Icon as={RiLoader2Fill} spin />
            Loading...
          </div>
        ) : (
          menu
        )
      }
      data={tags}
    />
  )
}
