export type Upload = (file: Blob) => Promise<string | null>

export type CdnContextValue = {
  upload: Upload
}
