import {useCallback, useEffect, useState} from 'react'
import {useUpload} from '@eh/react/features/shared/contexts/FileUploadContext'

export type UseUploadAvatarResult = {
  upload: (file: Blob) => Promise<string | null>
  remove: () => void
  avatar: string | null
  loading: boolean
}

export const useUploadAvatar = (defaultAvatar: string | null = null): UseUploadAvatarResult => {
  const uploadFile = useUpload()

  const [avatar, setAvatar] = useState(defaultAvatar)
  const [loading, setLoading] = useState(false)

  useEffect(() => setAvatar(defaultAvatar), [defaultAvatar])

  const remove = useCallback(() => setAvatar(null), [])

  const upload = useCallback(
    async (file: Blob) => {
      setLoading(true)

      return uploadFile(file)
        .then(res => {
          setAvatar(res)
          return res
        })
        .finally(() => setLoading(false))
    },
    [uploadFile],
  )

  return {
    upload,
    remove,
    avatar,
    loading,
  }
}
