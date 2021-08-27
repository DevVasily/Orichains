import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import pizzaABI from 'config/abi/pizza.json'
import masterchefABI from 'config/abi/masterchef.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc20'
import { getPizzaAddress, getMasterChefAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, fastRefresh])

  return balance
}

export const useTotalSupply = () => {
  const { slowRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const pizzaContract = getContract(pizzaABI, getPizzaAddress())
      const supply = await pizzaContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [slowRefresh])

  return totalSupply
}

export const useBurnedBalance = () => {
  const { slowRefresh } = useRefresh()
  const [balance, setBalance] = useState<BigNumber>()

  useEffect(() => {
    async function fetchBalance () {
      const masterChefContract = getContract(masterchefABI, getMasterChefAddress())
      const res = await masterChefContract.methods.burnedamount().call()
      setBalance(new BigNumber(res))
    }
      fetchBalance()
  }, [slowRefresh])
  return balance;
}

export const useDcashPerBlock = () => {
  const { slowRefresh } = useRefresh()
  const [block, setBlock] = useState<BigNumber>()

  useEffect(() => {
    async function fetchBlock () {
      const masterChefContract = getContract(masterchefABI, getMasterChefAddress())
      const res = await masterChefContract.methods.dcashPerBlock().call()
      setBlock(new BigNumber(res))
    }
      fetchBlock()
  }, [slowRefresh])
  return block;
}

export default useTokenBalance
