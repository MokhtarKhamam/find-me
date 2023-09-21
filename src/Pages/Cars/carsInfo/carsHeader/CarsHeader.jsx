import { Stack, Box } from '@mui/material'
import React, { useEffect } from 'react'
import Slider from '../slider/Slider'
import CarsTitle from '../carsTitle/CarsTitle'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarDetails } from '../../../../Store/carDetailsSlice';

const CarsHeader = () => {
  const dispatch = useDispatch();

const carDetail = useSelector((state) => state.carDetail.carDetail);
const loading = useSelector((state) => state.carDetail.loading);
const error = useSelector((state) => state.carDetail.error);


useEffect(() => {
  dispatch(fetchCarDetails());
}, [dispatch]);

console.log(carDetail)
console.log(loading)
console.log(error)


  return (
    <Stack sx={{flexDirection : {sx : "column", md : "row"}, backgroundColor : "#F2F2F2", padding : "30px"}} spacing={8}>
        <Box sx={{ width: { base: "100%", md: "50%" } }}>
            <Slider />
        </Box>
        <Box sx={{ width: { base: "100%", md: "50%" } }}>
            <CarsTitle />
        </Box>
  </Stack>
  )
}

export default CarsHeader
