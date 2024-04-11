import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const RadioRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;

  margin-top: 14px;
`

export const RadioItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 16px;
  height: 16px;
  border: none;
  border: 2px solid ${(props) => props.theme.colors.gray01};
  padding: 2px;
`
export const RadioIndicator = styled(RadioGroup.Indicator)`
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const Label = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`
