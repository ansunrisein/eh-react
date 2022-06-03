import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {MediaUploadService} from '@eh/shared/lib/media-upload'
import {
  EditUserAvatarDocument,
  EditUserAvatarMutation,
  EditUserAvatarMutationVariables,
  UserAvatarDocument,
  UserAvatarQuery,
} from '../api'

export type UpdateUserAvatarFeature = ReturnType<typeof createUpdateUserAvatarFeature>

export type UpdateUserAvatarFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
  imageUploadService: MediaUploadService
}

export const createUpdateUserAvatarFeature = ({
  domain,
  imageUploadService,
  apollo,
}: UpdateUserAvatarFeatureDeps) => {
  const fetchAvatarFx = domain.effect(() =>
    apollo
      .query<UserAvatarQuery>({query: UserAvatarDocument})
      .then(e => e.data?.me?.avatar || null),
  )

  const uploadAvatarFx = domain.effect(imageUploadService.upload)

  const editAvatarFx = domain.effect(({avatar}: {avatar: string | null}) =>
    apollo
      .mutate<EditUserAvatarMutation, EditUserAvatarMutationVariables>({
        mutation: EditUserAvatarDocument,
        variables: {avatar},
      })
      ?.then(e => e.data?.updateAvatar?.avatar || null),
  )

  const removeAvatar = domain.event()

  const $userAvatar = domain
    .store<string | null>(null)
    .on(fetchAvatarFx.doneData, (_, avatar) => avatar)
    .on(editAvatarFx.doneData, (_, avatar) => avatar)

  const $currentAvatar = domain
    .store<string | null>(null)
    .on(uploadAvatarFx.doneData, (_, avatar) => avatar)
    .on(fetchAvatarFx.doneData, (_, avatar) => avatar)
    .reset(removeAvatar)

  return {
    $currentAvatar,
    $userAvatar,
    fetchAvatarFx,
    uploadAvatarFx,
    editAvatarFx,
    removeAvatar,
  }
}
