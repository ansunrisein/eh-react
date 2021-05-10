import React from 'react'
import {Button, Divider, Input, Toggle} from 'rsuite'
import {Controller} from 'react-hook-form'
import noop from 'noop6'
import {Spacing} from '@eh/react/ui'
import {UpdateBoardVariables} from '../../graphql/types/UpdateBoard'
import {Board_board} from '../../graphql/types/Board'
import {useBoardSettingsForm} from '../../hooks'

export type BoardSettingsFormProps = {
  board: Board_board
  onBoardUpdate?: (board: UpdateBoardVariables) => void
  onBoardRemove?: (board: Board_board) => void
}

export const BoardSettingsForm: React.FC<BoardSettingsFormProps> = ({
  board,
  onBoardUpdate = noop,
  onBoardRemove,
}) => {
  const {register, control, formState, handleSubmit} = useBoardSettingsForm(board)

  return (
    <>
      <form onSubmit={handleSubmit(onBoardUpdate)}>
        <h5>Title</h5>
        <Spacing space="0.5rem" vertical />
        <Input name="title" inputRef={register({required: true})} defaultValue={board.title} />

        <Spacing space="1rem" vertical />

        <h5>Description</h5>
        <Spacing space="0.5rem" vertical />
        <Input name="description" inputRef={register} defaultValue={board.description || ''} />

        <Spacing space="1rem" vertical />

        <h5>Private</h5>
        <Spacing space="0.5rem" vertical />
        <Controller
          name="private"
          control={control}
          defaultValue={board.private}
          render={({value, onChange}) => (
            <Toggle checked={value} defaultChecked={board.private} onChange={onChange} />
          )}
        />

        <Spacing space="1.5rem" vertical />

        <Button disabled={!formState.isDirty} appearance="primary" type="submit">
          Save
        </Button>
      </form>

      <Divider />

      <Button onClick={() => onBoardRemove?.(board)} appearance="primary" color="red">
        Remove board
      </Button>
    </>
  )
}
