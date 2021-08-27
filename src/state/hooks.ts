import BigNumber from 'bignumber.js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync } from './actions'
import { State, Farm, Pool } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (pastaId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.pastaId === pastaId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 6 // USDT-BNB LP // 3
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).times(farm.tokenPriceVsQuote) : ZERO
}

export const usePricePizzaBusd = (): BigNumber => {
  const pid = 1 // PIZZA-BNB LP
  const bnbPriceUSD = usePriceBnbBusd()
  // alert(bnbPriceUSD);
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceBusdBnb = (): BigNumber => {
  const pid = 6 // USDT-BNB LP // 3
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceCakeBnb = (): BigNumber => {
  const pid = 7 // USDT-BNB LP // 3
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceEthBnb = (): BigNumber => {
  const pid = 10 // USDT-BNB LP // 3
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceDeggDcash = (): BigNumber => {
  const pid = 12 // USDT-BNB LP // 3
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceDcashBnb = (): BigNumber => {
  const pid = 1 // USDT-BNB LP // 3
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).times(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceDeggBnb = (): BigNumber => {
  const DeggpriceDcash = usePriceDeggDcash()
  const DcashpriceBnb = usePriceDcashBnb()
  return DeggpriceDcash && DcashpriceBnb ? DeggpriceDcash.times(DcashpriceBnb) : ZERO
  // return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const dcashPrice = usePricePizzaBusd();
  const deggPrice = usePriceDeggBnb()
  const cakePrice = usePriceCakeBnb()
  const ethPrice = usePriceEthBnb()
  let value = new BigNumber(0);
  /*
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val;
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = (bnbPrice.times(farm.lpTotalInQuoteToken));
      }else if (farm.quoteTokenSymbol === QuoteToken.DCASH) {
        val = (dcashPrice.times(farm.lpTotalInQuoteToken));
      }else{
        val = (farm.lpTotalInQuoteToken);
      }
      value = value.plus(val);
    }
  }
  */

  for(let i = 0 ; i < farms.length; i ++ ){
    const farm = farms[i]
    if(farm.lpTotalInQuoteToken){
      let val = new BigNumber(0);
      let tmp = new BigNumber(1);
      if(farm.quoteTokenSymbol === QuoteToken.BNB) tmp = tmp.times(bnbPrice)
      if(farm.quoteTokenSymbol === QuoteToken.DEGG) tmp = tmp.times(bnbPrice).times(deggPrice)
      if(farm.quoteTokenSymbol === QuoteToken.CAKE) tmp = tmp.times(bnbPrice).times(cakePrice)
      if(farm.quoteTokenSymbol === QuoteToken.ETH) tmp = tmp.times(bnbPrice).times(ethPrice)

      val = tmp.times(farm.lpTotalInQuoteToken)
      value = value.plus(val)
    }
  }
  return value;
}
