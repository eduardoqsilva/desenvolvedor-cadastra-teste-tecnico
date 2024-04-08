import { useState } from 'react'
import { ImageStyled, ImageWrapper } from './image.styled'
import { ImageProps } from './imageTypes'

export function Image({
  loadIconSize = '20%',
  objectFit = 'cover',
  src,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <ImageWrapper $isLoaded={isLoaded} $loadIconSize={loadIconSize}>
      <ImageStyled
        onLoad={handleImageLoad}
        $isLoaded={isLoaded}
        $objectFit={objectFit}
        src={src}
        {...props}
      />
    </ImageWrapper>
  )
}
