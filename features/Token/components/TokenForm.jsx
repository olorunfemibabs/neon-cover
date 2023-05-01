import React from 'react'

const TokenForm = () => {

  let dropOptions = [
    { id: 1, name: "Naira", symbol: "NGN" },
    { id: 2, name: "Dollar", symbol: "USD" },
    { id: 3, name: "Pounds", symbol: "GPB" },
    { id: 4, name: "Yen", symbol: "JPY" },
    { id: 5, name: "Euro", symbol: "EUR" },
  ]

  return (
    <div className='flex flex-1 items-start justify-start flex-col px-6 w-full h-full '>
    <div className='flex flex-col flex-1 h-full '>
    <form>

      <div className=' flex flex-col'>
        <span className=' ml-3 font-semibold font-poppins text-[#19192E]text-xl'>
          Buy
      </span>
        <div className='border-b-2 border-[#19192E] w-2/5 mt-1'/>
      </div>

      <div className='mt-6 w-full h-full shadow-xl p-6'>
        <div className='bg-[#FAFAFA] w-full h-full mt-6 cursor-pointer p-4 rounded-3xl hover:border-[1px] border-[#19192E] ease-in-out duration-100'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-[#19192E]'>Spend</span>
              <div className='flex flex-row items-center justify-between mt-2'>
                <div>
                  <input placeholder='Type amount' type='number' className='border-none outline-none p-1 bg-[#FAFAFA] text-[#19192E]' />
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
                </div>

              </div>
          </div>
        </div>

        <div className='bg-[#FAFAFA] w-full h-full mt-6 cursor-pointer p-4 rounded-3xl hover:border-[1px] border-[#19192E] ease-in-out duration-100'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-[#19192E]'>Receive</span>
            <div className='flex flex-row items-center justify-between mt-2'>
              <div>
                <input placeholder='Type amount' type='number' className='border-none outline-none p-1 bg-[#FAFAFA] text-[#19192E]' />
              </div>
              <div>
                <div>
                  <label htmlFor="option">
                  </label>
                  <select name="currency" id="currency-select" className='relative border-none outline-none cursor-pointer'>
                    <option value="neon-cover" selected>NCT</option>
                  </select>
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
  )
}

export default TokenForm
