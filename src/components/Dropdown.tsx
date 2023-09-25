import styled from 'styled-components'
import { useContext } from 'react'
import { DataContext } from './DataContext'
import { palette } from '../constants/palette'
import { Button } from './Button'

const DropdownContainer = styled.div`
  position: absolute;
  min-width: 350px;
  top: 35px;
  right: 0px;
  background-color: ${palette.gray_3};
  border: 1px solid #ccc;
  padding: 8px;
  box-shadow: ${palette.shadows};
  z-index: 999;
  border-radius: 10px;
  color: ${palette.gray_1};
`

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

const ItemInfo = styled.div`
  flex: 1;
`

const ItemTitle = styled.p`
  font-size: 16px;
  margin: 0;
`

const ItemPrice = styled.p`
  font-size: 14px;
  margin: 0;
`

const ButtonContainer = styled.div`
  text-align: center;
`

export const CartDropdown = (): JSX.Element => {
  const contextValue = useContext(DataContext)

  if (!contextValue) throw new Error('')

  const { products, count, removeProduct, emptyCart } = contextValue

  return (
    <DropdownContainer>

      {products.map(product => (
        <ItemContainer key={product.id}>
          <ItemImage src={product.images[0]} alt={product.title} />
          <ItemInfo>
            <ItemTitle>{product.title}</ItemTitle>
            <ItemPrice>${product.price}</ItemPrice>
          </ItemInfo>
          <Button
            variant={palette.warning}
            onClick={() => { removeProduct(product) }}>Eliminar</Button>
        </ItemContainer>
      ))}
      {count > 0
        ? (
          <ButtonContainer>
            <Button variant={palette.secondary} onClick={emptyCart}>Vaciar Carrito</Button>
          </ButtonContainer>)
        : <>
          <h1>Tu carrito está vacío</h1>
          <p>Empieza a comprar</p>
        </>
      }
    </DropdownContainer>
  )
}
