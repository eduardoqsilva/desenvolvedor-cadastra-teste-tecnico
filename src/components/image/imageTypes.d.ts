import { ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: 'cover' | 'contain' | 'fill'
  loadIconSize?: `${number}%`
  className?: string
}
