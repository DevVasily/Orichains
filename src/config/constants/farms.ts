import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    // lpSymbol: 'PIZZA',
    lpSymbol: 'ORI',
    lpAddresses: {
      97: '',
      // 56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
      56: '0x105b81a13ECBb92773a7b9854D125Cb7478b8340',
    },
    // tokenSymbol: 'PASTA',
    tokenSymbol: 'DHOARD',
    tokenAddresses: {
      97: '',
      // 56: '0x4375eA687330A95D42383Ef18AD3ea8C4Db7224d',
      56: '0x4686769B9a144bA7467745D5020C02b94177Eb08',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    // lpSymbol: 'PIZZA-BNB LP',
    lpSymbol: 'ORI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd73481a57614750a4abce959a7697e7d9291e0e2',
    },
    // tokenSymbol: 'PIZZA',
    tokenSymbol: 'ORI',
    tokenAddresses: {
      97: '',
      // 56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
      56: '0x105b81a13ECBb92773a7b9854D125Cb7478b8340',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    // lpSymbol: 'PIZZA-BUSD LP',
    lpSymbol: 'ORI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x30dc041a6f43ee46f6402c05d028ea27f7180809',
    },
    // tokenSymbol: 'PIZZA',
    tokenSymbol: 'ORI',
    tokenAddresses: {
      97: '',
      // 56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
      56: '0x105b81a13ECBb92773a7b9854D125Cb7478b8340',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },
  {
    pid: 12,
    lpSymbol: 'ORI-DEGG LP',
    lpAddresses: {
      97: '',
      56: '0x9ecda7e7b578ead89619f17038a2e71922dd395b',
    },
    tokenSymbol: 'ORI',
    tokenAddresses: {
      97: '',
      56: '0x105b81a13ECBb92773a7b9854D125Cb7478b8340',
    },
    quoteTokenSymbol: QuoteToken.DEGG,
    quoteTokenAdresses: contracts.degg,
    isCommunity: false,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  {
    pid: 6,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },
  // {
  //   pid: 4,
  //   lpSymbol: 'BNB-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: false,
  // },
  {
    pid: 7,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'BNB-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  {
    pid: 10,
    lpSymbol: 'BNB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    isCommunity: false,
  },
   
  
]

export default farms
