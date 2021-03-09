import {useEffect, useMemo} from 'react'
import {useFieldArray, UseFieldArrayMethods, useForm, UseFormMethods} from 'react-hook-form'
import {EventType} from '@eh/react/.types/globalTypes'
import {CreateEventVariables} from '../../graphql/types/CreateEvent'

export type EventFormFields = Omit<CreateEventVariables, 'boardId'>

export type EventFormFieldsWithList = Omit<EventFormFields, 'list'> & {
  list: Array<{value?: string}>
}

export type UseEventFormResult = Pick<
  UseFormMethods<EventFormFieldsWithList>,
  'register' | 'control' | 'setValue' | 'handleSubmit'
> &
  Pick<UseFieldArrayMethods<{value: string}>, 'fields' | 'append' | 'remove'> & {
    event: EventFormFields
  }

export const useEventForm = (): UseEventFormResult => {
  const {register, watch, setValue, control, handleSubmit} = useForm<EventFormFieldsWithList>({
    defaultValues: {
      header: null,
      text: '',
      list: [],
      type: EventType.TEXT,
      deadline: null,
    },
    mode: 'onChange',
  })

  const {fields, append, remove} = useFieldArray<{value: string}>({control, name: 'list'})

  useEffect(() => {
    register('type')
    append({value: ''})
  }, [register, append])

  const formData = watch()
  const list = watch('list', fields)
  const event = useMemo<EventFormFields>(
    () =>
      'list' in formData
        ? {
            ...formData,
            list: list.map(e => e.value || ''),
          }
        : formData,
    [formData, list],
  )

  return {
    register,
    control,
    setValue,
    event,
    fields,
    append,
    remove,
    handleSubmit,
  }
}
