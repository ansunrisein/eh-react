import React, {createContext, useContext, useEffect} from 'react'
import {useEvent, useStore} from 'effector-react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {UpdateUserAvatarFeature} from './update-user-avatar'

export const UpdateUserAvatarFeatureContext = createContext<UpdateUserAvatarFeature>(
  new Proxy({} as UpdateUserAvatarFeature, {
    get() {
      throw new Error('Use UpdateUserAvatarFeatureProvider!')
    },
  }),
)

export type UpdateUserAvatarFeatureProviderProps = {
  updateUserAvatar: UpdateUserAvatarFeature
}

export const UpdateUserAvatarFeatureProvider: React.FC<UpdateUserAvatarFeatureProviderProps> = ({
  children,
  updateUserAvatar,
}) => (
  <UpdateUserAvatarFeatureContext.Provider value={updateUserAvatar}>
    {children}
  </UpdateUserAvatarFeatureContext.Provider>
)

export const withUpdateUserAvatarFeature =
  (providerProps: UpdateUserAvatarFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <UpdateUserAvatarFeatureProvider {...providerProps}>
        <Component {...props} />
      </UpdateUserAvatarFeatureProvider>
    )

export const useUpdateUserAvatarFeature = (): UpdateUserAvatarFeature =>
  useContext(UpdateUserAvatarFeatureContext)

export const useUserAvatar = () => {
  const {$userAvatar, fetchAvatarFx} = useUpdateUserAvatarFeature()

  const userAvatar = useStore($userAvatar)
  const loading = useStore(fetchAvatarFx.pending)

  useEffect(() => {
    if (!fetchAvatarFx.pending.getState()) {
      fetchAvatarFx()
    }
  }, [fetchAvatarFx])

  return {
    userAvatar,
    loading,
  }
}

export const useCurrentAvatar = () => {
  const {$currentAvatar} = useUpdateUserAvatarFeature()

  return useStore($currentAvatar)
}

export const useUploadAvatar = () => {
  const {uploadAvatarFx} = useUpdateUserAvatarFeature()

  return useAsyncFn<RemoveEffector<typeof uploadAvatarFx>>(uploadAvatarFx, [uploadAvatarFx])
}

export const useEditAvatar = () => {
  const {editAvatarFx} = useUpdateUserAvatarFeature()

  return useAsyncFn<RemoveEffector<typeof editAvatarFx>>(editAvatarFx, [editAvatarFx])
}

export const useRemoveAvatar = () => {
  const {removeAvatar} = useUpdateUserAvatarFeature()

  return useEvent(removeAvatar)
}
