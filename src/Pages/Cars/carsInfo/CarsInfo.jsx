import React from 'react'
import DelerInfo from './delerInfo/DelerInfo'
import IncludedFeatures from './includedFeatures/IncludedFeatures'
import FeaturesSoaces from './featuresSpecs/FeaturesSoaces'
import { Stack, Box, Tabs, Tab, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import CarsHeader from './carsHeader/CarsHeader'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const hilights = [
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
  {icon : "/assets/find-me-logo.png", title : "Mileage", value : "15 Miles"},
]
const included = [
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
  {title : "Carpeted Floor Mats"},
]

const CarsInfo = () => {
  const location = useLocation();

   // Create refs for each tab content
   const featuresRef = useRef(null);
   const includedRef = useRef(null);
   const dealerInfoRef = useRef(null);

  const [currentTab, setCurrentTab] = useState("0")

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);

    // Scroll to the corresponding tab content
    switch (newValue) {
      case '0':
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '1':
        includedRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '2':
        dealerInfoRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

const [data, setData] = useState({})

useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}car_details/1`)
  .then(res => {
    setData(res.data.data)
  })
  .catch(error => {
    console.log(error)
  })
}, [])

console.log(data)

  return (
    <>
      <CarsHeader />
      <Box sx={{backgroundColor : "#0D1E31"}}>
        <div style={{padding : "30px"}}>
          <Tabs variant='scrollable' value={currentTab} onChange={handleChange} sx={{marginBottom : "30px"}}>
            <Tab label="Features & Specs" value="0" sx={{ color: currentTab === '0' ? 'red' : '#fff' }} />
            <Tab label="Dealer Info" value="1" sx={{ color: currentTab === '1' ? 'red' : '#fff' }} />
            <Tab label="Payment Options" value="2" sx={{ color: currentTab === '2' ? 'red' : '#fff' }} />
          </Tabs>
        </div>
        <div ref={featuresRef}>
          <FeaturesSoaces hilights = {hilights} />
        </div>
        <div ref={includedRef}>
          <IncludedFeatures included = {included} />
        </div>
        <div ref={dealerInfoRef}>
          <DelerInfo />
        </div>
      </Box>
    </>
  )
}

export default CarsInfo

