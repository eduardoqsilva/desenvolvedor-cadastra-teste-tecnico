import { ToggleGroupItem, ToggleGroupRoot } from './sizesToggleGroup.styled'
import { Sizes } from '../../../../mocks/filters'

export function SizesToggleGroup() {
  return (
    <ToggleGroupRoot type="single">
      {Sizes.map((item) => (
        <ToggleGroupItem key={item} value={item}>
          {item}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  )
}
