import { Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DelerInfo = () => {
  return (
    <div style={{padding : "30px"}}>
      <Typography variant='h6' sx={{color : "#62E970", marginBottom : "30px"}}>Dealer Info</Typography>
      <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>SOUTH DADE TOYOTA</Typography>
      <Typography variant='body1' sx={{color : "#fff"}}><LocationOnIcon />29330 S Dixie Hwy, Homestead, FL - 24 miles away</Typography>
      <Typography variant='body1' sx={{color : "#fff", marginTop : "30px"}}>Information About These Listings
        All vehicle information and prices are established and provided by the offering dealers and not by Car.com. Offering dealers are solely re
        sponsible for the accuracy of all information regarding the vehicle presented and its compliance with applicable laws, rules, and regulations
        . Unless otherwise stated separately in the vehicle details, prices exclude taxes, title, registration, license, and other governmental fees; emis
        sion testing and compliance fees; freight and destination chargers; dealer documentary, processing, administrative, closing or similar fees; or
        prices for options (if any) added by dealer at customer’s request. Prices valid through any stated date of expiration. Quoted prices subject to c
        hange without notice to correct errors or omissions. Vehicles are subject to prior sale. Current mileage may vary from that stated due to te
        st drives or other intervening driving of the vehicle.
    </Typography>
    </div>
  )
}

export default DelerInfo
