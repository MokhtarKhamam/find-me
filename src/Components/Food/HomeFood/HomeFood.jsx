import React from 'react';
import { useNavigate } from 'react-router';

import "./HomeFood.css"
import { Box, Typography, Button } from '@mui/material';


const sxStyle = {
    main_root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: `calc(100vh - 75px)`,
        width: '100%',
        backgroundSize: 'cover',

    },
    header: {
        position: 'absolute',
        top: '50vh',
        right: '9vw',
        zIndex: 1,
        width: "410px",
        height: "fit-content",
        fontFamily: 'Nothing You Could Do, cursive',
        fontSize: "60px",
        textAlign: "center",
        backgroundColor: "#f0f0f9"
    },

    button: {
        position: 'absolute !important',
        bottom: '2vh !important',
        right: '2vw !important',
        borderRadius: '20px !important',
        width: 200,
        height: 50,
        backgroundColor: "#F0A40B !important",


    },
    '@media (max-width: 400px)': {
        header: {
            top: '403px',
            left: '30px',
            width: "270px",
            height: "fit-content",

            fontSize: "40px",
        }
    }
}


function HomeFood(props) {

    const navigate = useNavigate();
    const ClicketNext = () => {
        navigate(props.to);
    }   
    const backgroundImage = `url(${props.Image})`;

    return (
        <Box sx={sxStyle.main_root} style={{ backgroundImage }}>
            <Typography sx={sxStyle.header}>
                {props.first}
                {props.linebreak}
                <span style={{ fontFamily: 'auto' }}>{props.mid}</span>
                {props.linebreak}
                {props.second}
                {props.linebreak}
                {props.secondLine}
            </Typography>
            <Button onClick={ClicketNext} size='large' variant='contained' sx={sxStyle.button}>
                Next
            </Button>
        </Box>
    );
}

export default HomeFood;