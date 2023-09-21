import React from 'react';
import { Box } from '@mui/material';

const TabPanels = (props) => {
    return (
        <div className={props.classes.imageContainer}>
                {props.images.fruits.map((image, index) => (
                    <Box key={index} className={props.classes.imageBox} style={{ display: props.value === 0 ? 'block' : 'none' }}>
                        <img src={image} alt="Fruit" className={props.classes.image} />
                    </Box>
                ))}
                {props.images.vegetables.map((image, index) => (
                    <Box key={index} className={props.classes.imageBox} style={{ display: props.value === 1 ? 'block' : 'none' }}>
                        <img src={image} alt="Vegetable" className={props.classes.image} />
                    </Box>
                ))}
                {props.images.meat.map((image, index) => (
                    <Box key={index} className={props.classes.imageBox} style={{ display: props.value === 2 ? 'block' : 'none' }}>
                        <img src={image} alt="Meat" className={props.classes.image} />
                    </Box>
                ))}
            </div>
    );
};

export default TabPanels;