import styled from 'styled-components'
import { palette } from '../constants/palette'
import { Card } from './Card'
import { type ProductList } from '../types/product'
import { Loader } from './Loader'

const CardContainerWrapper = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${palette.spacer_5}
`

export const CardContainer = ({ data, isLoading }: { data: ProductList | undefined, isLoading: boolean }): JSX.Element => {
  if (isLoading) return <Loader />
  if (!data) return <>...no data</>

  const { products } = data

  return (
    <CardContainerWrapper>
      {products.map((product) => (
        <Card key={product.id} title={product.title} img={product.images[0]} description={product.description} price={product.price} item={product} />
      ))}
    </CardContainerWrapper>
  )
}
