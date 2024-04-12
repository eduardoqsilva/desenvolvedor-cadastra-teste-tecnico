import {
  ItemContainer,
  RadioIndicator,
  RadioItem,
  RadioRoot,
} from './radioGroup.styled'
import { RadioGroupProps } from './radioGroupTypes'
import { useSearchParams } from 'react-router-dom'

export function RadioGroup({ items, name }: RadioGroupProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsObj = Object.fromEntries(searchParams)

  function handleChangeItem(e: string) {
    if (e) {
      setSearchParams({ ...paramsObj, [name]: e })
    }
  }

  return (
    <RadioRoot onValueChange={handleChangeItem}>
      {items.map((item, key) => (
        <ItemContainer key={key}>
          <RadioItem id={name + key} value={item.value}>
            <RadioIndicator />
          </RadioItem>
          <label htmlFor={name + key}>{item.text}</label>
        </ItemContainer>
      ))}
    </RadioRoot>
  )
}
