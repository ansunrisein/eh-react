import React from 'react'
import {Button} from 'rsuite'
import {Flex} from 'reflexbox'
import {Spacing} from '@eh/react/ui'

export type DialogProps = {
  query?: string
  onYes?: () => unknown
  onNo?: () => unknown
}

export const Dialog: React.FC<DialogProps> = ({query, onYes, onNo}) => (
  <div>
    <h3>{query}</h3>
    <Flex marginTop="1rem" justifyContent="flex-end">
      <Button appearance="primary" color="red" onClick={onYes}>
        Yes
      </Button>
      <Spacing space="1rem" />
      <Button appearance="primary" onClick={onNo}>
        No
      </Button>
    </Flex>
  </div>
)
