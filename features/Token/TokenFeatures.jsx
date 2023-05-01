import React from 'react'
import TokenDesc from './components/TokenDesc'
import TokenForm from './components/TokenForm'

const TokenFeatures = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between py-6 px-6'>
      <TokenDesc />
      <TokenForm />
    </div>
  )
}

export default TokenFeatures
