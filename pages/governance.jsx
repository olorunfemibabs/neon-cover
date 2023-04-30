import TopBar from '@/components/TopBar'
import GovernanceFeature from '@/features/Governance/GovernanceFeature'
import React from 'react'



export default function Governance() {
  return (
    <main className='max-h-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]'>
<TopBar   title="Governance"/>

<div className="w-[96%] mx-auto">
<GovernanceFeature/>
</div>
    </main>
  )
}


