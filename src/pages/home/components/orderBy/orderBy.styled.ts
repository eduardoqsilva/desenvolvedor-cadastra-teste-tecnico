import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const SelectContainer = styled.div`
  height: auto;
  width: 100%;

  position: absolute;
  top: -75px;

  @media (max-width: 1590px) {
    transform: translateX(-172px);
  }
  @media (max-width: 800px) {
    position: initial;
    transform: translateX(0);
  }
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.gray01};
  background: #fff;
`
export const SelectTrigger = styled(Select.Trigger)`
  height: 42px;
  width: fit-content;
  min-width: 150px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 10px;
  white-space: nowrap;

  color: ${(props) => props.theme.colors.black};

  background-color: ${(props) => props.theme.colors.white01};
`
export const SelectViewport = styled(Select.Viewport)`
  padding: 0px;
`
export const SelectItem = styled(Select.Item)`
  display: flex;
  align-items: center;
  height: 25px;
  padding: 20px 35px 20px 25px;
  user-select: none;
  position: relative;

  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white01};
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${(props) => props.theme.colors.gray01};
    color: ${(props) => props.theme.colors.white01};
  }
`
export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white01};
`

export const SelectLabel = styled(Select.Label)`
  padding: 10px 10px 10px 25px;
  font-size: 14px;
  line-height: 25px;
  font-weight: bold;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray01};
`
