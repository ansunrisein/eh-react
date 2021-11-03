import React from 'react'
import {Button, Input, Steps} from 'rsuite'
import {Controller, useForm} from 'react-hook-form'
import noop from '@stdlib/utils-noop'
import useBooleanState from 'use-boolean-state'
import {useFormInputEnter} from '@eh/shared/lib/use-form-input-enter'
import {Board} from '@eh/entities/board'
import S from './BoardForm.module.scss'

export type BoardFormProps = {
  onSubmit?: (data: BoardFormFields) => void
  defaultValues?: BoardFormFields
}

export type BoardFormFields = Pick<Board, 'title'>

export const BoardForm: React.FC<BoardFormProps> = ({onSubmit = noop, defaultValues}) => {
  const [isTitleProcess, startIsTitleProcess, stopIsTitleProcess] = useBooleanState(false)

  const {handleSubmit, control, formState, watch} = useForm({
    mode: 'onChange',
    defaultValues,
  })
  const {title} = watch()

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
      </Steps>
      <Button type="submit" disabled={!formState.isValid} appearance="primary" className={S.submit}>
        Save
      </Button>
    </form>
  )
}
