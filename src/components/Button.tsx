import styled from 'styled-components'
import { palette } from '../constants/palette'

export const Button = styled.button<{ variant: string }>`
  background-color: ${({ variant }) => variant};
  padding: ${palette.spacer_2};
  padding-left: ${palette.spacer_3};
  padding-right: ${palette.spacer_3};
  box-shadow: ${palette.shadows};
  border-radius: 18px;
  border: 1px solid ${palette.gray_3};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${palette.secondary};
  }
`
