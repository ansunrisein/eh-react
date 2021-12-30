export interface MediaUploadService {
  upload(file: Blob): Promise<string | null>
}
