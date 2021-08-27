import React, { useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { Heading, Card, CardBody, Button, useModal } from '@pizzafinance/ui-sdk'
import { getPizzaAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import useTokenBalance from 'hooks/useTokenBalance'
import { useMultiClaimLottery } from 'hooks/useBuyLottery'
import { useTotalClaim } from 'hooks/useTickets'
import UnlockButton from 'components/UnlockButton'
import BuyModal from 'views/Lottery/components/TicketCard/BuyTicketModal'
import PizzaWinnings from './PizzaWinnings'
import LotteryJackpot from './LotteryJackpot'


const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledLotteryCard = styled(Card)`
  // background-image: url('/images/ticket-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 300px;
  text-align: center;  
  overflow: visible;
`
const StyledLotteryAccentCard = styled(Card)`
  // background-image: url('/images/ticket-bg.svg');  
  text-align: center;
  // background: linear-gradient(
  //   45deg,
  //   rgba(255, 0, 0, 1) 0%,
  //   rgba(255, 154, 0, 1) 10%,
  //   rgba(208, 222, 33, 1) 20%,
  //   rgba(79, 220, 74, 1) 30%,
  //   rgba(63, 218, 216, 1) 40%,
  //   rgba(47, 201, 226, 1) 50%,
  //   rgba(28, 127, 238, 1) 60%,
  //   rgba(95, 21, 242, 1) 70%,
  //   rgba(186, 12, 248, 1) 80%,
  //   rgba(251, 7, 217, 1) 90%,
  //   rgba(255, 0, 0, 1) 100%
  // );
  background:#0072bc;
  // background-size: 100% 100%;
  animation: ${RainbowLight} 2s linear infinite;
  // border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: 1;
`

const Block = styled.div`
 margin-bottom: 16px;
`
const CardImage = styled.img`
  // margin-top: 10px;
  margin-bottom: 16px;
`
const Label = styled.div`
  color: #2d6eb6;
  font-size: 14px;
`
const Actions = styled.div`
 display: flex;
 margin-top: 24px;
 button {
   flex: 1 0 50%;
 }
 `
 const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  width: 50%;
`

const Alert = styled.div`
  font-size: 16px;
  background-color: #D3D3D3;
  display: initial;
  padding: 5px 15px;
  border-radius: 30px;
  color: #000000;
`

const FarmedStakingCard = () => {
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const [requesteClaim, setRequestedClaim] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const { claimAmount } = useTotalClaim()
  const { onMultiClaim } = useMultiClaimLottery()

  const pizzaBalance = useTokenBalance(getPizzaAddress())


  const handleClaim = useCallback(async () => {
    try {
      setRequestedClaim(true)
      const txHash = await onMultiClaim()
      // user rejected tx or didn't go thru
      if (txHash) {
        setRequestedClaim(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onMultiClaim, setRequestedClaim])

  const [onPresentBuy] = useModal(<BuyModal max={pizzaBalance} tokenName="PIZZA" />)

  return (
    <StyledLotteryCard>
      <StyledLotteryAccentCard>a</StyledLotteryAccentCard>
      <CardBody style={{ position: "relative", zIndex: 2, background: "black" }}>
        <Heading size="xl" mb="24px" color="#2d6eb6">
          {TranslateString(550, 'ORI Lottery Desk')}
        </Heading>
        <CardImage src="/images/ticket-bg.png" alt="Orichain lottery logo" width={120} height={120} />
        <Block>
          <Row>
            <Left>
              <PizzaWinnings />
              <Label>{TranslateString(552, 'ORI to Collect')}</Label>
            </Left>
            <Right>
              <LotteryJackpot />
              <Label>{TranslateString(554, 'Total jackpot this round')}:</Label>
            </Right>
          </Row>
        </Block>
        <Block>
          <Alert>{TranslateString(554, 'Coming soon')}</Alert>
        </Block>      
      <Actions>
      {account ?     
        <Button
          id="dashboard-collect-winnings"
          disabled={getBalanceNumber(claimAmount) === 0 || requesteClaim}
          onClick={handleClaim}
          style={{ marginRight: '8px' }}
        >
          {TranslateString(556, 'Collect Winnings')}
        </Button>
        :<></>}
        {account ? 
        <Button id="dashboard-buy-tickets" variant="secondary" onClick={onPresentBuy} disabled>
          {TranslateString(558, 'Buy Tickets')}
        </Button>
        :<></>}
        {!account ?(<UnlockButton fullWidth /> ):<></>}
      </Actions>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default FarmedStakingCard
