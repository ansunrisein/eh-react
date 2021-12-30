import React, {createContext, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {useUserQuery} from '@eh/entities/user'
import {UserEntity} from './user'

export const UserEntityContext = createContext<UserEntity>(
  new Proxy({} as UserEntity, {
    get() {
      throw new Error('Use UserEntityProvider!')
    },
  }),
)

export type UserEntityProviderProps = {
  user: UserEntity
}

export const UserEntityProvider: React.FC<UserEntityProviderProps> = ({children, user}) => (
  <UserEntityContext.Provider value={user}>{children}</UserEntityContext.Provider>
)

export const withUserEntity =
  (providerProps: UserEntityProviderProps): Hoc =>
  Component =>
  props =>
    (
      <UserEntityProvider {...providerProps}>
        <Component {...props} />
      </UserEntityProvider>
    )

export const useUserEntity = (): UserEntity => useContext(UserEntityContext)

export const useUser = () => {
  const {data, loading} = useUserQuery()

  return {
    user: data?.me,
    loading,
  }
}

export const useEditUserInfo = () => {
  const {editUserInfoFx} = useUserEntity()

  return useAsyncFn<RemoveEffector<typeof editUserInfoFx>>(editUserInfoFx, [editUserInfoFx])
}
