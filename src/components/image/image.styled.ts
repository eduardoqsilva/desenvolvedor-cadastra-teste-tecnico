import { css, keyframes, styled } from 'styled-components'

const shine = keyframes`
  to {
    background-position-x: -400%;
  }
`

interface ImageWrapperProps {
  $loadIconSize: `${number}%`
  $isLoaded: boolean
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 100%;
  height: 100%;

  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 400% 100%;
  animation: 4s ${shine} linear infinite;

  ${(props) =>
    !props.$isLoaded
      ? css`
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="%23040404"></stop><stop offset=".3" stop-color="%23040404" stop-opacity=".9"></stop><stop offset=".6" stop-color="%23040404" stop-opacity=".6"></stop><stop offset=".8" stop-color="%23040404" stop-opacity=".3"></stop><stop offset="1" stop-color="%23040404" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(%23a12)" stroke-width="17" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="%23040404" stroke-width="17" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>');
            background-repeat: no-repeat;
            background-position: center;
            background-size: ${props.$loadIconSize};
          }
        `
      : ''}
`
interface ImageStyledProps {
  $objectFit: 'cover' | 'contain' | 'fill'
  $isLoaded: boolean
}
export const ImageStyled = styled.img<ImageStyledProps>`
  width: 100%;
  height: 100%;

  object-fit: ${(props) => props.$objectFit};

  transition: 0.1s ease-in;

  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
`
