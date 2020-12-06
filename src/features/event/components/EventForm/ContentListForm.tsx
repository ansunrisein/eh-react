import React, {memo} from 'react'
import {Button, Input, List} from 'rsuite'
import {Flex} from 'reflexbox'

export type ContentListFormProps = {
  content: string[]
  onChange: (content: string[]) => void
}

export const ContentListForm: React.FC<ContentListFormProps> = memo(({content, onChange}) => {
  const addListItem = () =>
    (!content.length || !!content[content.length - 1]) && onChange([...content, ''])

  const changeListItem = (index: number) => (text: string) =>
    onChange(content.map((e, i) => (i === index ? text : e)))

  const filterEmptyListItems = () =>
    onChange(content.filter((e, i, arr) => !!e || i === arr.length - 1))

  const deleteListItem = (index: number) => () => onChange(content.filter((_, i) => i !== index))

  return (
    <>
      <List bordered>
        {content.map((e, i) => (
          <List.Item key={i}>
            <Flex>
              <Input value={e} onChange={changeListItem(i)} onBlur={filterEmptyListItems} />
              <Button onClick={deleteListItem(i)}>Delete</Button>
            </Flex>
          </List.Item>
        ))}
      </List>
      <Button onClick={addListItem}>+</Button>
    </>
  )
})

ContentListForm.displayName = 'ContentListForm'
