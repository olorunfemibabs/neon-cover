import Image from 'next/image'
import React from 'react'

const TokenDesc = () => {
  return (
    <div>
        <h2 className='relative font-semibold '>Get Our Token</h2>
        <div className='flex flex-row items-center h-full'>
            <div className='flex flex-col flex-1 text-black'>
                <div>
                    <Image
                    src="/undraw_crypto_flowers_re_dyqo.svg"
                    alt="Crypto flowers"
                    width={500}
                    height={700}
                    />
                </div>
                <h2>Get our token in simple steps</h2>
                <p>Get NGN to insure yourself and stay protected.</p>
                <p>BOX</p>
            </div>
        </div>
    </div>
  )
}

export default TokenDesc
