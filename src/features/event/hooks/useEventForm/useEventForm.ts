import {FormEvent, useCallback, useEffect, useMemo} from 'react'
import {useFieldArray, UseFieldArrayMethods, useForm, UseFormMethods} from 'react-hook-form'
import {EventType} from '@eh/react/.types/globalTypes'
import {CreateEventVariables} from '../../graphql/types/CreateEvent'
import {listToFields} from './helpers'

export type EventFormFields = Omit<CreateEventVariables, 'boardId'>

export type EventFormFieldsWithList = Omit<EventFormFields, 'list'> & {
  list: Array<{value?: string}>
}

export type UseEventFormResult = Pick<
  UseFormMethods<EventFormFieldsWithList>,
  'register' | 'control'
> & {
  event: EventFormFields
  listFields: UseFieldArrayMethods<{value: string}>['fields']
  addListItem: () => void
  removeListItem: (i: number) => void
  handleSubmit: (fn: (event: EventFormFields) => unknown) => (formEvent: FormEvent) => unknown
}

export const useEventForm = (defaultValues?: EventFormFields): UseEventFormResult => {
  const {register, watch, control} = useForm<EventFormFieldsWithList>({
    defaultValues: {
      header: null,
      text: '',
      type: EventType.TEXT,
      deadline: null,
      ...defaultValues,
      list: listToFields(defaultValues?.list || []),
    },
    mode: 'onChange',
  })

  const {fields, append, remove} = useFieldArray<{value: string}>({control, name: 'list'})

  const addListItem = useCallback(() => {
    const list = watch('list')
    if (!list.length || list[list.length - 1].value) {
      append({value: ''})
    }
  }, [append, watch])

  useEffect(() => {
    register('type')
    if (!fields.length) {
      append({value: ''})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const handleSubmit = (fn: (event: EventFormFields) => unknown) => (formEvent: FormEvent) => {
    formEvent.preventDefault()
    return fn(event)
  }

  return {
    register,
    control,
    event,
    listFields: fields,
    addListItem,
    removeListItem: remove,
    handleSubmit,
  }
}
