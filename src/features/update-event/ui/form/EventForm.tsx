import React from 'react'
import cx from 'classnames'
import {Controller, useForm} from 'react-hook-form'
import {Button, Input, Loader, Steps} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import noop from '@stdlib/utils-noop'
import {useFormInputEnter} from '@eh/shared/lib/use-form-input-enter'
import {CreateEventMutationVariables, EditEventMutationVariables} from '@eh/entities/event'
import S from './EventForm.module.scss'

export type EventFormProps = {
  defaultValues?: EventFormFields
  loading?: boolean
  onSubmit?: (data: EventFormFields) => void
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>

export type EventFormFields = Pick<
  CreateEventMutationVariables | EditEventMutationVariables,
  'title' | 'content'
>

export const EventForm: React.FC<EventFormProps> = ({
  defaultValues,
  loading,
  onSubmit = noop,
  className,
  ...props
}) => {
  const [isTitleProcess, startIsTitleProcess, stopIsTitleProcess] = useBooleanState(false)
  const [isContentProcess, startIsContentProcess, stopIsContentProcess] = useBooleanState(false)

  const {handleSubmit, control, formState, watch} = useForm({
    mode: 'onChange',
    defaultValues,
  })
  const {title, content} = watch()

  const handleEnter = useFormInputEnter()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx(S.form, className)} {...props}>
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
                  value={field.value || ''}
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
                />
              )}
            />
          }
        />
      </Steps>
      <Button type="submit" disabled={!formState.isValid} appearance="primary" className={S.submit}>
        Save
      </Button>
      {loading && <Loader backdrop center size="md" />}
    </form>
  )
}
