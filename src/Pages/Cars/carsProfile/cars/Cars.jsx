import { TabContext, TabPanel } from '@mui/lab'
import { Tab, Typography, Tabs } from '@mui/material'
import React, { useState } from 'react'
import CarsImage from './CarsImage'

const Cars = () => {

  const [activeTab, setActiveTab] = useState("1")



    const handleChange = (e, newValue) => {
      setActiveTab(newValue)
    }


  return (
    <div style={{backgroundColor : "#0D1E31", padding : "30px"}}>
    <Typography variant='h3' sx={{color : "#fff", textAlign : "center", marginBottom : "30px"}}>cars</Typography>
    <TabContext value={activeTab}  >
      <Tabs allowScrollButtonsMobile={true} variant="scrollable" value={activeTab} onChange={handleChange} sx={{width : {sx: "100%", md: "fit-content"}, margin : "auto","& .MuiTabScrollButton-root": {color: "#fff"}}}>
          <Tab value="1" sx={{backgroundColor : "#fff",padding : "8px 25px", borderRadius : "10px", marginLeft: "20px" }} label="أجار" />
          <Tab value="2" sx={{backgroundColor : "#fff",padding : "8px 25px", borderRadius : "10px", marginLeft: "20px" }} label="بيع" />
          <Tab value="3" sx={{backgroundColor : "#fff",padding : "8px 25px", borderRadius : "10px", marginLeft: "20px" }} label="قطع تبديل" />
          <Tab value="4" sx={{backgroundColor : "#fff",padding : "8px 25px", borderRadius : "10px", marginLeft: "20px" }} label="اكسسوار" />
          <Tab value="5" sx={{backgroundColor : "#fff",padding : "8px 25px", borderRadius : "10px", marginLeft: "20px" }} label="سيارة مناسبات" />
      </Tabs>
      <TabPanel value='1'><CarsImage /></TabPanel>
      <TabPanel value='2'><CarsImage /></TabPanel>
      <TabPanel value='3'><CarsImage /></TabPanel>
      <TabPanel value='4'></TabPanel>
      <TabPanel value='5'></TabPanel>
    </TabContext>
    
  </div>
  )
}

export default Cars
