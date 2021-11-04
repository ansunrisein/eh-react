import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {Button, Input, Steps} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import noop from '@stdlib/utils-noop'
import {useFormInputEnter} from '@eh/shared/lib/use-form-input-enter'
import {Event} from '@eh/entities/event'
import S from './EventForm.module.scss'

export type EventFormProps = {
  onSubmit?: (data: EventFormFields) => void
  defaultValues?: EventFormFields
}

export type EventFormFields = Pick<Event, 'title' | 'content'>

export const EventForm: React.FC<EventFormProps> = ({onSubmit = noop, defaultValues}) => {
  const [isTitleProcess, startIsTitleProcess, stopIsTitleProcess] = useBooleanState(false)
  const [isContentProcess, startIsContentProcess, stopIsContentProcess] = useBooleanState(false)

  const {handleSubmit, control, formState, watch} = useForm({
    mode: 'onChange',
    defaultValues,
  })
  const {title, content} = watch()

  const handleEnter = useFormInputEnter()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
      <Steps vertical>
        <Steps.Item
          status={!title ? 'wait' : isTitleProcess ? 'process' : 'finish'}
          title={<h4>Title</h4>}
          description={
            <Controller
              control={control}
              name="title"
              render={({field}) => (
                <Input
                  aria-label="title"
                  {...field}
                  onFocus={startIsTitleProcess}
                  onBlur={stopIsTitleProcess}
                  onKeyDown={handleEnter}
                />
              )}
            />
          }
        />
        <Steps.Item
          status={!content ? 'wait' : isContentProcess ? 'process' : 'finish'}
          title={<h4>Content</h4>}
          description={
            <Controller
              control={control}
              name="content"
              rules={{required: true}}
              render={({field}) => (
                <Input
                  as="textarea"
                  aria-label="content"
                  {...field}
                  onFocus={startIsContentProcess}
                  onBlur={stopIsContentProcess}
                  onChange={e => {
                    field.onChange(e)
                    console.log(e)
                  }}
                />
              )}
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
