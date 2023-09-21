import { Box, Card, CardContent, CardMedia, Paper, Rating, Skeleton, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = ({ review_count, evaluation }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}shop_review/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setReview(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#0D1E31', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ borderBottom: '1px solid #0CC258', width: 'fit-content', color: '#fff', margin: 'auto', marginBottom: '20px' }}>
        Review
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff', borderBottom: '1px solid #D3D3D3', width: 'fit-content', margin: 'auto', marginBottom: '20px' }}>
        What {review_count} people{review_count > 1 ? 's' : ''} are saying
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: '#fff' }}>
        Overall ratings and reviews
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: '#fff' }}>
        Reviews can only be made by diners who have eaten at this restaurant
      </Typography>
      <Stack direction="row" spacing={8} sx={{ margin: 'auto', marginTop: '30px', width: 'fit-content' }}>
        <Rating name="read-only" value={`${evaluation}`} readOnly />
        <Typography variant="body1" sx={{ color: '#fff' }}>
          {evaluation} based on recent rating
        </Typography>
      </Stack>
      <Stack spacing={4} sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {isLoading ? (
          <Skeleton variant="rectangular" sx={{width: "80%", height: "166px", backgroundColor: "#FFFFFF"}} />
        ) : (
          review.map((element, index) => (
            <Card key={index} sx={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
              <Stack direction="row" spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia image={`${process.env.REACT_APP_API_URL_IMAGE}${element.user_image}`} title="Person" sx={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <Stack spacing={2}>
                  <Rating name="read-only" value={`${element.rate}`} readOnly sx={{ marginTop: '30px' }} />
                  <Typography variant="h6">{element.user_name}</Typography>
                </Stack>
              </Stack>
              <CardContent>
                <Typography>{element.comment}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Stack>
    </div>
  );
};

export default Review;