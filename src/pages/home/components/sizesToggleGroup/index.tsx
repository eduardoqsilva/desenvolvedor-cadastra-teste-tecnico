import { ToggleGroupItem, ToggleGroupRoot } from './sizesToggleGroup.styled'
import { Sizes } from '../../../../mocks/filters'
import { useSearchParams } from 'react-router-dom'

export function SizesToggleGroup() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsObj = Object.fromEntries(searchParams)
  function handleChangeItem(e: string) {
    if (e) {
      setSearchParams({ ...paramsObj, size: e })
    } else {
      const newParamsObj = { ...paramsObj }
      delete newParamsObj.size
      setSearchParams({ ...newParamsObj })
    }
  }

  return (
    <ToggleGroupRoot type="single" onValueChange={handleChangeItem}>
      {Sizes.map((item) => (
        <ToggleGroupItem key={item} value={item}>
          {item}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  )
}
