import styled from 'styled-components'
import { palette } from '../constants/palette'

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

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <Nav>
      <NavDiv>
        TIENDA
      </NavDiv>
      <NavDiv>
        CARRITO
      </NavDiv>
    </Nav>
  </HeaderContainer>
)
