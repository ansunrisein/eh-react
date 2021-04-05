import React from 'react'
import {Meta, Story} from '@storybook/react'
import {createMockClient} from 'mock-apollo-client'
import {ApolloProvider} from '@apollo/client'
import {ME, UPDATE_AVATAR, UPDATE_PROFILE} from '@eh/react/features/user/graphql'
import {ClientUploadProvider} from '@eh/react/features/shared/contexts/FileUploadContext'
import {SettingsPage} from './SettingsPage'

export default {
  component: SettingsPage,
  title: 'user/pages/SettingsPage',
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
} as Meta

const client = createMockClient()
client.setRequestHandler(ME, () =>
  Promise.resolve({
    data: {
      me: {
        id: '69',
        nickname: 'antonchik1337',
        name: 'Anton',
        avatar:
          'https://avatars.githubusercontent.com/u/31159587?s=400&u=56eb4d76bbeae350f4d2699eca2ec364da11a2cb&v=4',
      },
    },
  }),
)
client.setRequestHandler(UPDATE_PROFILE, variables => {
  const data = {me: {...variables, id: '69'}, __typename: 'Query'}
  client.cache.modify({
    id: client.cache.identify(data),
    fields: value => ({...value, ...data.me}),
  })
  return Promise.resolve({data: data.me})
})
client.setRequestHandler(UPDATE_AVATAR, variables => {
  const data = {me: {...variables, id: '69'}, __typename: 'Query'}
  client.cache.modify({
    id: client.cache.identify(data),
    fields: value => ({...value, ...data.me}),
  })
  return Promise.resolve({data: data.me})
})

export const Usual: Story = props => (
  <ApolloProvider client={client}>
    <ClientUploadProvider>
      <SettingsPage {...props} />
    </ClientUploadProvider>
  </ApolloProvider>
)
