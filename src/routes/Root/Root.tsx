import styled, { keyframes } from 'styled-components'


import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
// import StateHooks from '../../components/StateHooks'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const InfiniteRotation = styled.div`
  animation: ${rotate} 20s linear infinite;
  display: inline-block;
`

const Logo = styled.img<{ src: string, alt: string }>`
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`

const ReactLogo = styled(Logo)`
  filter: drop-shadow(0 0 2em #61dafbaa);
`

export default function Root() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <InfiniteRotation>
          <a href="https://react.dev" target="_blank">
            <ReactLogo src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </InfiniteRotation>
      </div>
      <h1>Vite + React</h1>
      {/* <StateHooks /> */}
    </>
  )
}
