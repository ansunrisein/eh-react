import {useEffect, useMemo} from 'react'
import {useFieldArray, UseFieldArrayMethods, useForm, UseFormMethods} from 'react-hook-form'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {EventType} from '@eh/react/.types/globalTypes'

export type UseEventFormResult = Pick<
  UseFormMethods<EventFragment>,
  'register' | 'control' | 'setValue' | 'handleSubmit'
> &
  Pick<UseFieldArrayMethods<{value: string}>, 'fields' | 'append' | 'remove'> & {
    event: EventFragment
  }

export const useEventForm = (): UseEventFormResult => {
  const {register, watch, setValue, control, handleSubmit} = useForm<EventFragment>({
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
  const event = useMemo<EventFragment>(
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
