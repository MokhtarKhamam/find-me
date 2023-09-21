import { Typography } from '@mui/material'
import React from 'react'

const CarsTitle = () => {
  return (
    <div>
      <Typography variant='h3' align='center' gutterBottom>Lamborghini</Typography>
      <Typography variant='body1' align='center' gutterBottom sx={{marginBottom : "40px"}}>$222,00</Typography>
      <Typography variant='body1' align='center' gutterBottom>SOUTH DADE TOYOTA29330 S Dixie Hwy, Homestead, FL - 24 miles away</Typography>
    </div>
  )
}

export default CarsTitle
