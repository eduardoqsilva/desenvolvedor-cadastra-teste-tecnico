import { ToggleGroupItem, ToggleGroupRoot } from './sizesToggleGroup.styled'

const sizes = ['P', 'M', 'G', 'GG', 'U', '36', '38', '40']

export function SizesToggleGroup() {
  return (
    <ToggleGroupRoot type="single">
      {sizes.map((item) => (
        <ToggleGroupItem key={item} value={item}>
          {item}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  )
}
