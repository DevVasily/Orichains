import ReactDOM from 'react-dom'
import React from 'react'
import styled from 'styled-components'
import './index.css';
import App from './App'
import Providers from './Providers'
import backgroundImg from './assets/img/dragon_bg.png'
import backgroundMobileImg from './assets/img/dragon_mobile_bg.png'

const Container = styled.div`
  //background-image: url('${ backgroundImg }');
  //background-size: 100% 100%;
  align-items: center;
  display: flex;
  // background-color: #000;
  background: url('${ backgroundImg }') no-repeat;  
  flex-direction: column;
  background-size:cover;
  background-position: center center;
  min-height:100vh;
  @media(max-width:860px){
    background: url('${ backgroundMobileImg }') no-repeat;
  } 
`

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Container>
        <App />
      </Container>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
