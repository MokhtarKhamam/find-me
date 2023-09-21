import { Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cars = () => {
    const navigate = useNavigate();


  return (
    <div 
    style={{backgroundImage: `url("/assets/car2.png")`, backgroundSize : "cover", height : "calc(100vh - 75px)", position : "relative" }}
    >
        <button onClick={() => navigate("/cars/home")} className='next_button'>Next</button>
    </div>
  )
}

export default Cars
