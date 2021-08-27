import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pizzafinance/ui-sdk'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import PizzaStats from './components/PizzaStats'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import EarnAPYCard from './components/EarnAPYCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/pizza-bg-mobile.svg');
  // background-image: url('/images/dragon_head.svg');
  background-repeat: no-repeat;
  background-size: 100px 150px;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 5px;
  // padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/home-bg.svg'), url('/images/home-bg2.svg');
    // background-image: url('/images/home-bg.png'), url('/images/home-bg2.png');
    background-position: left center, right center;
    background-size: 200px;
    height: 320px;
    padding-top: 0;
  }
`

const Block = styled.div`
  text-align: center;
  margin-bottom: 5px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Block>
        <Heading as="h1" size="xxl" mb="24px" style={{color:'#FFFFFF', fontFamily:'titling regular'}}>          
          ORICHAIN FINANCE
        </Heading>
        <Text>{TranslateString(578, 'Orichain will be the AMA of the Future')}</Text>
      </Block>
      <Block>
        <img src="/images/dark_ori.png" alt="Orichain logo" width={128} height={128} />
      </Block>
      <div>      
      <Cards>
        <FarmStakingCard />
        <LotteryCard />
      </Cards>
      <Cards>
        <PizzaStats />
        <TotalValueLockedCard />
      </Cards>
      {/* <CTACards> */}
      <Cards>
        <EarnAPYCard />
        {/* <EarnAssetCard /> */}
        <WinCard />
      {/* </CTACards>       */}
      </Cards>
      </div>      
    </Page>
  )
}

export default Home
