import { Box, IconButton, InputAdornment, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Popup from './popup/Popup';



const MyButton = styled('Button')({
    color: '#fff',
    backgroundColor: '#E58F9F',
    padding: "8px 20px",
    borderRadius: "25px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#d32f2f",
    }
  });


const FilterRealEstate = () => {
  const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("0")

    const handleTab = (_ , newValue) => {
        setActiveTab(newValue)
      }
      //state to open and close filter popup
      const [open, setOpen] = useState(false)

    

  return (
    <div className='absolute top-8 left-1/2 translate-x-[-50%] rounded-lg w-5/6'>
    <Typography variant='h4' gutterBottom sx={{color : "#fff"}} align='center'>Properties to call home</Typography>
    <Box sx={{backgroundColor : "#fff", borderRadius : "30px", padding : "20px"}}>
      <Tabs value={activeTab} 
      onChange={handleTab} 
      centered textColor='primary' 
      indicatorColor='primary' 
      variant="scrollable" 
      sx={{width : {sx: "100%", md: "fit-content"}, margin : "auto","& .MuiTabScrollButton-root": {color: "#000"}}}
        
      >
        <Tab label="rent" value="0" sx={{color : "#E58F9F"}} />
        <Tab label="Buy" value="1" sx={{color : "#E58F9F"}} />
        <Tab label="Sell" value="2" sx={{color : "#E58F9F"}} />
        <Tab label="Farms" value="3" sx={{color : "#E58F9F"}} />
        <Tab label="Chalet" value="4" sx={{color : "#E58F9F"}} />
      </Tabs>
      <div className='flex justify-between items-center sm:gap-4 lg:gap-10 flex-wrap'>
      <TextField
      label="Search" 
      variant="outlined" 
      sx={{ width: {xs: "100%", md: "50%"}, borderRadius: "50px" }}
      InputProps={{
        sx:{borderRadius: "30px"},
        endAdornment: 
        (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon sx={{color : "#E58F9F"}} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
        <Stack direction="row" spacing={4} sx={{marginTop :"20px"}}>
          <MyButton onClick={() => setOpen(!open)}>Filter</MyButton>
          <MyButton sx={{backgroundColor :"#ffffff", color: "#000", border: "1px solid #000", "&:hover" :{border : "1px solid #fff"} }}>Search</MyButton>
        </Stack>
      </div>
    </Box>
    <Stack direction="row" spacing={4} sx={{marginTop: "30px", justifyContent: "center"}}>
      <MyButton onClick={() => navigate("/steps")}>Submit Your Request</MyButton>
      <MyButton onClick={() => navigate("/requestsrealestate")} sx={{padding: {xs: "2px 5px", md: "8px 20px"},backgroundColor : "#fff",border: "1px solid #000",color : "#000E" }}>Requests</MyButton>
    </Stack>
    <Popup open={open} setOpen={setOpen} />
  </div>
  )
}

export default FilterRealEstate
