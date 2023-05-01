import Image from 'next/image'
import React from 'react'

const TokenDesc = () => {
  return (
    <div className='flex flex-1 items-start justify-start flex-col px-6 h-full'>
        <h2 className='text-[#19192E] font-poppins font-semibold xs:text-[25px] text-[20px] w-full '>Get Our Token</h2>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col flex-1 items-start justify-start text-[#19192E]'>
                <div>
                    <Image
                    src="/undraw_crypto_flowers_re_dyqo.svg"
                    alt="Crypto flowers"
                    width={500}
                    height={800}
                    />
                </div>
                <h4 className='font-poppins font-semibold text-[18px] text-[#19192E] leading-[23px] m-3' >Get our token in simple steps</h4>
                <p className='font-poppins font-normal text-[16px] text-[#19192E] leading-[24px]' >Get NCT to insure yourself and stay protected.</p>
                <Image src="/credit-card.png" alt='credit card' width={100} height={70} />
            </div>
        </div>
    </div>
  )
}

export default TokenDesc
