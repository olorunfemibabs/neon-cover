import React from 'react'
import TokenDesc from './components/TokenDesc'
import TokenForm from './components/TokenForm'

const TokenFeatures = () => {
  return (
    <div className='flex flex-row items-center justify-between mt-4'>
      <TokenDesc />
      <TokenForm />
    </div>
  )
}

export default TokenFeatures
