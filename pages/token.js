import Image from 'next/image';
import React from 'react';

const Token = () => {
  return (
    <div>
      <h2>Get Our Token</h2>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col flex-1 text-black'>
         <h2>Get our token in simple steps</h2>
         <p>Get NGN to insure yourself and stay protected.</p>
         <p>BOX</p>
        </div>
        <div className='flex flex-col flex-1'>
          <span className='relative font-semibold text-black
           text-xl border-b-4 w-1/5 pb-2 border-[#27AE60]'
           >Buy</span>
          <div className='relative mt-12'>
            <div className='bg-[#FAFAFA] w-4/5'>
              <div className='flex flex-col'>
                <span className='text-black'>Spend</span>
                <div className='flex flex-row items-center justify-between'>
                  <div>
                    <input placeholder='Type amount' className='border-none outline-none' />
                  </div>
                  <div>
                    <select name="currency" id="currency-select" className='relative border-none outline-none'>
                      <option value="naira" selected>
                      
                      </option>
                      <option value="euro"><img src='' alt=''></img><span>EUR</span></option>
                      <option value="pounds"><img src='' alt=''></img><span>GPB</span></option>
                      <option value="dollar"><img src='' alt=''></img><span>USD</span></option>
                      <option value="yen"><img src='' alt=''></img><span></span>JPY</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-[#FAFAFA] w-4/5 mt-6'>
              <div className='flex flex-col'>
                <span className='text-black'>Receive</span>
                <div className='flex flex-row items-center justify-between'>
                  <div>
                    <input placeholder='Type amount' className='border-none outline-none' />
                  </div>
                  <div>
                    <select name="currency" id="currency-select">
                      <option value="neon-cover" selected><img src='' alt=''></img><span>NCT</span></option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
