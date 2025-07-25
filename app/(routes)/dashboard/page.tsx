import React from 'react'
import HistoryList from './_components/HistoryList'
import DoctorsAgentList from './_components/DoctorsAgentList'
import AddNewSessionDialog from './_components/AddNewSessionDialog'

const Dashboard = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl'>My Dashboard</h2>
        <AddNewSessionDialog />
      </div>
      <HistoryList />
      <DoctorsAgentList />
    </div>
  )
}

export default Dashboard
