import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Button, ControlLabel, Input, Tooltip, Whisper} from 'rsuite'
import {useForm} from 'react-hook-form'
import noop from 'noop6'
import {Spacing} from '@eh/react/ui'
import {CreateBoardVariables} from '../../graphql/types/CreateBoard'

export type BoardFormProps = {
  onSubmit?: (board: CreateBoardVariables) => unknown
}

export const BoardForm: React.FC<BoardFormProps> = ({onSubmit = noop, ...props}) => {
  const {register, handleSubmit} = useForm<CreateBoardVariables>()

  return (
    <form {...props} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column">
        <ControlLabel>Title</ControlLabel>
        <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
          <Input inputRef={register({required: true})} name="title" />
        </Whisper>
        <Spacing space="1rem" vertical />
        <ControlLabel>Description</ControlLabel>
        <Input name="description" inputRef={register()} componentClass="textarea" />
        <Box alignSelf="flex-end" marginTop="1rem">
          <Button type="submit">Create</Button>
        </Box>
      </Flex>
    </form>
  )
}
