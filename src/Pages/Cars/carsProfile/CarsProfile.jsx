import React, { useEffect, useState } from 'react'
import styles from "./carsProfile.module.css"
import OverView from './overview/OverView'
import { Box, Button, Grid, Rating, Stack, Tab, Tabs, Typography } from '@mui/material'
import Cars from './cars/Cars'
import Review from './review/Review'
import { TabContext, TabPanel } from '@mui/lab'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CarsProfile = () => {
  const {id} = useParams();
  const [currentValue, setCurrentValue] = useState("0")

  const [data,setData] = useState({})

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}Cars_shops/${id}`)
    .then(res => {
      setData(res.data.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  console.log(data.review_count, data.evaluation)



    const handleChange  = (e, newValue) => {
        setCurrentValue(newValue)
    }

  return (
    <div style={{backgroundColor : "#0D1E31"}}>
      <img src={data.images && `${process.env.REACT_APP_API_URL_IMAGE}${data.main_image}`} alt="" className={styles.background_image} />
          <TabContext value={currentValue}>
          <Tabs centered value={currentValue} onChange={handleChange}>
              <Tab label="Overview" value="0" sx={{color : "#fff"}} />
              <Tab label="Cars" value="1" sx={{color : "#fff"}} />
              <Tab label="Reviews" value="2" sx={{color : "#fff"}} />
          </Tabs>
          <TabPanel sx={{padding : "0"}} value='0'>{data &&<OverView data={data} />}</TabPanel>
          <TabPanel sx={{padding : "0"}} value='1'><Cars /></TabPanel>
          <TabPanel value='2'>{data && <Review review_count={data.review_count} evaluation={data.evaluation} />}</TabPanel>
          </TabContext>          

    </div>
  )
}

export default CarsProfile
