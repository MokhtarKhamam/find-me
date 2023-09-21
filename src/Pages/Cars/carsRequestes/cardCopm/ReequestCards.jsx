import React from 'react'
import RequestCard from './RequestCard'

const CardComponent = () => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-8'>
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </div>
  )
}

export default CardComponent
