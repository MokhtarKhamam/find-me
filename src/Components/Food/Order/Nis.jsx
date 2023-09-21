import React, { useState, useEffect } from 'react';
import { Button, Typography, Card, CardMedia, CardActions } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PopupOrder from "./PopuoOrder"


import { APIInstance } from "../../../Services/Api";


function Nis(props) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [open, setOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [myData, setMyData] = useState(null);

    const handleOpen = (food) => {
        // alert("Nis")
        APIInstance.Get(`product_details/${props.id}`)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.status) {
                        setMyData(res.data.data);
                        setSelectedFood(food);
                        setOpen(true);
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
                console.log(error);
                alert("Failed to fetch data");
            });

    };

    const handleClose = () => {
        setSelectedFood(null);
        setOpen(false);
    };

    return (
        <>
            <Card sx={{ borderRadius: '30px', height: '500px', width: { md: "100%", lg: "100%" } }}>
                <Typography variant="h6" align="center" sx={{ my: 1, color: '#CF880C', fontSize: '30px' }}>
                    {props.name}
                </Typography>
                <CardMedia sx={{ width: '100%', height: '77%' }} component="img" image={props.image} alt="img" />
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#C77D0F',
                            color: 'white',
                            width: '200px',
                        }}
                        onClick={() => handleOpen(props.id)}
                    >
                        More Details
                    </Button>
                </CardActions>
            </Card>


            {selectedFood && <PopupOrder reservationId={props.reservationId} open={open} onClose={handleClose} food={myData} addToOrder={props.addToOrder} id={props.id} />}
        </>
    );
}

export default Nis;