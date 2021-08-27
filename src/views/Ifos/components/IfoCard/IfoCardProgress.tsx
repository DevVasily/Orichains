import React from 'react'
import styled from 'styled-components'
import { Progress } from '@pizzafinance/ui-sdk'

interface IfoCardProgressProps {
  progress: number
}

const StyledProgress = styled.div`
  margin-bottom: 16px;
`

const IfoCardProgress: React.FC<IfoCardProgressProps> = ({ progress }) => {
  return (
    <StyledProgress>
      <Progress primaryStep={progress} />
    </StyledProgress>
  )
}

export default IfoCardProgress
