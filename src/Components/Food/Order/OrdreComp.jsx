import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { Tabs, Tab } from '@mui/material';
import Nis from './Nis';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { APIInstance } from '../../../Services/Api';

import { useLocation } from "react-router-dom";

const tabLabelColor = "#CF880C";
const tabSelectedBackgroundColor = "#fff";

const sxStyel = {
    tabs: {
        color: tabLabelColor,
        "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            color: tabLabelColor,
        },
    },
    tab: {
        fontWeight: "bold",
        fontSize: "18px",
        color: tabLabelColor,
        textTransform: "none",
        marginBottom: "20px",
        "&.Mui-selected": {
            color: `${tabLabelColor} !important`,
            backgroundColor: tabSelectedBackgroundColor,
            borderRadius: "20px",
        },
    },
    '@media (max-width: 400px)': {
        tabs: {
            width: "100vw",
            "& .MuiTabs-flexContainer": {
                justifyContent: "start",

            },
        }
    },
    gridItem: {
        alignItems: "center",
        display: "false",
        justifyContent: "center"


    }
};

function OrderComp() {
    const [loding, setLoding] = useState(true);
    const location = useLocation();
    let reservationId;
    if (location.state && location.state.reservationId !== null) {
        reservationId = location.state.reservationId;
    } else {
        reservationId = -1;
    }
    const { id } = useParams();
    const [myMenuData, setMyMenuData] = useState([]);

    const [order, setOrder] = useState([]);

    const myOrderData = {
        items: JSON.stringify(order),
        reservation_id: reservationId,
    };

    const addToOrder = (newOrder) => {
        setOrder([...order, newOrder]);
    };

    useEffect(() => {
        APIInstance.Get(`type_in_shop/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.status) {
                        setMyMenuData(res.data.data);
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
                console.log(error);
                alert("Failed to fetch data");
            });
    }, [id]);

    const navigate = useNavigate();
    const classes = sxStyel;
    const [value, setValue] = useState(0);


    const handleChange = (e, newValue) => {
        e.preventDefault();
        setValue(newValue);
    };
    const OrderNowClicket = () => {

        APIInstance.Post("create_reservation_with_order", myOrderData, "27|d8qIqaRybJvg6ajH7d3ubladUS4JLWfM3r1Vi36I")
            .then((res) => {
                if (res.data.status && res.status === 200) {
                    setOrder([]);
                    console.log(res.data.data);
                    // alert("done")
                    navigate("/completeReservation", { state: { Respons: res.data.data } })
                    // else { navigate(`/order/${myData.food_shops_id}`); }
                } else {
                    let errorMessage = "Connection Failed";
                    if (res.data.message) {
                        errorMessage = res.data.message;
                    }
                    alert(errorMessage);
                    throw new Error(errorMessage);
                }
            })
            .catch((error) => {
                // alert("An error occurred while processing your request. Please try again later.");
            });
    }

    return (
        <Box sx={{ backgroundColor: "#261207", minHeight: "100vh" }}>
            <Typography variant="body1"
                //  className='bg-[#852C00]'
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column"
                }} >
                <br />
                {loding ? (
                    <>
                        <Box sx={{ width: '80%', height: '200px', mt: '30px' }}>
                            <p className='pTages2 mb-16' style={{ width: '250px' }}>Loading ...</p>
                            <LinearProgress sx={{
                                backgroundColor: '#F0A40B',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#707070'
                                }
                            }} />
                        </Box>
                    </>
                ) : (
                    <>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="profile tabs"
                            sx={classes.tabs}
                            variant="scrollable"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: 'transparent',
                                }
                            }}

                        >
                            {myMenuData.map((item) => (
                                <Tab
                                    key={item.id}
                                    label={item.name}
                                    sx={classes.tab}
                                    style={{ color: '#fff' }}
                                />
                            ))}
                        </Tabs>

                        <Grid container className={classes.gridContainer}>
                            {myMenuData[value]?.product.map((product) => (
                                <Grid item key={product.id} className={classes.gridItem} xs={12} sm={12} md={4} lg={4} sx={{ padding: '20px' }}>
                                    <Nis
                                        name={product.name}
                                        image={product.main_image}
                                        id={product.id}
                                        addToOrder={addToOrder}
                                        reservationId={reservationId}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                        {reservationId !== -1 && (
                            <Button
                                style={{
                                    borderRadius: 35,
                                    backgroundColor: '#fff',
                                    padding: '18px 36px',
                                    fontSize: '18px',
                                    color: '#CF880C',
                                    marginBottom: '20px',
                                }}
                                variant="contained"
                                onClick={OrderNowClicket}
                            >
                                Order Now
                            </Button>
                        )}
                    </>
                )}
            </Typography >
        </Box>

    );
}

export default OrderComp;