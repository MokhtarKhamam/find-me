import React from 'react'
import RequestsFilterRealEstate from './RequestsFilterRealEstate'
import CardsRequestsRealEstate from './CardsRequestsRealEstate'

const RequestsRealEstate = () => {
  return (
    <div style={{padding : "20px", backgroundColor :"#FBF4EF"}}>
      <RequestsFilterRealEstate />
      <CardsRequestsRealEstate />
    </div>
  )
}

export default RequestsRealEstate
