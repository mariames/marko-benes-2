import TitleOFPage from '@/components/TitleOFPage'
import Wizard from '@/components/Wizard'
import React from 'react'

const page = () => {
  return (
    <>
      <TitleOFPage title="Project Planner" />
        <p className='text-white text-xl'>Submit the planner form or email me at marko@benis.studio.</p>
        <Wizard />
    </>
  )
}

export default page