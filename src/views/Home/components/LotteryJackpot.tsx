import React from 'react'
import { Text } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import { useTotalRewards } from 'hooks/useTickets'

const LotteryJackpot = () => {
  const TranslateString = useI18n()
  const lotteryPrizeAmount = useTotalRewards()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ fontSize:'30px', lineHeight: '45px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }
  return (
    <Text bold fontSize="30px" style={{color:'#FFFFFF'}}>
      {getBalanceNumber(lotteryPrizeAmount).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}
    </Text>
  )
}

export default LotteryJackpot
