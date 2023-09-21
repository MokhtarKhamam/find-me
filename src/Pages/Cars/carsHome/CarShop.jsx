import React, { useEffect, useState } from 'react'
import styles from "./carsHome.module.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CarShop = () => {
  const navigate = useNavigate();



  const handleNavigate = (id) => {
    navigate(`/cars/profile/${id}`)
  }

  const [carsShop, setCarsShop] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}Cars_shops`)
    .then(res => {
      setCarsShop(res.data.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className={styles.card_content}>
      {
        carsShop.map(element => (
        <div className={styles.car_profile} key={element.id}>
          <img src="/assets/car2.png" alt="" />
          <button className='next_button' onClick={() => handleNavigate(element.id)}>Show More</button>
        </div>
        ))
      }
    </div>
  )
}

export default CarShop
