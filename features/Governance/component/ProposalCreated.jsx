import React from 'react'
import Proposal from './Proposal'

const ProposalCreated = () => {
  return (
    <main className='bg-[#FFFFFF] mt-4 h-[400px] rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <div className="w-[90%] mx-auto pt-2">

        <h2 className="text-[14px] font-bold mb-2"> Proposal Created</h2>
<Proposal/>
        </div>
    </main>
  )
}

export default ProposalCreated