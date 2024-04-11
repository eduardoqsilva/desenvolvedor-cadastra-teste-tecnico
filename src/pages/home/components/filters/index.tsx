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

export function Filters() {
  return (
    <FiltersContainer>
      <AccordionRoot type="multiple" defaultValue={['cores']}>
        <Accordion.Item value="cores">
          <Accordion.Header>
            <AccordionTrigger>
              cores
              <CaretDown className="caret" size={24} />
            </AccordionTrigger>
          </Accordion.Header>
          <AccordionContent>
            <RadioGroup items={Colors} />
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
            <RadioGroup items={PriceRange} />
          </AccordionContent>
        </Accordion.Item>
      </AccordionRoot>
    </FiltersContainer>
  )
}
