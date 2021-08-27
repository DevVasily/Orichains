import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image, Text } from '@pizzafinance/ui-sdk'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Text)`  
  margin-left: 4px;
  margin-top: 5px; 
  font-color: #808080;
  font-size: 13px; 
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        {/* <Flex justifyContent="center" paddingTop="5px"> */}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />}           */}
          {/* {(farmImage==="bnb-busd") || (farmImage==="bnb-cake") || (farmImage==="bnb-eth") ? <MultiplierTag>Deposit Tax 4%</MultiplierTag> : <MultiplierTag>No Deposit Tax</MultiplierTag>}                 */}
          <MultiplierTag style={{color:'#808080'}}>No Deposit Tax</MultiplierTag>
          <MultiplierTag style={{color:'#808080'}}>Withdrawal Tax 5%</MultiplierTag>
          <MultiplierTag style={{background: "#2d6eb6", padding: '2px 10px', color: 'white', borderRadius: '10px'}}>{multiplier}</MultiplierTag>
        {/* </Flex> */}
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
