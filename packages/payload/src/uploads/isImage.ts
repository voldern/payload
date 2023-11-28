export default function isImage(mimeType: string): boolean {
  return (
    ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp', 'image/tiff'].indexOf(mimeType) > -1
  )
}
