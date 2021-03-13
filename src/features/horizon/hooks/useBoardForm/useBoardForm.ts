import {useForm, UseFormMethods} from 'react-hook-form'
import {CreateBoardVariables} from '../../graphql/types/CreateBoard'

export type UseBoardFormResult = Pick<
  UseFormMethods<CreateBoardVariables>,
  'register' | 'handleSubmit'
> & {board: Partial<CreateBoardVariables>}

export const useBoardForm = (): UseBoardFormResult => {
  const {register, handleSubmit, watch} = useForm<CreateBoardVariables>({mode: 'onChange'})

  return {
    register,
    handleSubmit,
    board: watch(),
  }
}
