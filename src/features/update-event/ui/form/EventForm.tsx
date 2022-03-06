import React from 'react'
import cx from 'classnames'
import {Controller, useForm} from 'react-hook-form'
import {FormattedMessage} from 'react-intl'
import {useDeepCompareEffect} from 'react-use'
import {Button, DatePicker, Input, Loader, Steps} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import noop from '@stdlib/utils-noop'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {useFormInputEnter} from '@eh/shared/lib/use-form-input-enter'
import {CreateEventMutationVariables, EditEventMutationVariables} from '@eh/entities/event'
import {texts} from './texts'
import S from './EventForm.module.scss'

export type EventFormProps = {
  defaultValues?: EventFormFields
  loading?: boolean
  onSubmit?: (data: EventFormFields) => void
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>

export type EventFormFields = Pick<
  CreateEventMutationVariables | EditEventMutationVariables,
  'title' | 'content' | 'deadline'
>

export const EventForm: React.FC<EventFormProps> = withModuleLocalization('update-event-feature')(
  ({defaultValues, loading, onSubmit = noop, className, ...props}) => {
    const [isTitleProcess, startIsTitleProcess, stopIsTitleProcess] = useBooleanState(false)
    const [isContentProcess, startIsContentProcess, stopIsContentProcess] = useBooleanState(false)

    const {handleSubmit, control, formState, watch, reset} = useForm({
      mode: 'onChange',
      defaultValues,
    })
    const {title, content, deadline} = watch()

    useDeepCompareEffect(() => reset(defaultValues), [defaultValues, reset])

    const handleEnter = useFormInputEnter()

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={cx(S.form, className)} {...props}>
        <Steps vertical>
          <Steps.Item
            status={!title ? 'wait' : isTitleProcess ? 'process' : 'finish'}
            title={
              <h4>
                <FormattedMessage {...texts.title} />
              </h4>
            }
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
            title={
              <h4>
                <FormattedMessage {...texts.content} />
              </h4>
            }
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
          <Steps.Item
            status={deadline ? 'finish' : 'wait'}
            title={
              <h4>
                <FormattedMessage {...texts.deadline} />
              </h4>
            }
            description={
              <Controller
                control={control}
                name="deadline"
                render={({field}) => (
                  <DatePicker
                    {...field}
                    value={field.value ? new Date(field.value) : field.value}
                    placement="auto"
                    format="yyyy-MM-dd HH:mm:ss"
                  />
                )}
              />
            }
          />
        </Steps>
        <Button
          type="submit"
          disabled={!formState.isValid}
          appearance="primary"
          className={S.submit}
        >
          <FormattedMessage {...texts.save} />
        </Button>
        {loading && <Loader backdrop center size="md" />}
      </form>
    )
  },
)
