import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Select,
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
    Box,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const sxStyel = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: "#C69E74",

    },
    carousel: {
        // objectFit:"contain",
        width: '400px',
        height: '400px',
        marginBottom: '16px',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: "#5D0A0A",
        textAlign: "center",
    },
    price: {
        fontSize: '25px',
        marginBottom: '16px',
        color: "white",
        textAlign: "center",
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
    },
};

const PopupPhotos = ({ open, onClose, food }) => {
    const [size, setSize] = useState('small');
    const [notes, setNotes] = useState('');
    const classes = sxStyel;

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };

    return (

        <Dialog open={open} onClose={onClose} PaperProps={{ style: { borderRadius: 20  ,height:"100%"} }}>
            <DialogContent sx={classes.root}  >

                <Carousel sx={classes.carousel} width="100%" height="50%">
                    {food.images.map((image, index) => (
                        <Box style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}>
                            <img key={index} src={image} alt={`food-${index}`} style={{ width: "400px", height: "400px" }} />
                        </Box>
                    ))}
                </Carousel>

                <Box sx={{ height: "10px" }} >

                    <Typography sx={classes.title}>{food.name}</Typography>
                    <Typography sx={classes.price}>{food.price}</Typography>
                    <Typography sx={classes.ingredients}>
                        <span style={{ color: "#5D0A0A", fontSize: "25px" }}>Ingredients:</span> {food.ingredients.join(', ')}
                    </Typography>
                    <Box sx={classes.formControl} color='inherit'>
                        <InputLabel id="size-label">Size</InputLabel>
                        <Select
                            labelId="size-label"
                            id="size"
                            value={size}
                            onChange={handleSizeChange}
                            sx={{width:"100%"}}

                        >
                            <MenuItem value="small">Small</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="large">Large</MenuItem>
                        </Select>
                    </Box>
                    <TextField
                        sx={classes.notes}
                        label="Notes"
                        variant="outlined"
                        value={notes}
                        onChange={handleNotesChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions style={{ backgroundColor: "#C69E74", justifyContent: "center" }}>
                <Button onClick={onClose} style={{ color: "#000", fontWeight: "bold" }}>Cancel</Button>
                <Button color="inherit" style={{ backgroundColor: "#fff", borderRadius: "20px" }}><AddShoppingCartIcon /> Add to Cart</Button>
            </DialogActions>
            <Button color="inherit" style={{ backgroundColor: "#F0A40B" }} >Make it on your own</Button>
        </Dialog >

    );
};

export default PopupPhotos;