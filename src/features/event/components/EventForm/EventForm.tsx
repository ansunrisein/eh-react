import React from 'react'
import {Button, DatePicker, Icon, IconButton, Input, List, Radio, RadioGroup, Steps} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import {Controller} from 'react-hook-form'
import noop from 'noop6'
import {EventType} from '@eh/react/.types/globalTypes'
import {Spacing, StepItem} from '@eh/react/ui'
import {useEventForm} from '../../hooks'
import {CreateEventVariables} from '../../graphql/types/CreateEvent'
import {hasContent} from './helpers'

export type EventFormProps = {
  defaultValues?: Omit<CreateEventVariables, 'boardId'>
  onSubmit?: (data: Omit<CreateEventVariables, 'boardId'>) => unknown
}

export const EventForm: React.FC<EventFormProps> = ({defaultValues, onSubmit = noop}) => {
  const {
    register,
    control,
    event,
    listFields,
    addListItem,
    removeListItem,
    handleSubmit,
  } = useEventForm(defaultValues)

  return (
    <Flex as="form" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
      <Steps vertical>
        <StepItem status={event.header ? 'finish' : 'wait'} icon="pencil" title="Header">
          <Input aria-label="header" name="header" inputRef={register} />
        </StepItem>
        <StepItem status={hasContent(event) ? 'finish' : 'wait'} icon="pencil" title="Content">
          <Controller
            name="type"
            control={control}
            render={({value, onChange, name}) => (
              <RadioGroup inline appearance="picker" name={name} onChange={onChange} value={value}>
                <Radio value={EventType.TEXT}>Text</Radio>
                <Radio value={EventType.LIST}>List</Radio>
                <Radio value={EventType.PICTURE}>Picture</Radio>
              </RadioGroup>
            )}
          />
          <Spacing space="1rem" vertical />
          {event.type === EventType.TEXT ? (
            <div aria-label="text content">
              <Input inputRef={register} aria-label="text" name="text" componentClass="textarea" />
            </div>
          ) : event.type === EventType.LIST ? (
            <section aria-label="list content">
              <List bordered>
                {listFields.map((e, i) => (
                  <List.Item key={e.id}>
                    <Flex>
                      <Input
                        aria-label="item"
                        name={`list[${i}].value`}
                        inputRef={register()}
                        defaultValue={e.value}
                      />
                      <Spacing space="1rem" />
                      <IconButton
                        aria-label={`remove item ${i + 1}`}
                        onClick={() => removeListItem(i)}
                        icon={<Icon icon="trash" />}
                      />
                    </Flex>
                  </List.Item>
                ))}
              </List>
              <Spacing space="0.8rem" vertical />
              <IconButton
                style={{float: 'right'}}
                onClick={addListItem}
                icon={<Icon icon="plus" />}
              >
                <Box as="span" padding="0 1rem">
                  Add
                </Box>
              </IconButton>
            </section>
          ) : event.type === EventType.PICTURE ? (
            <div aria-label="picture content">Picture</div>
          ) : (
            <></>
          )}
        </StepItem>
        <StepItem status={event.deadline ? 'finish' : 'wait'} icon="pencil" title="Deadline">
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
        </StepItem>
      </Steps>
      <Box alignSelf="flex-end">
        <Button type="submit" appearance="primary" disabled={!hasContent(event)}>
          Save
        </Button>
      </Box>
    </Flex>
  )
}
