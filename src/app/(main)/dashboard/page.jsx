import React from 'react'
import Welcome from './_components/Welcome'
import CreateOptions from './_components/CreateOptions'
import LatestInterview from './_components/LatestInterview'

const Dashboard = () => {
  return (
    <div>
      {/* <Welcome /> */}
      <h2 className='my-3 font-bold text-2xl'>DASHBOARD</h2>
      <CreateOptions />
      <LatestInterview />
    </div>
  )
}

export default Dashboard