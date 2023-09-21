import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Select,
    MenuItem,
    TextField,
    Box,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

import AddIcon from '@mui/icons-material/Add';
import { Badge, IconButton } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { APIInstance } from "../../../Services/Api";

const sxStyel = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: "#C69E74",
        height: "100%",
    },
    carousel: {
        // objectFit:"contain",
        width: '400px',
        height: '900px',
        marginBottom: '16px',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: "#5D0A0A",
    },
    price: {
        fontSize: '25px',
        marginBottom: '16px',
        color: "white"
    },
    ingredients: {
        fontSize: '22px',
        marginBottom: '16px',
        color: "white"
    },
    formControl: {
        width: '100%',
        marginBottom: '16px',
    },
    notes: {
        width: '100%',
        marginBottom: '16px',
        marginTop: '10px',
    },
    Swiper: {
        height: "320px",
    },
};

const PopupOrder = ({ open, onClose, food, addToOrder, id, reservationId }) => {

    // console.log("myData");
    // console.log(food);

    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (food.sizes && food.sizes.length > 0) {
            setSize(food.sizes[0].size);
            setPrice(food.sizes[0].price);
        }
    }, [food.sizes]);

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSize(newSize);
        const selectedSize = food.sizes.find((item) => item.size === newSize);
        if (selectedSize) {
            setPrice(selectedSize.price);
        }
    };

    const [numDishes, setNumDishes] = useState(0);
    const [notes, setNotes] = useState('');
    const classes = sxStyel;

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };
    const handlenumDishesAdd = () => {
        setNumDishes(numDishes + 1);
    };
    const handlenumDishesRemove = () => {
        if (numDishes > 0) {
            setNumDishes(numDishes - 1);
        }
    };
    const sendInAddToCard = {
        product_id: id,
        count: numDishes,
    }
    const popupOrderClicket = () => {
        if (reservationId !== -1) {
            addToOrder({ id, numDishes, notes, size, price });
            onClose();
        }
        if (reservationId === -1) {

            APIInstance.Post("add_to_shopping_cart", sendInAddToCard, "27|d8qIqaRybJvg6ajH7d3ubladUS4JLWfM3r1Vi36I")
                .then((res) => {
                    if (res.data.status && res.status === 200) {
                        console.log(res.data.message);
                        onClose();
                        alert(res.data.message)
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

    }

    return (
        <Dialog open={open} onClose={onClose} PaperProps={{ style: { borderRadius: 20, height: { md: "100%", xs: "70%" }, width: "700px" } }}>
            <DialogTitle style={{ backgroundColor: "#C69E74" }}>
                <IconButton style={{ position: 'absolute', zIndex: "999", top: 10, right: 10, color: '#fff' }} onClick={onClose}>
                    <CloseIcon />
                </IconButton>

                <Swiper
                    style={{
                        "--swiper-pagination-color": "#FFBA08",
                        "--swiper-pagination-bullet-inactive-color": "#E7D8C2",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "13px",
                        "--swiper-pagination-bullet-horizontal-gap": "10px",
                        "--swiper-pagination-bottom": "-9.3px",
                        height: "310px",

                    }}

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    sx={classes.Swiper}
                    modules={[Autoplay, Pagination]}
                >
                    {food.images.map((image, index) => (
                        <SwiperSlide key={index} style={{ backgroundColor: "transparent" }}>
                            <Box style={{ clipPath: "ellipse(50% 50% at 50% 50%)", height: "280px", marginBottom: "20px" }}>
                                <img src={image} alt={`food-${index}`} style={{ width: "280px", height: "280px" }} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </DialogTitle>
            <DialogContent sx={classes.root}>


                <Typography sx={classes.title}>{food.name}</Typography>
                <Typography sx={classes.price}>{food.price}</Typography>
                <Typography sx={classes.ingredients}>
                    <span style={{ color: "#5D0A0A", fontSize: "25px" }}>Ingredients:</span> {food.components}
                </Typography>
                <TextField
                    sx={classes.notes}
                    label="Notes"
                    variant="outlined"
                    value={notes}
                    onChange={handleNotesChange}
                />
                <div style={{ backgroundColor: "#C69E74", width: "100%" }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        width: '100%',


                    }}>
                        {food.has_sizes && <Select
                            labelId="size-label"
                            id="size"
                            value={size}
                            onChange={handleSizeChange}
                            sx={classes.notes}
                        >
                            {food.sizes.map((item) => (
                                <MenuItem key={item.size} value={item.size}>
                                    {item.size} - {item.price}
                                </MenuItem>
                            ))}
                        </Select>}
                        <div style={{ marginTop: "40px", textAlign: "center" }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                alignItems: "center"
                            }}>
                                <Button color="inherit"
                                    onClick={handlenumDishesRemove}
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "20px",
                                        margin: "10px",
                                        height: "fit-content",
                                    }}>
                                    <RemoveIcon />
                                </Button>
                                <Button
                                    color="inherit"
                                    style={{ backgroundColor: "#fff", borderRadius: "20px", margin: "10px" }}
                                    onClick={popupOrderClicket}
                                >
                                    <div class="MuiButton-label"
                                        style={{
                                            justifyContent: "center",
                                            flexDirection: "column"
                                        }}>

                                        <IconButton >
                                            <Badge badgeContent={numDishes} color="secondary">
                                                <RamenDiningIcon sx={{ width: "40px", height: "40px" }} />
                                            </Badge>
                                        </IconButton>
                                        Add To Order
                                    </div>
                                </Button>
                                <Button color="inherit"
                                    onClick={handlenumDishesAdd}
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "20px",
                                        margin: "10px",
                                        height: "fit-content",
                                    }}>
                                    <AddIcon />
                                </Button>
                            </div>
                            {food.Make_it_yourself === 1 &&
                                <Button color="inherit"
                                    // onClick={handlenumDishesAdd}
                                    style={{
                                        color: "#fff",
                                        backgroundColor: "#F0A40B",
                                        borderRadius: "20px",
                                        margin: "10px",
                                        height: "fit-content",
                                    }}>
                                    Make It On Your Own
                                </Button>}
                        </div>
                    </div>
                </div>

            </DialogContent>

        </Dialog >

    );
};

export default PopupOrder;