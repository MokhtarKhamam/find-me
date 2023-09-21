import { Button, colors, createTheme, Pagination, Stack, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import FilterRealEstate from './FilterRealEstate';
import CardRealEstate from './CardRealEstate';
import MapRealEstate from './MapRealEstate';
import WorkWithUs from './WorkWithUs';







const HomeRealEstate = () => {


  const theme = createTheme({
    palette:{
      primary: {
        main: colors.pink[300]
      }
    }
  });

  const sxStyle = {
    borderRadius : "20px"
  }

  //pageination
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  console.log(currentPage)



  return (
    <ThemeProvider theme = {theme}>
      <div style={{backgroundColor : "#FBF4EF"}}>
        <div style={{width: "90%", margin: "auto"}}>
          <div className='relative'>
            <img src="/assets/car2.png" alt="" style={{height: "450px"}} className='w-full object-cover rounded-lg block' />
            <FilterRealEstate />
          </div>
          <div style={{marginTop: "30px"}}>
            <Typography variant='h5' align='center'>Explore all things property</Typography>
            <div className='flex justify-center items-center gap-4 flex-wrap mt-4'>
              <Button variant='outlined' sx={sxStyle}>Buying</Button>
              <Button variant='outlined' sx={sxStyle}>Rentig</Button>
              <Button variant='outlined' sx={sxStyle}>Selling</Button>
              <Button variant='outlined' sx={sxStyle}>Villa</Button>
              <Button variant='outlined' sx={sxStyle}>Chalets</Button>
              <Button variant='outlined' sx={sxStyle}>Farms</Button>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-6 mt-8 '>
            <CardRealEstate />
            <CardRealEstate />
            <CardRealEstate />
            <CardRealEstate />
            <CardRealEstate />
            <CardRealEstate />
            <Pagination count={10}
            variant="outlined" 
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
            />
            </div>
            <div style={{marginTop : "30px"}}>
              <MapRealEstate />
            </div>
            <div style={{marginTop : "30px"}}>
              <WorkWithUs />
            </div>
          </div>
        </div>
      </div>
      </ThemeProvider>
  )
}

export default HomeRealEstate

