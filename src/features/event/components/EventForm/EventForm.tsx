import React from 'react'
import {Button, DatePicker, Input, List, Radio, RadioGroup, Steps} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import {Controller} from 'react-hook-form'
import noop from 'noop6'
import {EventType} from '@eh/react/.types/globalTypes'
import {Spacing} from '@eh/react/ui'
import {useEventForm} from '../../hooks'
import {CreateEventVariables} from '../../graphql/types/CreateEvent'
import {hasContent} from './helpers'
import {Item} from './Item'

export type EventFormProps = {
  onSubmit?: (data: Omit<CreateEventVariables, 'boardId'>) => unknown
}

export const EventForm: React.FC<EventFormProps> = ({onSubmit = noop}) => {
  const {register, control, setValue, event, fields, append, remove, handleSubmit} = useEventForm()

  return (
    <Flex as="form" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
      <Steps vertical>
        <Item status={event.header ? 'finish' : 'wait'} icon="pencil" title="Header">
          <Input name="header" inputRef={register} />
        </Item>
        <Item status={hasContent(event) ? 'finish' : 'wait'} icon="pencil" title="Content">
          <RadioGroup
            inline
            appearance="picker"
            onChange={value => setValue('type', value)}
            value={event.type}
          >
            <Radio value={EventType.TEXT}>Text</Radio>
            <Radio value={EventType.LIST}>List</Radio>
            <Radio value={EventType.PICTURE}>Picture</Radio>
          </RadioGroup>
          <Spacing space="1rem" vertical />
          {event.type === EventType.TEXT ? (
            <Input inputRef={register} name="text" componentClass="textarea" />
          ) : event.type === EventType.LIST ? (
            <>
              <List bordered>
                {fields.map((e, i) => (
                  <List.Item key={e.id}>
                    <Flex>
                      <Input name={`list[${i}].value`} inputRef={register()} />
                      <Spacing space="1rem" />
                      <Button onClick={() => remove(i)}>Delete</Button>
                    </Flex>
                  </List.Item>
                ))}
              </List>
              <Spacing space="0.8rem" vertical />
              <Button
                style={{paddingRight: '4rem', paddingLeft: '4rem', float: 'right'}}
                onClick={() => append({value: ''})}
              >
                Add
              </Button>
            </>
          ) : event.type === EventType.PICTURE ? (
            <div>Picture</div>
          ) : (
            <></>
          )}
        </Item>
        <Item status={event.deadline ? 'finish' : 'wait'} icon="pencil" title="Deadline">
          <Controller
            control={control}
            name="deadline"
            render={({value, onChange}) => (
              <DatePicker
                value={value}
                onChange={onChange}
                placement="rightEnd"
                disabled={!hasContent(event)}
                format="YYYY-MM-DD HH:mm:ss"
              />
            )}
          />
        </Item>
      </Steps>
      <Box alignSelf="flex-end">
        <Button type="submit" appearance="primary" disabled={!hasContent(event)}>
          Save
        </Button>
      </Box>
    </Flex>
  )
}
