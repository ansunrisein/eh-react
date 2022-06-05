import {defineMessages} from 'react-intl'

export const texts = defineMessages({
  title: {
    id: 'pages.dashboard.title',
    defaultMessage: 'Dashboard',
  },
  createBoardUnauthorized: {
    id: 'pages.dashboard.createBoardUnauthorized',
    defaultMessage: 'You should be logged in to create a board',
  },
  noBoards: {
    id: 'pages.dashboard.noBoards',
    defaultMessage: 'You have no boards',
  },
  createNow: {
    id: 'pages.dashboard.createNow',
    defaultMessage: 'Create now! :)',
  },
  notFound: {
    id: 'pages.dashboard.notFound',
    defaultMessage: 'Not found',
  },
  createWithSearchedNameSuggestion: {
    id: 'pages.dashboard.createWithSearchedNameSuggestion',
    defaultMessage:
      'You can <createButton>create</createButton> new board with the title <title>{search}</title> :)',
  },
  noPublicBoards: {
    id: 'pages.dashboard.noPublicBoards',
    defaultMessage: 'There is no public boards',
  },
  createPublicBoardSuggestion: {
    id: 'pages.dashboard.createPublicBoardSuggestion',
    defaultMessage: '<signInLink>Sign in</signInLink> and create first public board :)',
  },
  latestCreatedBoards: {
    id: 'pages.dashboard.latestCreatedBoards',
    defaultMessage: 'Latest created boards',
  },
  fetchMoreBoards: {
    id: 'pages.dashboard.fetchMoreBoards',
    defaultMessage: 'Fetch more boards',
  },
})
