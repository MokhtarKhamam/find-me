import { Typography, Grid, Stack } from '@mui/material'
import React from 'react'





const IncludedFeatures = ({included}) => {
  return (
    <div style={{backgroundColor : "#000000", padding : "30px"}}>
        <Typography variant='h3' sx={{color : "#fff"}}>Included Features</Typography>
        <Grid container sx={{marginTop : "30px"}}>
        {
            included.map((element, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} xl={3} sx={{padding : "20px", marginBottom : "30px"}}>
                    <Stack direction="row">
                        <div className='w-2 h-2 rounded-full bg-green-700 mt-2 mr-2'></div>
                        <Typography variant='body1' sx={{color : "#fff", maxWidth : "100%", overflow : "hidden"}}>{element.title}</Typography>
                    </Stack>
                </Grid>
            ))
        }
        </Grid>
        <Typography variant='h6' gutterBottom sx={{color : "#fff", marginbottom : "30px"}}>Seller’s Notes</Typography>
        <Typography variant='body1' sx={{color : "#fff"}}>If you would like a quote on this vehicle, please call or complete the inquiry form. A member of our team will promptly send you
        a custom quote in writing. We can also provide you with lease and finance terms. Need financing? We can help find the best
        finance options and help you take advantage of any factory programs. We work with all credit types! Ice 2023 Toyota CorollaLE
        </Typography>
    </div>
  )
}

export default IncludedFeatures
