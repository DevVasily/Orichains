import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pizzafinance/ui-sdk'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  text-align:center;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  const totalValue = useTotalValue();

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="xl" mb="24px" color="#2d6eb6" style={{marginBottom:'10px', textAlign:'center'}}>
          {TranslateString(762, 'Total Value Locked')}
        </Heading>
        {/* <Heading size="xl" mb="24px" color="#2d6eb6" style={{textAlign:'center'}}>
          {TranslateString(762, '(TVL)')}
        </Heading> */}
          <>
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
            {/* <Heading size="xl">{`$${0}`}</Heading> */}
            <Text color="#2d6eb6" style={{marginTop:'10px', textAlign:'center'}}>{TranslateString(764, 'Across all LPs and Pools')}</Text>
          </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
