import React from 'react'
import compose from 'compose-function'
import NextApp from 'next/app'
import {domain} from 'effector-next'
import {withTheme} from './theme'
import {withStore} from './store'

export const App = compose(withTheme(), withStore(domain))(NextApp)
