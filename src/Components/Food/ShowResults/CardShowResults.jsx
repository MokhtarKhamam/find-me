import * as React from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default function MediaControlCard(props) {
    const navigate = useNavigate();
    const ClicketCard = () => {
        navigate(`/profile/${props.respons.id}`);
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} className={"mx-16"}>
            <Card sx={{ width: { xs: "100%", md: "450px" }, minWidth: "300px", border: 'none', boxShadow: 'none', borderRadius: "20px" }}>
                <CardMedia

                    component="img"
                    sx={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    image={props.respons.main_image}
                    alt="Live from space album cover"
                />

                <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                    <Typography style={{ cursor: "pointer" }} onClick={ClicketCard} component="div" variant="h5" color={"#F0A40B"} sx={{ textAlign: 'center', mb: '10px' }}>
                        {props.respons.name}
                    </Typography>
                    <Typography className='py-3' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '20px', ml: "15px" }}>
                        <Rating name="half-rating-read" defaultValue={2} precision={props.respons.evaluation} readOnly />
                        {/* <p className='p4' style={{ margin: "10px" }}>{props.respons.evaluation}</p> */}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'center', mb: '20px' }}>
                        <LocalDiningIcon />
                        <p className='p4'>{props.respons.bio}</p>
                    </Typography>

                </CardContent>
            </Card >
        </Box >
    );
}