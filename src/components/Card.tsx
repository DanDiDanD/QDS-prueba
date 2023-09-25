import { useContext } from 'react'
import { DataContext } from './DataContext'
import styled from 'styled-components'
import { palette } from '../constants/palette'
import { type Product } from '../types/product'

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 210px 160px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  box-shadow: ${palette.shadows};
  text-align: center;
`

const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`

const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`

const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: ${palette.font_size_3};
`

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: ${palette.font_size_1};
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: ${palette.gray_3};
`

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`

export const ButtonCard = styled.button<{ variant: string }>`
  background-color: ${({ variant }) => variant === 'primary' ? palette.primary : palette.warning};
  font-size: ${palette.font_size_3};
  padding: ${palette.spacer_1};
  padding-left: ${palette.spacer_5};
  padding-right: ${palette.spacer_5};
  box-shadow: ${palette.shadows};
  border-radius: 18px;
  border: 1px solid ${palette.gray_3};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${palette.secondary};
  }
`
export const Card = ({ img, title, price, description, item }: {
  img: string
  title: string
  price: number
  description: string
  item: Product
}): JSX.Element => {
  const contextValue = useContext(DataContext)

  if (!contextValue) throw new Error('')

  const { products, addProduct, removeProduct } = contextValue

  const itemIsInCart = products.some((product) => product.id === item.id)

  return (
    <CardWrapper>
      <CardImage background={img} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextDate>${price}</CardTextDate>
        <CardTextBody>
          {description}
        </CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          {itemIsInCart
            ? (
              <ButtonCard
                variant="warning"
                onClick={() => { removeProduct(item) }}
              >Quitar carrito</ButtonCard>)
            : (
              <ButtonCard
                variant="primary"
                onClick={() => { addProduct(item) }}
              >Añadir al Carrito</ButtonCard>)
          }
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  )
}
