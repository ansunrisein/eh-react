import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Button, Input, Steps, Toggle, Tooltip, Whisper} from 'rsuite'
import noop from 'noop6'
import {Controller} from 'react-hook-form'
import {StepItem} from '@eh/react/ui'
import {useBoardForm} from '../../hooks'
import {CreateBoardVariables} from '../../graphql/types/CreateBoard'

export type BoardFormProps = {
  onSubmit?: (board: CreateBoardVariables) => unknown
}

export const BoardForm: React.FC<BoardFormProps> = ({onSubmit = noop}) => {
  const {register, handleSubmit, board, control} = useBoardForm()

  return (
    <Flex as="form" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
      <Steps vertical>
        <StepItem status={board.title ? 'finish' : 'wait'} icon="pencil" title="Title">
          <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
            <Input inputRef={register({required: true})} name="title" />
          </Whisper>
        </StepItem>
        <StepItem status={board.description ? 'finish' : 'wait'} icon="pencil" title="Description">
          <Input name="description" inputRef={register()} componentClass="textarea" />
        </StepItem>
        <StepItem status="wait" icon="lock" title="Private">
          <Controller
            name="private"
            control={control}
            defaultValue={false}
            render={({value, onChange}) => (
              <Toggle checked={value} defaultChecked={false} onChange={onChange} />
            )}
          />
        </StepItem>
      </Steps>
      <Box alignSelf="flex-end" marginTop="1rem">
        <Button appearance="primary" type="submit">
          Create
        </Button>
      </Box>
    </Flex>
  )
}
