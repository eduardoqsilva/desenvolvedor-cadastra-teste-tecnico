/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translate(-10px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translate(0);
  }
  to {
    opacity: 0;
    transform: translate(-10px);
  }
`

export const FiltersContainer = styled.aside`
  width: 100%;
  min-height: 500px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white02};
  padding: 16px;
  border-radius: 16px;
  transition: all 0.1s ease-in;
`

export const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  transition: all 0.1s ease-in;
`

export const AccordionTrigger = styled(Accordion.Trigger)`
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.gray02};
  border: none;

  & .caret {
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='close'] > .caret {
    transform: rotate(180deg);
  }

  &[data-state='open'] > .caret {
    transform: rotate(-180deg);
  }
`

export const AccordionContent = styled(Accordion.Content)`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 0.2s ease-in;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 0.3s ease-in;
  }
`
