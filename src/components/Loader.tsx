import styled from 'styled-components'

const Spinner = styled.div`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  color: #000;
  border: 2px solid;
  box-sizing: border-box;
  position: relative;
  transform-origin: left;
  animation: l2 1s infinite linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    margin: auto;
    width: 50%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: content-box;
    transform-origin: 50% calc(100% - 4px);
    animation: inherit;
  }

  &::after {
    inset:auto 0 calc(100% + 2px);
    animation-duration: 0.5s;
    animation-direction: reverse;
    transform-origin: 50% calc(200% - 2px);
  }

  @keyframes l2{
    100% {transform:rotate(1turn)}
  }
`

const SpinnerContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = (): JSX.Element => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  )
}
