import React from 'react'
import User from './User'
import Pages from './Pages'
import LeftbarFooter from './LeftbarFooter'

const LeftBar = () => {
  return (
    <div className='w-full px-4 flex flex-col justify-between max-w-[300px]'>
      <div>
        <User />
        <Pages />
      </div>
      <LeftbarFooter />
    </div>
  )
}

export default LeftBar
