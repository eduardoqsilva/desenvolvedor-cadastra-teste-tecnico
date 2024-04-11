import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  width: 100%;
  max-width: 116px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 14px;
`

export const ToggleGroupItem = styled(ToggleGroup.Item)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  border: 1px solid ${(props) => props.theme.colors.gray01};

  color: ${(props) => props.theme.colors.gray01};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: all 0.01s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &[data-state='on'] {
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`
