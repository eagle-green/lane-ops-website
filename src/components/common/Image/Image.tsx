import type { ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

function Image({ src, alt, loading = 'lazy', decoding = 'async', ...rest }: ImageProps) {
  return <img src={src} alt={alt} loading={loading} decoding={decoding} {...rest} />
}

export default Image
