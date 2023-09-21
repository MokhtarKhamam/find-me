import React from 'react';
import { useNavigate } from 'react-router';

import { Box, Typography  ,Button} from '@mui/material';


const sxStyle = {

    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: `calc(100vh - 75px)`,
        width: '100%',
        backgroundSize: 'cover',

    },
    header: {
        zIndex: 1,
        color: "#fff",
        fontSize: "90px",
        textAlign: "center",

    },
    titel: {
        fontSize: "120px",
        
        
    },
    button: {
        position: 'absolute',
        bottom: '2vh',
        right: '2vw',
        borderRadius: '20px',
        width: 200,
        height: 50,
        backgroundColor: "#F0A40B",
    },
    '@media (max-width: 630px)': {
        header: {
            fontSize: "50px",
        },
        titel: {
            fontSize: "60px",          

        },
    }
};

function HomeRealEstate(props) {
    const navigate = useNavigate();
    const ClicketNext = () => {
        navigate("/homerealestate");
    }
    // const classes = useStyles();
    const backgroundImage = `url(${props.Image})`;

    return (
        <Box sx={sxStyle.root} style={{ backgroundImage  }}>
            <Typography sx={sxStyle.header}>
                <span style={sxStyle.titel}>{props.secondLine}</span>
                {props.linebreak}
                {props.first}
                {props.linebreak}
                
                <span style={{ fontFamily: 'auto' }}> {props.mid}</span>
                {props.linebreak}
                {props.second}
                {props.linebreak}
            </Typography>
            <Button onClick={ClicketNext} size='large' variant='contained' sx={sxStyle.button}>
                Next
            </Button>
        </Box>
    );
}

export default HomeRealEstate;