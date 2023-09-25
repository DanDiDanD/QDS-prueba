import styled from 'styled-components'
import { palette } from '../constants/palette'
import { useContext } from 'react'
import { DataContext } from './DataContext'

const HeaderContainer = styled.header`
  background-color: ${palette.secondary};
  padding-left: ${palette.spacer_3};
  padding-right: ${palette.spacer_3};
  height: ${palette.nav_height};
`

const Nav = styled.nav`
  display: flex;
  color: ${palette.gray_4};
  justify-content: space-between;
  align-items: start;
  font-weight: ${palette.font_weight_heavy};
  max-width: ${palette.content_width};
  margin: auto;
  padding-top: ${palette.spacer_1};
  height: ${palette.nav_height};
`

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`

const CartButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${palette.gray_4};
  font-size: ${palette.font_size_3};
  font-weight: ${palette.font_weight_heavy};
  padding: 0;
`

export const Header = (): JSX.Element => {
  const contextValue = useContext(DataContext)

  if (!contextValue) throw new Error('')

  const { count, totalPrice } = contextValue

  return (
    <HeaderContainer>
      <Nav>
        <NavDiv>
          TIENDA
        </NavDiv>
        <NavDiv>
          <CartButton onClick={() => { console.log('hola') }}>
            {count} ({totalPrice}) {' '}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </CartButton>
        </NavDiv>
      </Nav>
    </HeaderContainer>
  )
}
