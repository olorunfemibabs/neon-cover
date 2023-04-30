import Image from 'next/image';
import React from 'react';

const Token = () => {


  let dropOptions = [
    { id: 1, name: "Naira", symbol: "NGN", image: '/public/naira.png' },
    { id: 2, name: "Dollar", symbol: "USD", image: '/public/dollar.png' },
    { id: 3, name: "Pounds", symbol: "GPB", image: '/public/pound-sterling.png' },
    { id: 4, name: "Yen", symbol: "JPY", image: '/public/yen.png' },
    { id: 5, name: "Euro", symbol: "EUR", image: '/public/euro.png' },
  ];

  
  return (
    <div className='relative h-screen w-full'>
      <h2>Get Our Token</h2>
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

        <div className='flex flex-col flex-1 h-full'>
          <form>

            <div className=' flex flex-col'>
              <span className=' ml-10 font-semibold text-black
              text-xl'>Buy</span>
              <div className='border-b-4 border-[#19192E] w-1/5 mt-2'/>
            </div>

            <div className='relative mt-12 w-full h-full'>
              <div className='bg-[#FAFAFA] w-4/5 h-fit mt-6 cursor-pointer p-4 rounded-3xl hover:border-[1px] border-[#19192E] ease-in-out duration-100'>
                <div className='flex flex-col'>
                  <span className='text-black'>Spend</span>
                    <div className='flex flex-row items-center justify-between'>
                      <div>
                        <input placeholder='Type amount' className='border-none outline-none p-1' />
                      </div>

                      <div>
                        <div>
                          <label htmlFor="option">
                          </label>
                          <select name="currency" id="currency-select" className='relative border-none outline-none cursor-pointer'>
                            {
                              dropOptions.map(({id, name, symbol}) => {
                                return(
                                  <option key={id} value={name}>{symbol}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        <div>
                            {
                              dropOptions.map(({id, name, symbol, image}) => {
                                return(
                                  <div key={id}>
                                    <Image src={image} alt={name} width={4} height={4} />
                                  </div>
                                )
                              })
                            }
                        </div>
                      </div>

                    </div>
                </div>
              </div>

              <div className='bg-[#FAFAFA] w-4/5 h-fit mt-6 cursor-pointer p-4 rounded-3xl hover:border-[1px] border-[#19192E] ease-in-out duration-100 '>
                <div className='flex flex-col'>
                  <span className='text-black'>Receive</span>
                  <div className='flex flex-row items-center justify-between mt-4'>
                    <div>
                      <input placeholder='Type amount' className='border-none outline-none p-1' />
                    </div>
                    <div>
                      <div>
                        <label htmlFor="option">
                        </label>
                        <select name="currency" id="currency-select" className='relative border-none outline-none cursor-pointer'>
                          <option value="neon-cover" selected>NCT</option>
                        </select>
                      </div>
                      <div>
                        <Image />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className='cursor-pointer w-2/5 bg-[#19192E] text-white rounded-xl p-2 mt-9 hover:bg-[#FAFAFA] hover:text-black ease-in-out duration-300'>Buy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Token
