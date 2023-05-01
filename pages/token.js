import React from 'react';
import TopBar from '@/components/TopBar'
import TokenFeatures from '@/features/Token/TokenFeatures';

const Token = () => {

  
  return (
    <div className='max-h-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]'>
      <TopBar title="Buy Token" />

      <div className='w-[96%] mx-auto'>
        <TokenFeatures />
      </div>
    </div>
  )
}

export default Token
