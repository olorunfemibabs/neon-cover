import React from 'react'
import GovernanceMain from './component/GovernanceMain'
import Review from './component/Review'
import ProposalCreated from './component/ProposalCreated'

const GovernanceFeature = () => {
  return (
    <div>
      <GovernanceMain/>
      <Review />
      <ProposalCreated />
    </div>
  )
}

export default GovernanceFeature