import { Stack, Typography } from '@mui/material'
import React from 'react'
import ReadMoreTypography from '../../readMoreTypography/ReadMoretypography'
import useMediaQuery from '@mui/material/useMediaQuery';

const WorkWithUs = () => {

  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div style={{padding : "20px"}}>
        <Typography variant='h5' sx={{color : "#E58F9F"}}>Work With Us</Typography>
          <img src="/assets/car2.png" alt=""   style={{ width: !matches ? '400px' : '600px', height: "400px", objectFit: "cover" }} className='object-cover mt-6 rounded-xl' />
          <Typography variant='body1' sx={{marginTop : "20px", fontWeight: "bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam ipsa deleniti officia dolorum quisquam placeat debitis cumque incidunt! Perferendis quidem iste 
            autem cupiditate non facilis corporis culpa quae suscipit sed!
            autem cupiditate non facilis corporis culpa quae suscipit sed!
            autem cupiditate non facilis corporis culpa quae suscipit sed!
            autem cupiditate non facilis corporis culpa quae suscipit sed!
            </Typography>
    </div>
  )
}

export default WorkWithUs
