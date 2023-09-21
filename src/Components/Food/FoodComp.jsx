import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Tabs, Tab, Box, Button } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


import { APIInstance } from '../../Services/Api';


const tabLabelColor = "#000";
const tabSelectedBackgroundColor = "#fff";


const sxStyle = {
    root: {
        // backgroundColor: '#261207',
        height: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: "20px",
        marginTop: "20px",
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageBox: {
        objectFit: "cover",
        width: '40vw',
        height: '50vh',
        overflow: 'hidden',
        borderRadius: "10px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '500px',
        height: '300px',
        cursor: "pointer",
        marginBottom: "20px",

    },
    tabs: {
        marginTop: "30px",
        color: "tabLabelColor",
        "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            color: tabLabelColor,
        },
    },
    tab: {
        color: tabLabelColor,
        textTransform: "none",
        "&.Mui-selected": {
            color: `${tabLabelColor} !important`,
            backgroundColor: tabSelectedBackgroundColor,
            borderRadius: "20px",
        },
    },
    button: {

        borderRadius: '20px',
        width: 150,
        height: 50,
    },
    '@media (max-width: 400px)': {
        imageBox: {
            width: "300px"
        },
        tabs: {
            width: "100vw",
            "& .MuiTabs-flexContainer": {
                justifyContent: "start",

            },
        },
    }
};

const FoodComp = () => {
    const [loding, setLoding] = useState(true);
    const [myData, setMyData] = useState([]);
    const [color, setColor] = useState("");
    const [value, setValue] = useState(0);
    
    useEffect(() => {

        APIInstance.Get("food_category")
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.status) {
                        setMyData(res.data.category);
                        setValue(0);
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
    }, []);


    
    const navigate = useNavigate();


    const handleChange = (event, newValue) => {

        setValue(newValue);

    };
    const ShowAllRestaurants = () => {
        navigate("/restaurants");
    }
    const ClickImg = (id) => {
        navigate(`/profile/${id}`);
    }

    return (
        <Box sx={sxStyle.root} style={{ backgroundColor: color }}>

            {loding ? (
                <Tabs sx={sxStyle.tabs} >
                    <Skeleton variant='text' animation="wave" width={80} style={{ margin: "10px" }} />
                    <Skeleton variant='text' animation="wave" width={80} style={{ margin: "10px" }} />
                    <Skeleton variant='text' animation="wave" width={80} style={{ margin: "10px" }} />
                    <Skeleton variant='text' animation="wave" width={80} style={{ margin: "10px" }} />
                    <Skeleton variant='text' animation="wave" width={80} style={{ margin: "10px" }} />
                </Tabs>
            ) : (
                <Tabs
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="food composition tabs"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "transparent"
                        }
                    }}
                    sx={sxStyle.tabs}
                >
                    {myData.map((item, index) => (
                        <Tab key={index} label={item.name} sx={sxStyle.tab} onClick={() => setColor(item.color)} />
                    ))}
                </Tabs>
            )}
            {loding ? (

                <div style={sxStyle.imageContainer}>
                    <Skeleton variant='img' animation="wave" width={600} height={500} />
                    <Skeleton variant='img' animation="wave" width={600} height={500} />
                    <Skeleton variant='img' animation="wave" width={600} height={500} />
                    <Skeleton variant='img' animation="wave" width={600} height={500} />
                </div>
            ) : (
                <>

                    {value === 0 &&
                        <Button
                            sx={{
                                borderRadius: 35,
                                backgroundColor: "#fff",
                                padding: "18px 36px",
                                fontSize: "13px",
                                color: "#000",
                                marginTop: "50px",
                            }}
                            variant="contained"
                            onClick={ShowAllRestaurants}

                        >
                            Show All Restaurants
                        </Button>}
                    <div style={sxStyle.imageContainer}>
                        {myData[value].shops.map((item, index) => (
                            <Box
                                key={index}
                                sx={sxStyle.imageBox}
                                style={{ backgroundColor: item.color }}
                            >
                                <img
                                    onClick={() => ClickImg(item.id)}
                                    src={`${process.env.REACT_APP_API_URL_IMAGE}${item.main_image}`}
                                    alt={"food"}
                                    style={sxStyle.image}
                                />
                            </Box>
                        ))}
                    </div>
                </>
            )}
        </Box>
    );
};

export default FoodComp;




