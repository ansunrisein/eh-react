import {useForm, UseFormMethods} from 'react-hook-form'
import {Board_board} from '../../graphql/types/Board'
import {UpdateBoardVariables} from '../../graphql/types/UpdateBoard'

export type UseBoardSettingsFormResult = Pick<
  UseFormMethods<UpdateBoardVariables>,
  'register' | 'handleSubmit' | 'formState' | 'control'
>

export const useBoardSettingsForm = (defaultValues: Board_board): UseBoardSettingsFormResult => {
  const {register, handleSubmit, formState, control} = useForm<UpdateBoardVariables>({
    mode: 'onChange',
    defaultValues,
  })

  return {
    register,
    handleSubmit,
    formState,
    control,
  }
}
