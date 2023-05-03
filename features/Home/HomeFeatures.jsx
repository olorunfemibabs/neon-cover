import React from 'react'
import MajorCover from './component/MajorCover'
import Policy from './component/Policy'
import GeneratedPolicy from './component/GeneratedPolicy'

const HomeFeatures = () => {
  return (
    <main className=''>
      <MajorCover/>
      <GeneratedPolicy/>
      <Policy/>
    </main>
  )
}

export default HomeFeatures