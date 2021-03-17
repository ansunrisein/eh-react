import {useCallback, useEffect, useState} from 'react'
import {CloudinaryResponse, uploadFileToCloudinary} from './helpers'

export type UseUploadAvatarResult = {
  upload: (file: Blob) => Promise<CloudinaryResponse | undefined>
  remove: () => void
  avatar: string | null
  loading: boolean
}

export const useUploadAvatar = (defaultAvatar: string | null = null): UseUploadAvatarResult => {
  const [avatar, setAvatar] = useState(defaultAvatar)
  const [loading, setLoading] = useState(false)

  useEffect(() => setAvatar(defaultAvatar), [defaultAvatar])

  const remove = useCallback(() => setAvatar(null), [])

  const upload = useCallback(async (file: Blob) => {
    setLoading(true)

    return uploadFileToCloudinary(file)
      .then(res => {
        setAvatar(res.secure_url)
        return res
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    upload,
    remove,
    avatar,
    loading,
  }
}
