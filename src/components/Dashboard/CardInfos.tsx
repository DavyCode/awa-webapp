import React from 'react'
import UserWalletCard from './Cards/wallet'
import UserPlanCard from './Cards/plans'
import UserTransactionHistory from './Cards/history'

const CardInfos = () => {
  return (
    <div className="mt-6 w-full">
        <UserWalletCard />
        <UserPlanCard />
        <UserTransactionHistory />
    </div>
  )
}

export default CardInfos