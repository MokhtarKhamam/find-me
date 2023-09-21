import { Paper } from '@mui/material'
import React, { useState } from 'react'
// import styles from "./listStyle.module.css"


const RequestsFilterRealEstate = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleFormSubmit = () => {
        console.log("hello")
    }


  return (
    <div>
        <Paper 
        component="form"
        onSubmit={handleFormSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            p: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
          }} >
        <input
        className='lg:basis-1/4 sm:basis-1/2 p-2'
        style={{outline: "none"}}
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select name="cars" id="cars" className='lg:basis-1/4 sm:basis-1/2 p-2 outline-none'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className='lg:basis-1/4 sm:basis-1/2 p-2 outline-none'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className='lg:basis-1/4 sm:basis-1/2 p-2 outline-none'>
            <option value="volvo">Volvocccccccccccccccc</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
          </Paper>
    </div>
  )
}

export default RequestsFilterRealEstate
