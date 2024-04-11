import {
  ItemContainer,
  RadioIndicator,
  RadioItem,
  RadioRoot,
} from './radioGroup.styled'
import { RadioGroupProps } from './radioGroupTypes'

export function RadioGroup({ items }: RadioGroupProps) {
  return (
    <RadioRoot>
      {items.map((item, key) => (
        <ItemContainer key={key}>
          <RadioItem id={'id' + key} value={item.value}>
            <RadioIndicator />
          </RadioItem>
          <label htmlFor={'id' + key}>{item.text}</label>
        </ItemContainer>
      ))}
    </RadioRoot>
  )
}
