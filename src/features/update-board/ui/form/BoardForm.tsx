import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {Button, Input, Loader, Steps, Toggle} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import noop from '@stdlib/utils-noop'
import {useFormInputEnter} from '@eh/shared/lib/use-form-input-enter'
import {CreateBoardMutationVariables} from '@eh/entities/board'
import S from './BoardForm.module.scss'

export type BoardFormProps = {
  defaultValues?: BoardFormFields
  loading?: boolean
  onSubmit?: (data: BoardFormFields) => void
}

export type BoardFormFields = CreateBoardMutationVariables

export const BoardForm: React.FC<BoardFormProps> = ({
  defaultValues = {
    title: '',
    isPrivate: false,
  },
  loading,
  onSubmit = noop,
}) => {
  const [isTitleProcess, startIsTitleProcess, stopIsTitleProcess] = useBooleanState(false)
  const [isDescriptionProcess, startIsDescriptionProcess, stopIsDescriptionProcess] =
    useBooleanState(false)

  const {handleSubmit, control, formState, watch} = useForm({
    mode: 'onChange',
    defaultValues,
  })
  const {title, description} = watch()

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
          status={!description ? 'wait' : isDescriptionProcess ? 'process' : 'finish'}
          title={<h4>Description</h4>}
          description={
            <Controller
              control={control}
              name="description"
              render={({field}) => (
                <Input
                  aria-label="description"
                  {...field}
                  value={field.value || ''}
                  onFocus={startIsDescriptionProcess}
                  onBlur={stopIsDescriptionProcess}
                  onKeyDown={handleEnter}
                />
              )}
            />
          }
        />
        <Steps.Item
          status="finish"
          title={<h4>Private</h4>}
          description={
            <Controller
              name="isPrivate"
              control={control}
              defaultValue={false}
              render={({field: {value, ...field}}) => (
                <Toggle checked={value} defaultChecked={false} {...field} />
              )}
            />
          }
        />
      </Steps>
      <Button
        type="submit"
        disabled={!formState.isValid || loading}
        appearance="primary"
        className={S.submit}
      >
        Save
      </Button>
      {loading && <Loader backdrop center size="md" />}
    </form>
  )
}
