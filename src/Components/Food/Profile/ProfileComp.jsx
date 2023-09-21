import Box from '@mui/material/Box';
import { Tabs, Tab } from '@mui/material';
// import { makeStyles } from "@mui/styles";

import { useParams } from 'react-router-dom';




import Overview from './Overview';
import Photos from './Photos/Photos';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



const tabLabelColor = "#ffffff";
const tabSelectedBackgroundColor = "#F0A40B";

const sxStyle = {
    tabs: {
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
    '@media (max-width: 400px)': {
        tabs: {
            width: "100vw",
            "& .MuiTabs-flexContainer": {
                justifyContent: "start",

            },
        }
    }
};

function ProfileComp() {
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    const classes = sxStyle;

    const [value, setValue] = useState(0);
    const [mainImg, setMainImg] = useState("");
    const [color, setColor] = useState("")
    const GetMainImg = (x, color) => {
        setMainImg(x);
        setColor(color);
    }

    const sections = [
        { label: 'Overview', component: <Overview id={id} GetMainImg={GetMainImg} /> },
        { label: 'Photos', component: <Photos id={id} /> },
        { label: 'Menu', component: <Menu id={id} /> },
        { label: 'Reviews', component: <Reviews id={id} /> },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ height: "70vh" }}>
                <img src={mainImg} alt="restaurant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ backgroundColor: color }}>
                <Tabs
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="profile tabs"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "transparent"
                        }
                    }}

                    sx={classes.tabs}
                >
                    {sections.map((section, index) => (
                        <Tab
                            key={index}
                            label={section.label}
                            sx={classes.tab}
                            style={{ color: "#fff" }}
                        />
                    ))}
                </Tabs>
            </Box>
            <div>
                <div style={{ backgroundColor: color, display: "flex", justifyContent: "center" }} className='py-16'>
                    {sections[value].component}
                </div>
            </div>


        </>



    );
}

export default ProfileComp;















