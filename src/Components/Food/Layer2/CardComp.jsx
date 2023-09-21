import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import cardsImg from "../../../assets/Img/card.png"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import i1 from '../../../assets/Img/g1.png'
import { useNavigate } from 'react-router';
import { Grid } from '@mui/material';


export default function CardComp(props) {
    const navigate = useNavigate();
    const ClicketCard = () => {
        navigate(`/profile/${props.item.id}`);
    }
    const times = props.item.Times;

    // const times = [
    //     '7 : 00 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    //     '7 : 15 PM',
    // ];
    return (
        <Card sx={{ MaxWidth: 400, margin: '10px' }} style={{ borderRadius: '20px' }} >
            <CardMedia
                sx={{ height: 350 }}
                image={props.item.main_image}
                title="green iguana"
            />
            <CardContent>
                <Typography onClick={ClicketCard} sx={{ cursor: "pointer" }} gutterBottom variant="h5" component="div" className='text-[#F0A40B] '>
                    {props.item.name}
                </Typography>

                <Typography className='py-5'>
                    <Stack spacing={1}>
                        <Rating
                            name="simple-controlled"
                            value={props.item.evaluation}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.item.country_name} food . {props.item.country_currency} . {props.item.city}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                    {props.item.bio}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    <Box component="span" display="inline-block" mr={1} sx={{ width: '40px', height: '40px' }}>
                        <img src={i1} alt="Booked 3 times today" style={{ objectFit: 'contain', width: '100%', height: '100%', marginTop: '12px' }} />
                    </Box>
                    <span>Booked {props.item.reservation_count} times today</span>
                </Typography>
                <br />
                <br />

                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '400px', padding: '20px' }}>
                    <Typography variant="body2" color="text.secondary">
                        <Grid container spacing={1} justifyContent="center">
                            {times.map((time, index) => (
                                <Grid item xs={12} sm={3} key={index}>
                                    <Box sx={{ border: '1px solid #F0A40B', borderRadius: '15px', p: '10px', backgroundColor: '#F0A40B', color: 'white', textAlign: 'center' }}>
                                        {time}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}