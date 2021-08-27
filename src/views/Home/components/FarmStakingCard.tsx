import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import PizzaHarvestBalance from './PizzaHarvestBalance'
import PizzaWalletBalance from './PizzaWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  // background-image: url('/images/pizza-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 300px;
  text-align: center;
`

const Block = styled.div`
  margin-bottom: 55px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: #2d6eb6;
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
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

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        {/* <Heading size="xl" mb="24px"  color="#a000e6"> */}
        <Heading size="xl" mb="24px"  color="#2d6eb6">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        {/* <CardImage src="/images/pizza.svg" alt="pizza logo" width={64} height={64} /> */}
        <CardImage src="/images/ori-token-D.png" alt="Orichain logo" width={64} height={64} />
        <Block>
          <Row>
            <Left>
              <PizzaHarvestBalance />
              <Label>{TranslateString(544, 'ORI to Harvest')}</Label>
            </Left>
            <Right>
              <PizzaWalletBalance />
              <Label>{TranslateString(546, 'ORI in Wallet')}</Label>
            </Right>
          </Row>
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting DCASH')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
