import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardRealEstate = () => {
  return (
    <Card sx={{ maxWidth: 325, borderRadius : "20px" }}>
        <CardMedia
        sx={{ height: 140 }}
        image="/assets/car2.png"
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
  </Card>
  )
}

export default CardRealEstate
