import { Grid } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CarsImage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cars/info")
  }


    const image = ["/assets/Lamborghini.png", "/assets/Lamborghini.png", "/assets/Lamborghini.png", "/assets/Lamborghini.png", "/assets/Lamborghini.png",]

  return (
    <>
        <Grid container gap={4}>
                {
            image.map((element, index) => (
                <Grid item key={index} sx={{width :{sx: "auto", md: "30%"}}}>
                  <img src={element} alt="" style={{width : "100%", height : "400px", objectFit : "cover", borderRadius :"20px"}} onClick={handleClick} />
                </Grid>
            ))
        }
        </Grid>
    </>
  )
}

export default CarsImage
