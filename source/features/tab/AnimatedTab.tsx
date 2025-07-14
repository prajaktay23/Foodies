import React, { FC } from 'react'
import { SharedStateProvider } from './SharedContext'
import UserBottomTab from '@navigation/UserBottomTab'

const AnimatedTab: FC = () => {
  return (
    <SharedStateProvider>
        <UserBottomTab />
    </SharedStateProvider>
  )
}

export default AnimatedTab;