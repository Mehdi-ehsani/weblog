import React from 'react'

const spinner = () => {
  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <div className='w-10 h-10 rounded-full   bg-conic animate-spin  '></div>
    </div>
  )
}

export default spinner