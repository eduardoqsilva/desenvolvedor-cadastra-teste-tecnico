import styled from 'styled-components'

export const CardContainer = styled.article`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white02};
  border-radius: 16px;
  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  /* box-shadow:
    0px 27px 80px 0px rgba(0, 0, 0, 0.04),
    0px 9.855px 29.201px 0px rgba(0, 0, 0, 0.03),
    0px 4.785px 14.177px 0px rgba(0, 0, 0, 0.02),
    0px 2.346px 6.95px 0px rgba(0, 0, 0, 0.02),
    0px 0.927px 2.748px 0px rgba(0, 0, 0, 0.01); */

  & .title {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 19.07px;
  }

  & .price {
    font-weight: 600;
    font-size: 1rem;
    line-height: 21.79px;
  }

  & .split {
    font-weight: 400;
    font-size: 1rem;
    line-height: 21.79px;
  }
  & .buy {
    width: 100%;
    height: 33px;
    background-color: ${(props) => props.theme.colors.black};
    border: none;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 19.07px;
    color: ${(props) => props.theme.colors.white01};
    border-radius: 8px;
    transition: all 0.1s ease-in;

    &:active {
      transform: scale(0.98);
    }
  }
`
export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 19/29;
  overflow: hidden;
  border-radius: 8px;
`
