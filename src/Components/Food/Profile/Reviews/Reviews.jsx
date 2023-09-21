import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';

import Comment from './Comment';

import CommentIcon from '@mui/icons-material/Comment';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import { APIInstance } from '../../../../Services/Api';
import LinearProgress from '@mui/material/LinearProgress';

function Reviews(props) {

  const [myReviewsData, setMyReviewsData] = useState([]);
  const [avg, setAvg] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    APIInstance.Get(`show_shop_review/${props.id}`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status) {
            setMyReviewsData(res.data.data);
            setAvg(res.data.avg)
            setLoding(false);
          } else {
            const errorMessage = res.data.message || "Connection Failed";
            alert(errorMessage);
            throw new Error(errorMessage);
          }
        } else {
          alert("Failed to fetch data. Please try again later.");
          throw new Error("Failed to fetch data");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch data");
      });
  }, []);

  return (

    <>
      {loding ? (<Box sx={{ width: '80%', height: "200px", mt: "30px" }}>
        <p className='pTages2 mb-16' style={{ width: "250px" }}>Loading ...</p>
        <LinearProgress sx={{
          backgroundColor: '#F0A40B',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#707070'
          }
        }}
        />
      </Box>) : (
        <>
          <Grid container justifyContent="center" alignItems="center" direction="column" className='cardData' >
            <Grid item >

              <Typography variant="h4" color="common.white">
                <CommentIcon fontSize='large' />
                <p className='menu'>What {myReviewsData.length} people are saying</p>
                <br />
                <EmojiPeopleIcon fontSize='large'
                />
                <p className='menu' style={{ maxWidth: "450px" }}>
                  Reviews can only be made by diners who have eaten at this restaurant
                </p>

              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="h6" color="common.white" mt={7}>
                <Rating
                  name="simple-controlled"
                  value={avg.avg_overall}
                  precision={0.5}
                  readOnly
                  sx={{
                    color: '#FFCC00',
                    '& .MuiRating-iconEmpty': {
                      color: '#FFFFFF'
                    }
                  }}
                />
                <Box component="span" ml={1}>{avg.avg_overall} based on recent ratings</Box>
              </Typography>
            </Grid>

            <Grid item container justifyContent="center" mt={2} alignItems="center" sx={{ width: { xs: "100%", md: "600px" } }}>
              <Typography color="common.white">
                <div style={{ display: "inline-block" }}>
                  <p className='pTages3' style={{ display: 'inline-block' }}><span style={{ color: `#FFBF13`, marginRight: "10px", fontWeight: "bold" }}>{avg.avg_food}</span> Food</p>
                  <p className='pTages3' style={{ display: 'inline-block' }}><span style={{ color: `#FFBF13`, marginRight: "10px", fontWeight: "bold" }}>{avg.avg_service}</span> Service</p>
                  <p className='pTages3' style={{ display: 'inline-block' }}><span style={{ color: `#FFBF13`, marginRight: "10px", fontWeight: "bold" }}>{avg.avg_ambience}</span> Ambience</p>
                  {/* <p className='pTages3' style={{ display: 'inline-block' }}><span style={{ color: `#FFBF13`, marginRight: "10px", fontWeight: "bold" }}>4.1</span> Value</p> */}
                </div>
              </Typography>
            </Grid>

            <Grid item container justifyContent="center" alignItems="center" mt={5} sx={{ width: { xs: "100%", md: "500px" } }}>


              {myReviewsData.map((item) => (
                <Comment
                  name={item.user_name}
                  comment={item.comment}
                  overallRating={item.overall}
                  foodRating={item.food}
                  serviceRating={item.service}
                  ambienceRating={item.ambience}
                  userAvatar={item.user_image}
                />
              )
              )}

            </Grid>
          </Grid>
        </>
      )}</>

  );
}

export default Reviews;