import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyComponent = React.ComponentType<any>

export type ProviderBuilder = {
  add: <P extends AnyComponent>(...args: ProviderBuilderArguments<P>) => ProviderBuilder
  return: () => React.ComponentType
}

export type ProviderBuilderArguments<P extends AnyComponent> = [
  P,
  ...(P extends React.ComponentType<infer Props>
    ? Props extends React.ComponentProps<P>
      ? Props extends Record<string, never>
        ? []
        : Props extends Record<string, undefined>
        ? [] | [Omit<Props, 'children'>]
        : [Omit<Props, 'children'>]
      : []
    : [])
]

export const createProviderBuilder = (
  Container: React.ComponentType = ({children}) => <>{children}</>,
): ProviderBuilder => ({
  add: (...[Provider, props = {}]) =>
    createProviderBuilder(({children}) => (
      <Container>
        <Provider {...(props as React.ComponentProps<typeof Provider>)}>{children}</Provider>
      </Container>
    )),
  return: () => Container,
})
