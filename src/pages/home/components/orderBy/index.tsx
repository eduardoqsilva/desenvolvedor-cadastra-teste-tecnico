import * as Select from '@radix-ui/react-select'
import {
  SelectContainer,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectViewport,
} from './orderBy.styled'
import { CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import { useSearchParams } from 'react-router-dom'

export function OrderBy() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsObj = Object.fromEntries(searchParams)
  function handleChangeItem(e: string) {
    if (e) {
      setSearchParams({ ...paramsObj, order: e })
    }
  }

  return (
    <SelectContainer>
      <Select.Root onValueChange={handleChangeItem}>
        <SelectTrigger>
          <Select.Value placeholder={'Ordenar Por:'} />
          <Select.Icon>
            <CaretDown size={20} />
          </Select.Icon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectViewport>
              <Select.Group>
                <SelectLabel>Ordernar Por</SelectLabel>
                <SelectItem value="recentes">
                  <SelectItemIndicator>
                    <Check size={16} weight="bold" />
                  </SelectItemIndicator>
                  <Select.ItemText>Mais Recentes</Select.ItemText>
                </SelectItem>
                <SelectItem value="menor">
                  <SelectItemIndicator>
                    <Check size={16} weight="bold" />
                  </SelectItemIndicator>
                  <Select.ItemText>Menor Preço</Select.ItemText>
                </SelectItem>
                <SelectItem value="maior">
                  <SelectItemIndicator>
                    <Check size={16} weight="bold" />
                  </SelectItemIndicator>
                  <Select.ItemText>Maior Preço</Select.ItemText>
                </SelectItem>
              </Select.Group>
            </SelectViewport>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </SelectContainer>
  )
}
