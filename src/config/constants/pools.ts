import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'ORI',
    earnToken: 'ORI',
    stakingTokenName: QuoteToken.ORI,
    stakingTokenAddress: '0x105b81a13ECBb92773a7b9854D125Cb7478b8340',
    contractAddress: {
      97: '',
      56: '0x26129EF0c3e5907985262D94a91084030019d2a1',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://orichains.tech/',
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },

]

export default pools
