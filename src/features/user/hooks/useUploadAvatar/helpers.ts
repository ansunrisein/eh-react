export type CloudinaryResponse = {
  secure_url: string
}

export const uploadFileToCloudinary = (file: Blob): Promise<CloudinaryResponse> => {
  const body = new FormData()

  body.append('upload_preset', process.env.REACT_APP_CDN_UPLOAD_PRESET as string)
  body.append('file', file)

  return fetch(process.env.REACT_APP_CDN_UPLOAD_URL as string, {
    method: 'post',
    body,
  }).then(response => response.json())
}
