import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Grid,
    FormControlLabel,
    Checkbox,
    Autocomplete,
    Stack,
} from '@mui/material';

import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";


import styled from "styled-components";
import NightlifeIcon from '@mui/icons-material/Nightlife';
import CakeIcon from '@mui/icons-material/Cake';


const sxStyel = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        paddingTop: "32px",
        paddingBottom: "32px",
        maxWidth: 1500,
    },
    reservationContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        margin: "16px",
        gap: { xs: "20px", md: "0px", lg: "0px" },
        maxWidth: "100%"
    },
    restaurantImage: {
        width: "100%",
        height: "200px",
        marginRight: "16px",
        borderRadius: "15px",
        padding: 0,
    },
    occasionSelect: {
        minWidth: 650,
        marginRight: "16px",
    },
    formControl: {
        margin: "8px",
        width: "100%",
    },
    button: {
        marginTop: "16px",
    },
};

const CompleteReservation = () => {

    const classes = sxStyel;
    const location = useLocation();
    const Respons = location.state.Respons;


    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("Respons : ")
        console.log(Respons);
    }, [location]);


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        specialRequest: "",
        occasion: "",
        diningOffers: true,
        textUpdates: true,
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },]

    const StyledBox = styled(Box)({
        width: 350,
        margin: "auto",
    });

    return (
        <div style={{ backgroundColor: "#FFFCF9" }}>
            <Box sx={classes.container}>
                <p className="p2 mb-10">You're almost done!</p>

                <Grid container spacing={3} style={{ width: "fit-content" }} sx={classes.reservationContainer}>

                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: "10px" }}>
                        <Box sx={classes.reservationDetails}>
                            <Typography variant="h4">
                                {Respons.shop.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
                                <EventNoteIcon /> {Respons.date} | <AccessTimeIcon /> Time: {Respons.time}
                                <br />
                                <PersonIcon /> Party Size: {Respons.guests_count}
                                {Respons.note && <><br />
                                    <NightlifeIcon /> Note: {Respons.note}</>}
                                {Respons.occasion && <><br />
                                    <CakeIcon /> Occasion: {Respons.occasion}</>}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <img
                            src={Respons.shop.main_image}
                            alt="Restaurant"
                            style={{ height: "520px", borderRadius: "20px" }}
                            className={classes.restaurantImage}

                        />
                    </Grid>


                    {
                        Respons.order !== "false" &&
                        <Grid item xs={12} sm={12} md={6} lg={6} style={{
                            backgroundColor: "#C59E73",
                            padding: "50px",
                            borderRadius: "20px",
                            height: "560px"

                        }} >
                            <Box sx={classes.reservationDetails} style={{ width: { md: "700px", xs: "100%" } }}>
                                <Box sx={{ width: "100%" }}>
                                    <Typography variant="h4" className="p2 text-center ">
                                        Your Order
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width: { md: "100%", xs: "100%" },
                                        mt: "20px"
                                    }}

                                >


                                    <Grid xs={12} md={2} sx={{ color: "#703B26" }}>

                                    </Grid>
                                    <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: { xs: "space-around" } }}>
                                        <Grid xs={12} md={5} color={"white"}>
                                            Total Dishes
                                        </Grid>
                                        <Grid xs={12} md={2} color={"white"} sx={{ margin: "20px" }}>

                                        </Grid>
                                        <Grid xs={12} md={5} color={"white"}>
                                            Total Price
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                    {Respons.order_form.map((item, index) => (
                                        <>
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    width: { md: "100%", xs: "100%" },
                                                }}
                                            >
                                                <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                    {item.product_name}
                                                </Grid>
                                                <Grid
                                                    xs={12}
                                                    md={10}
                                                    color={"white"}
                                                    sx={{
                                                        display: "flex",
                                                        width: { md: "100%", xs: "100%" },
                                                        justifyContent: "space-around",
                                                        marginLeft: { md: "30px" },
                                                    }}
                                                >
                                                    <Grid xs={12} md={6} color={"white"}>
                                                        {item.count}
                                                    </Grid>
                                                    <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                        {item.total_price}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                        </>
                                    ))}



                                    {/* ........................................ */}

                                    {/* <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { md: "100%", xs: "100%" },

                                            }}
                                        >
                                            <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                Cheese Burger
                                            </Grid>
                                            <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: "space-around", marginLeft: { md: "30px" } }}>
                                                <Grid xs={12} md={6} color={"white"}>
                                                    24
                                                </Grid>
                                                <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                    24.000
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>
                                    <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                    <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { md: "100%", xs: "100%" },

                                            }}
                                        >
                                            <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                Cheese Burger
                                            </Grid>
                                            <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: "space-around", marginLeft: { md: "30px" } }}>
                                                <Grid xs={12} md={6} color={"white"}>
                                                    24
                                                </Grid>
                                                <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                    24.000
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>   <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                    <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { md: "100%", xs: "100%" },

                                            }}
                                        >
                                            <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                Cheese Burger
                                            </Grid>
                                            <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: "space-around", marginLeft: { md: "30px" } }}>
                                                <Grid xs={12} md={6} color={"white"}>
                                                    24
                                                </Grid>
                                                <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                    24.000
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>   <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                    <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { md: "100%", xs: "100%" },

                                            }}
                                        >
                                            <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                Cheese Burger
                                            </Grid>
                                            <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: "space-around", marginLeft: { md: "30px" } }}>
                                                <Grid xs={12} md={6} color={"white"}>
                                                    24
                                                </Grid>
                                                <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                    24.000
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>   <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                    <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { md: "100%", xs: "100%" },

                                            }}
                                        >
                                            <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                Cheese Burger
                                            </Grid>
                                            <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: "space-around", marginLeft: { md: "30px" } }}>
                                                <Grid xs={12} md={6} color={"white"}>
                                                    24
                                                </Grid>
                                                <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                    24.000
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>   <Box sx={{ borderBottom: "1px solid white", width: "100%", mb: "20px", mt: "10px" }}></Box>

                                    <Box sx={{ overflow: "auto", maxHeight: { md: "300px", xs: "240px" } }}>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { md: "100%", xs: "100%" },

                                            }}
                                        >
                                            <Grid xs={12} md={2} sx={{ color: "#703B26" }}>
                                                Cheese Burger
                                            </Grid>
                                            <Grid xs={12} md={10} color={"white"} sx={{ display: "flex", width: { md: "100%", xs: "100%" }, justifyContent: "space-around", marginLeft: { md: "30px" } }}>
                                                <Grid xs={12} md={6} color={"white"}>
                                                    24
                                                </Grid>
                                                <Grid xs={12} md={6} color={"white"} sx={{ marginLeft: { md: "120px" } }}>
                                                    24.000
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box> */}

                                    {/* .............................................. */}
                                </Box>
                            </Box>

                        </Grid>
                    }




                </Grid>


                <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                        margin: "20px",
                        color: "#F0A40B",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    <p>we're holding this table for you for 5 mins ….</p>
                </Grid>

                {/* <Grid item xs={12} md={12} style={{ margin: "20px" }}>
                    <p>Diner details</p>
                </Grid>

                <Grid container spacing={2} style={{ maxWidth: "80%" }}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <TextField
                                required
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                InputProps={{
                                    style: {
                                        borderRadius: "20px",
                                    },
                                }}
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({ ...formData, firstName: e.target.value })
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <TextField
                                required
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                InputProps={{
                                    style: {
                                        borderRadius: "20px",
                                    },
                                }}
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({ ...formData, lastName: e.target.value })
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <TextField
                                required
                                id="phoneNumber"
                                label="Phone Number"
                                variant="outlined"
                                InputProps={{
                                    style: {
                                        borderRadius: "20px",
                                    },
                                }}
                                value={formData.phoneNumber}
                                onChange={(e) =>
                                    setFormData({ ...formData, phoneNumber: e.target.value })
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                variant="outlined"
                                InputProps={{
                                    style: {
                                        borderRadius: "20px",
                                    },
                                }}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <TextField id="Add a special request" label="Add a special request" variant="outlined"
                                InputProps={{
                                    style: {
                                        borderRadius: "20px",
                                    }
                                }}
                                value={formData.specialRequest}
                                onChange={(e) =>
                                    setFormData({ ...formData, specialRequest: e.target.value })
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <InputLabel id="occasion-label" style={{ marginLeft: "13px" }}>Select an occasion</InputLabel>
                            <Select
                                labelId="occasion-label"
                                id="occasion"
                                variant="outlined"
                                style={{ borderRadius: '20px' }}
                                value={formData.occasion}
                                onChange={(e) =>
                                    setFormData({ ...formData, occasion: e.target.value })
                                }
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="birthday">Birthday</MenuItem>
                                <MenuItem value="anniversary">Anniversary</MenuItem>
                                <MenuItem value="wedding">Wedding</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>




                    <Grid item xs={12} sm={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.diningOffers}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            diningOffers: e.target.checked,
                                        })
                                    }
                                    name="diningOffers"
                                    color="primary"
                                />
                            }
                            label="I would like to receive offers and promotions from the restaurant via email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.textUpdates}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            textUpdates: e.target.checked,
                                        })
                                    }
                                    name="textUpdates"
                                    color="primary"
                                />
                            }
                            label="I would like to receive updates about my reservation via text message"
                        />
                    </Grid>
                </Grid> */}
                <Grid container spacing={2} style={{ maxWidth: "80%" }}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <TextField
                                required
                                id="phoneNumber"
                                label="Phone Number"
                                variant="outlined"
                                InputProps={{
                                    style: {
                                        borderRadius: "20px",
                                    },
                                }}
                                value={formData.phoneNumber}
                                onChange={(e) =>
                                    setFormData({ ...formData, phoneNumber: e.target.value })
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={classes.formControl}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                style={{ borderRadius: "20px" }}
                                renderInput={(params) => <TextField {...params} label="Movie" />}
                            />
                        </FormControl>
                    </Grid>
                </Grid>



                <Button
                    variant="contained"
                    color="primary"
                    sx={classes.button}
                    style={{
                        borderRadius: "20px",
                        backgroundColor: "#F1AB1F",
                        marginTop: "30px",
                    }}
                    onClick={handleFormSubmit}
                >
                    Complete Reservation
                </Button>
            </Box >
        </div >
    );
};

export default CompleteReservation;