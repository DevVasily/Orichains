import React from 'react'
import { Text } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useTotalClaim } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const PizzaWinnings = () => {
  const TranslateString = useI18n()
  const { claimAmount } = useTotalClaim()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ fontSize:'30px', lineHeight: '45px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }
  return <CardValue value={getBalanceNumber(claimAmount)} />
}

export default PizzaWinnings
