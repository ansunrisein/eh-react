import React from 'react'
import {Button, Input, Steps} from 'rsuite'
import {Controller, useForm} from 'react-hook-form'
import noop from '@stdlib/utils-noop'
import {Event} from '@eh/entities/event'
import S from './EventForm.module.scss'

export type EventFormProps = {
  onSubmit?: (data: EventFormFields) => void
  defaultValues?: EventFormFields
}

export type EventFormFields = Pick<Event, 'title' | 'content'>

export const EventForm: React.FC<EventFormProps> = ({onSubmit = noop, defaultValues}) => {
  const {handleSubmit, control, formState} = useForm({
    mode: 'onChange',
    defaultValues,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
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
