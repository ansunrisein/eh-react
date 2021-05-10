import {useForm, UseFormMethods} from 'react-hook-form'
import {CreateBoardVariables} from '../../graphql/types/CreateBoard'

export type UseBoardFormResult = Pick<
  UseFormMethods<CreateBoardVariables>,
  'register' | 'handleSubmit' | 'control'
> & {board: Partial<CreateBoardVariables>}

export const useBoardForm = (): UseBoardFormResult => {
  const {register, handleSubmit, watch, control} = useForm<CreateBoardVariables>({
    mode: 'onChange',
  })

  return {
    register,
    handleSubmit,
    board: watch(),
    control,
  }
}
