import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pizzafinance/ui-sdk'
import { NavLink } from 'react-router-dom'
import useLotteryTotalPrizesUsd from 'hooks/useLotteryTotalPrizesUsd'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const WinCard = () => {
  const lotteryPrize = Math.round(useLotteryTotalPrizesUsd()).toLocaleString()

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="#2d6eb6" size="lg" style={{marginBottom:'10px'}}>
          Lottery with
        </Heading>
        {/* <CardMidContent color="#EF4E7B">${lotteryPrize}</CardMidContent> */}
        <CardMidContent color="#FFFFFF">${0}</CardMidContent>
        {/* <Flex justifyContent="space-between"> */}
          <Heading color="#2d6eb6" size="lg" style={{marginTop:'10px'}}>
            up for grabs
          </Heading>
          {/* <NavLink exact activeClassName="active" to="/lottery">
            <ArrowForwardIcon mt={30} color="primary" />
          </NavLink> */}
        {/* </Flex> */}
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
