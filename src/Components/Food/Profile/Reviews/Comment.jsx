import React from 'react';
import { Avatar, Typography, Rating, Grid } from '@mui/material';

const Comment = ({ name, comment, overallRating, foodRating, serviceRating, ambienceRating, userAvatar }) => {
  return (
    <Grid my={2} container spacing={2} alignItems="center" sx={{ backgroundColor: "#612929", color: "#fff", borderRadius: "20px" }}>

      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2} m={3}>
          <Grid container>
            <Grid item mr={2}>
              <Avatar alt={name} src={userAvatar} />
            </Grid>
            <Grid item>
              <Typography variant="h6">{name}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">{comment}</Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item>
              <Typography variant="subtitle1">Overall</Typography>
            </Grid>
            <Grid item>
              <Rating name="overallRating" value={overallRating} precision={0.5} readOnly sx={{
                color: '#FFCC00',
                '& .MuiRating-iconEmpty': {
                  color: '#FFFFFF'
                }
              }} />
            </Grid>

            <Grid item mr={5}>
              <Typography variant="subtitle1">Food</Typography>
            </Grid>

            <Grid item>
              <Rating name="foodRating" value={foodRating} precision={0.5} readOnly sx={{
                color: '#FFCC00',
                '& .MuiRating-iconEmpty': {
                  color: '#FFFFFF'
                }
              }} />
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">Service</Typography>
            </Grid>
            <Grid item>
              <Rating name="serviceRating" value={serviceRating} precision={0.5} readOnly sx={{
                color: '#FFCC00',
                '& .MuiRating-iconEmpty': {
                  color: '#FFFFFF'
                }
              }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Ambience</Typography>
            </Grid>
            <Grid item>
              <Rating name="ambienceRating" value={ambienceRating} precision={0.5} readOnly sx={{
                color: '#FFCC00',
                '& .MuiRating-iconEmpty': {
                  color: '#FFFFFF'
                }
              }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Comment;