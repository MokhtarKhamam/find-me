import { Box, Stack, Typography, Grid } from '@mui/material'
import React from 'react'

const FeaturesSoaces = ({hilights}) => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h6' gutterBottom sx={{color : "#62E970"}}>Features & Specs</Typography>
        <Stack sx={{flexDirection : {sx : "column", md : "row"}}} spacing={8}>
          <Box sx={{width : {sx : "100%", md : "50%"}, borderBottom : "1px solid #fff"}}>
            <Typography variant='h6' sx={{color : "#fff", marginTop : "30px"}}>highlights</Typography>
            <Grid container rowSpacing={2} sx={{marginTop : "10px",  alignItems : "center"}} >
              {
                hilights.map((element, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{padding : {sx : "0", md : "30px"}}}>
                    <Stack direction="row" spacing={2}>
                      <img src={element.icon} alt={element.title} className='w-8 h-8 rounded-full object-cover' />
                      <Box>
                        <Typography variant='body1' sx={{color : "#fff"}}>{element.title}</Typography>
                        <Typography variant='body1' sx={{color : "#707070"}}>{element.value}</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
          <Box sx={{width : {sx : "100%", md : "50%"}}}>
              <Typography variant='subtitle1' sx={{color : "#707070", marginTop : "30px"}}>By clicking the button above, I provide my electronic signature b
                y which I consent to (a) the Terms of Use and Privacy Policy, and (b) I am
                providing express written consent to sell/share my information with
                AutoWeb, its affiliates, automotive dealers, and other automotive or
                non-automotive third parties (and their agents or representatives
                and authorize them to contact me through automated means (e.g.
                , automatic telephone dialing system, text, artificial or pre-recorded
                messaging) for promotional marketing purposes at the phone number
                and email address I provided above, via live, pre-recorded
                , or auto dialed via telephone, mobile device (including SMS and
                MMS), and/or email even if my number is currently listed on
                Federal or any state Do Not Call or Do Not Email. I understand
                that consent is not a condition to purchase any product/service,
                and that I can revoke this consent at any time or opt-out of
                SMS messages by replying STOP. I acknowledge that 
                my carrier’s message and data rates may apply.
              </Typography>
          </Box>
        </Stack>
    </div>
  )
}

export default FeaturesSoaces
