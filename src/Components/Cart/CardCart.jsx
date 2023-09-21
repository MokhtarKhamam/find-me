import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

import AddIcon from '@mui/icons-material/Add';

export default function CartCard(props) {


    const [numDishes, setNumDishes] = useState(props.item.counter);

    const handlenumDishesAdd = () => {
        setNumDishes(numDishes + 1);
        props.handleNumDishesChanged(props.item.id, numDishes, "add");
    };
    const handlenumDishesRemove = () => {
        if (numDishes > 0) {
            setNumDishes(numDishes - 1);
            props.handleNumDishesChanged(props.item.id, numDishes, "remove");
        }
    };

    const handleRemove = () => {
        console.log("Remove button clicked");
        props.handelItemRemove(props.item.id)
        setNumDishes(0)
    };
    return (
        <Card sx={{ maxWidth: 345, height: 357, backgroundColor: "rgb(238, 238, 238)", borderRadius: 10 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={`${process.env.REACT_APP_API_URL}${props.item.image}`}
                sx={{ height: 230 }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", p: 0, px: "22px", pt: "16px" }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#2e7d32" }}>
                    {props.item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {props.item.price * numDishes} SP
                </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "center", p: 0 }}>

                <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        // width: '100%',
                        alignItems: "center",
                        padding: "5px",
                    }}>
                        <Button color="inherit"
                            onClick={handlenumDishesRemove}
                            style={{
                                backgroundColor: "#F0A40B",
                                color: "#fff",
                                borderRadius: "20px",
                                height: "fit-content",
                                margin: "5px",
                            }}>
                            <RemoveIcon />
                        </Button>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#2e7d32", margin: "5px" }}>
                            {numDishes}
                        </Typography>
                        <Button color="inherit"
                            onClick={handlenumDishesAdd}
                            style={{
                                backgroundColor: "#F0A40B",
                                color: "#fff",
                                borderRadius: "20px",
                                height: "fit-content",
                                margin: "5px",
                            }}>
                            <AddIcon />
                        </Button>
                        <Button
                            color="inherit"
                            onClick={handleRemove}
                            sx={{
                                backgroundColor: "rgb(149, 16, 176)",
                                color: "#fff",
                                borderRadius: "20px",
                                height: "fit-content",
                                marginLeft: { md: "30px" },
                            }}
                        >
                            Remove <CloseIcon />
                        </Button>
                    </div>
                </div>

            </CardActions>


        </Card>
    );
}