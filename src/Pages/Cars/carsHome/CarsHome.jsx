import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidbar from './Sidbar'
import CarShop from './CarShop'
import axios from 'axios'

const CarsHome = () => {




  return (
    <Stack sx={{flexDirection : {sx: 'column', md: "row-reverse", background : "#0D1E31", position : "sticky"}}}>
      <Box sx={{ 
        height : {xs : "auto", md : "calc(100vh - 75px)"},  
        borderLeft: "1px solid #686262", px: {sx: 0,md: 2, height: "calc(100vh - 75px)", position: "sticky" },
        overflowX : "scroll",
         '&::-webkit-scrollbar': {
         width: '0'
        },
        }}>
        <Sidbar />
      </Box>
      <Box p={2} sx={{overflowY: "auto",height : "90vh",  flex: 2, '&::-webkit-scrollbar': {display: 'none',}}}>
        <CarShop />
      </Box>
    </Stack>
  )
}

export default CarsHome
