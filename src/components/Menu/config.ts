import { MenuEntry } from '@pizzafinance/ui-sdk'

const config: MenuEntry[] = [
  // {
  //   label: 'DRAGONSWAP',
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x105b81a13ECBb92773a7b9854D125Cb7478b8340&outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0x105b81a13ECBb92773a7b9854D125Cb7478b8340/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      // {
      //   label: 'DEX',
      //   href: 'https://dex.dragonswap.app/',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://info.cheeseswap.app',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://info.cheeseswap.app/token/0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://info.cheeseswap.app/pair/0x8405be915af56589756a275d4894fa9f0ff6ca0f',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://info.cheeseswap.app/accounts',
  //     },
  //   ],
  // },
  {
    label: 'Whitepaper',
    icon: 'InfoIcon',
    href: 'https://dragonswap.app/Dragonswap%20Whitepaper.pdf',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/dragonswapapp',
      },
      {
        label: 'Blog',
        href: 'https://dragonswap.medium.com',
      },
      {
        label: 'Token',
        href: 'https://bscscan.com/address/0x105b81a13ECBb92773a7b9854D125Cb7478b8340#code',
      },
    ],
  },
]

export default config
