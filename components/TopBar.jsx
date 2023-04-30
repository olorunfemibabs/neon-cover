import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const TopBar = (props) => {
  return (
    <main className="">
        <div className=" flex justify-between px-8 pt-[42px] pb-[42px] border-b-[1px]  border-[#C6C6C6] ">
            <h2 className='text-[32px] font-[600]'>{props.title}</h2>
            <div className="">

                <ConnectButton/>
            </div>
        </div>

    </main>
  )
}

export default TopBar