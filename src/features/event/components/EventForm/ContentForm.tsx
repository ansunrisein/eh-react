import React from 'react'
import {Input, Radio, RadioGroup} from 'rsuite'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {EventType} from '@eh/react/.types/globalTypes'
import {ContentListForm} from './ContentListForm'

export type ContentFormProps = {
  event: EventFragment
  onContentChange: (content: any) => void
  onContentTypeChange: (type: EventType) => void
}

export const ContentForm: React.FC<ContentFormProps> = ({
  event,
  onContentChange,
  onContentTypeChange,
}) => (
  <>
    <RadioGroup
      name="typeList"
      inline
      onChange={onContentTypeChange}
      appearance="picker"
      defaultValue={EventType.TEXT}
    >
      <Radio value={EventType.TEXT}>Text</Radio>
      <Radio value={EventType.LIST}>List</Radio>
      <Radio value={EventType.PICTURE}>Picture</Radio>
    </RadioGroup>
    {'text' in event ? (
      <Input componentClass="textarea" value={event.text} onChange={onContentChange} />
    ) : 'list' in event ? (
      <ContentListForm content={event.list} onChange={onContentChange} />
    ) : 'picture' in event ? (
      <div>Picture</div>
    ) : (
      <></>
    )}
  </>
)
