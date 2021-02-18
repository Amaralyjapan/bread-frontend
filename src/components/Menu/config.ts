import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
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
        href: 'https://bsc.bread.exchange/',
      },
      {
        label: 'Liquidity',
        href: 'https://bsc.bread.exchange/pool',
      },
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
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.bread.exchange/',
      },
      {
        label: 'Tokens',
        href: 'https://info.bread.exchange/tokens',
      },
      {
        label: 'Pairs',
        href: 'hhttps://info.bread.exchange/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.bread.exchange/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.bread.exchange/',
      },
      {
        label: 'Github',
        href: 'https://github.com/Bread-Exchange',
      },
      {
        label: 'Docs',
        href: 'https://docs.bread.exchange/',
      },
      {
        label: 'Blog',
        href: 'https://breadexchange.medium.com',
      },
    ],
  },
]

export default config
