import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

import { useNavigate } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import { Button } from "@mui/material";
import "./Overview.css"

import ReservationCard from './Reservation/ReservationCard';


import LinearProgress from '@mui/material/LinearProgress';
import { APIInstance } from '../../../Services/Api';

function Overview(props) {
    const [loding, setLoding] = useState(true);
    const [myData, setMyData] = useState();
    const [dateAndTime, setDateAndTime] = useState();

    const [numState, SetNumState] = useState('');
    const num = (n) => {
        SetNumState(n)
    }
    const navigate = useNavigate()
    const MapHandler = () => {

        navigate("/map", { state: { lat: myData.address[0].lat, long: myData.address[0].long } })
    }


    useEffect(() => {
        // alert(props.id)

        APIInstance.Get(`show_shop/${props.id}`)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.status) {
                        setMyData(res.data.data);
                        props.GetMainImg(res.data.data.main_image , res.data.data.color )
                        // console.log(res.data.data.free_dates_and_times);
                        setDateAndTime(res.data.data.free_dates_and_times);
                        setLoding(false);
                    } else {
                        const errorMessage = res.data.message || "Connection Failed";
                        alert(errorMessage);
                        throw new Error(errorMessage);
                    }
                } else {
                    alert("Failed to fetch data. Please try again later.");
                    throw new Error("Failed to fetch data");
                }
            })
            .catch((error) => {
                // console.log(error);
                alert("Failed to fetch data");
            });


        // setTimeout(() => { setLoding(false) }, 4000)
    }, []);


    return (
        <>
            {loding ? (<Box sx={{ width: '80%', height: "200px", mt: "30px" }}>
                <p className='pTages2 mb-16' style={{ width: "250px" }}>Loading ...</p>
                <LinearProgress sx={{
                    backgroundColor: '#F0A40B',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#707070'
                    }
                }}
                />
            </Box>) : (

                <Grid container justifyContent="center" alignItems="center" direction="column" className='cardData' sx={{ bgcolor: myData.color }} >

                    <Grid item style={{ marginTop: "10px", marginBottom: "20px" }}>
                        <Button onClick={MapHandler} style={{ borderRadius: '50%', border: '1px solid white', padding: '12px 16px', margin: '8px', color: 'white' }}>
                            <MapIcon /> <span className='ml-3' >Map</span>
                        </Button>

                    </Grid>


                    <Grid item >

                        <Typography variant="h4" color="common.white">
                            {myData.name}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="space-between" alignItems="center" mt={4} sx={{ width: { xs: "100%", md: "400px" } }}>
                        <Grid item>
                            <Typography variant="h6" color="common.white">
                                <Rating
                                    name="simple-controlled"
                                    value={myData.evaluation}
                                    precision={0.5}
                                    readOnly
                                    sx={{
                                        color: '#FFCC00',
                                        '& .MuiRating-iconEmpty': {
                                            color: '#FFFFFF'
                                        }
                                    }}
                                />
                                <Box component="span" ml={1}>{myData.evaluation}</Box>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="common.white">
                                <ReviewsOutlinedIcon /> {myData.review_count} Reviews
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="space-between" alignItems="center" mt={2} sx={{ width: { xs: "100%", md: "400px" } }}>
                        <Grid item>
                            <Typography variant="h6" color="common.white">
                                <PaymentsOutlinedIcon /> {myData.avg_prices}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="common.white">
                                <RestaurantOutlinedIcon />  {myData.bio}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container justifyContent="center" alignItems="center" mt={5} sx={{ width: { xs: "100%", md: "400px" } }}>
                        <Typography variant="h6" color="common.white">
                            <Box component="h1">Top Tags:</Box>
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="center" alignItems="center" mt={2} sx={{ width: { xs: "100%", md: "600px" } }}>
                        <Typography color="common.white">
                            {myData.Tags.map((data, index) => (
                                <p key={index} className='pTages'>{data.tag}</p>
                            ))}
                            {/* <p className='pTages'> asdasd</p> */}
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="center" alignItems="center" mt={5} sx={{ width: { xs: "100%", md: "550px" } }}>

                        <p className='pDes'>
                            {myData.description}
                        </p>
                    </Grid>

                    <Grid item container justifyContent="center" alignItems="center" mt={5} sx={{ width: { xs: "100%", md: "400px" } }}>
                        <ReservationCard dateAndTime={dateAndTime} id={props.id} />
                    </Grid>

                </Grid>
            )}
        </>
    );
}

export default Overview;