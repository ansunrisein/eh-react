import React from 'react'
import {useForm} from 'react-hook-form'
import {useEvent} from 'effector-react/ssr'
import {Button, Input} from '@eh/shared/ui'
import {useEventEntity} from '../../model'
import * as S from './styles'

export type CreateEventProps = {
  onSubmit?: (data: CreateEventFormFields) => void
}

export type CreateEventFormFields = {
  title?: string
  content: string
}

export const CreateEvent: React.FC<CreateEventProps> = ({onSubmit}) => {
  const model = useEventEntity()

  const createEvent = useEvent(model.createEvent)

  const {handleSubmit, register} = useForm<CreateEventFormFields>()

  return (
    <form css={S.container} onSubmit={handleSubmit(onSubmit || createEvent)}>
      <label>
        <h1 css={S.header}>Title</h1>
        <Input {...register('title')} />
      </label>

      <label>
        <h1 css={S.header}>Content</h1>
        <Input {...register('content', {required: true})} />
      </label>

      <Button css={S.button}>Save</Button>
    </form>
  )
}
