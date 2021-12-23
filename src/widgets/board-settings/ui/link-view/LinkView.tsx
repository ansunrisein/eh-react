import React from 'react'
import {RiAddLine} from 'react-icons/ri'
import {Loader, Panel} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {useBoardLink} from '@eh/entities/board-link'
import S from './LinkView.module.scss'

export type LinkViewProps = {
  linkId: string
}

export const LinkView: React.FC<LinkViewProps> = ({linkId}) => {
  const {boardLink, loading} = useBoardLink(linkId)

  return (
    <div className="relative">
      {boardLink && (
        <Panel bordered>
          <h4>{boardLink.name}</h4>
          <ul>
            {boardLink.permissions.map((e, i) => (
              <li key={i} className={S.permission}>
                <Icon as={RiAddLine} />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </Panel>
      )}
      {loading && <Loader size="md" center />}
    </div>
  )
}
