import React, {useMemo} from 'react'
import {Button, Input, Steps} from 'rsuite'
import {Controller, useForm} from 'react-hook-form'
import {Event, useEventEntity} from '@eh/entities/event'
import S from './CreateEventForm.module.scss'

export type CreateEventFormProps = {
  onCreate?: () => void
}

export type CreateEventFormFields = Pick<Event, 'title' | 'content'>

export const CreateEventForm: React.FC<CreateEventFormProps> = ({onCreate}) => {
  const {createEvent} = useEventEntity()
  const {handleSubmit, control, formState} = useForm<CreateEventFormFields>({mode: 'onChange'})

  const submit = useMemo(
    () =>
      handleSubmit(data => {
        createEvent(data)
        onCreate?.()
      }),
    [createEvent, handleSubmit, onCreate],
  )

  return (
    <form onSubmit={submit} className={S.form}>
      <Steps vertical>
        <Steps.Item
          status="wait"
          title={<h4>Title</h4>}
          description={
            <Controller
              control={control}
              name="title"
              render={({field}) => <Input aria-label="title" {...field} />}
            />
          }
        />
        <Steps.Item
          status="wait"
          title={<h4>Content</h4>}
          description={
            <Controller
              control={control}
              name="content"
              rules={{required: true}}
              render={({field}) => <Input as="textarea" aria-label="content" {...field} />}
            />
          }
        />
      </Steps>

      <Button type="submit" disabled={!formState.isValid} appearance="primary" className={S.submit}>
        Save
      </Button>
    </form>
  )
}
