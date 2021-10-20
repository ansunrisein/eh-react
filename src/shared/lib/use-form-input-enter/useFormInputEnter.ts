import {KeyboardEventHandler, useCallback} from 'react'

export const useFormInputEnter = <T extends HTMLElement>(
  fn?: KeyboardEventHandler<T>,
): KeyboardEventHandler<T> =>
  useCallback(
    event => {
      if (event.key === 'Enter' || event.keyCode === 13) {
        const form = getForm(event.currentTarget as any)
        const inputs = getFormInputs(form)

        const i = inputs.indexOf(event.currentTarget as any)

        event.preventDefault()

        if (i < inputs.length - 1) {
          return focus(inputs[i + 1])
        } else {
          fn?.(event)
        }
      }
    },
    [fn],
  )

export const focus = (input: HTMLInputElement): void => {
  const {length} = input.value
  input.focus()
  input.setSelectionRange(length, length)
}

export const getForm = (input: HTMLInputElement): HTMLFormElement | null => input?.closest('form')

export const getFormInputs = (form: HTMLFormElement | null): HTMLInputElement[] =>
  form ? [...form.querySelectorAll<HTMLInputElement>('*[name]:not(*[type=checkbox])')] : []
