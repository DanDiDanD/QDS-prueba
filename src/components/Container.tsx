import styled from 'styled-components'
import { palette } from '../constants/palette'

const SectionContainer = styled.section`
  background-color: ${palette.gray_3};
  padding-left: ${palette.spacer_3};
  padding-right: ${palette.spacer_3};
`

const DivContent = styled.div`
  padding-top: ${palette.spacer_4};
  padding-bottom: ${palette.spacer_4};
  max-width: ${palette.content_width};
  margin: auto;
  min-height: calc(100vh - ${palette.nav_height});
`

export const Container = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <SectionContainer>
    <DivContent>
      {children}
    </DivContent>
  </SectionContainer>
)
