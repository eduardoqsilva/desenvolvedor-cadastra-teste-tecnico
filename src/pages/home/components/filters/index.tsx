import * as Accordion from '@radix-ui/react-accordion'
import {
  FiltersContainer,
  AccordionTrigger,
  AccordionContent,
  AccordionRoot,
} from './filters.styled'
import { CaretDown } from '@phosphor-icons/react'
import { RadioGroup } from '../RadioGroup'
import { SizesToggleGroup } from '../sizesToggleGroup'
import { Colors, PriceRange } from '../../../../mocks/filters'
import { useEffect, useState } from 'react'

export function Filters() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FiltersContainer>
      <AccordionRoot
        type="multiple"
        defaultValue={['cores', 'tamanhos', 'faixaPreco']}
        value={isMobile ? [] : ['cores', 'tamanhos', 'faixaPreco']}
      >
        <Accordion.Item value="cores">
          <Accordion.Header>
            <AccordionTrigger>
              cores
              <CaretDown className="caret" size={24} />
            </AccordionTrigger>
          </Accordion.Header>
          <AccordionContent>
            <RadioGroup name="color" items={Colors} />
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item value="tamanhos">
          <Accordion.Header>
            <AccordionTrigger>
              tamanhos
              <CaretDown className="caret" size={24} />
            </AccordionTrigger>
          </Accordion.Header>
          <AccordionContent>
            <SizesToggleGroup />
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item value="faixaPreco">
          <Accordion.Header>
            <AccordionTrigger>
              faixa de preços
              <CaretDown className="caret" size={24} />
            </AccordionTrigger>
          </Accordion.Header>
          <AccordionContent>
            <RadioGroup name="range" items={PriceRange} />
          </AccordionContent>
        </Accordion.Item>
      </AccordionRoot>
    </FiltersContainer>
  )
}
