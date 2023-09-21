import React, { useState, useEffect } from 'react';
import Button, { Box } from '@mui/material';
import PopupPhotos from './PopupPhotos';
import { Typography } from '@mui/material';
import { Grid, Card, CardMedia } from '@mui/material';


import LinearProgress from '@mui/material/LinearProgress';
import { APIInstance } from "../../../../Services/Api"


function Photos(props) {
  const [open, setOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [myPhotosData, setMyPhotosData] = useState([]);
  const [loding, setLoding] = useState(true);


  useEffect(() => {
    APIInstance.Get(`show_shop_image/${props.id}`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status) {
            setMyPhotosData(res.data.data);
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
      });
  }, [props.id]);

  const handleOpen = (food) => {
    setSelectedFood(food);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedFood(null);
    setOpen(false);
  };

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
      </Box>) :
        <Box sx={{ minHeight: "100vh" }}>
          <Typography variant="body1" sx={{ padding: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ color: 'white' }}>
                <h1 className="p13">{myPhotosData.length} Basic Meals :</h1>
                <br />
              </Grid>

              {myPhotosData.map((item) => (
                <Grid item xs={12} md={4} sm={12} key={item.id} sx={{ width: { md: "500px", xs: "100%" }, height: "300px", padding: "20px" }}>
                  <Card sx={{ borderRadius: '20px' }}>
                    <CardMedia
                      sx={{ width: '100%', height: '100%', cursor: "pointer" }}
                      component="img"
                      image={item.URL}
                      alt="img"
                    // onClick={() => handleOpen(foods[index])}
                    />
                  </Card>
                </Grid>
              ))}

            </Grid>



            {selectedFood && <PopupPhotos open={open} onClose={handleClose} food={selectedFood} />}

          </Typography>
        </Box>
      }
    </>
  );
}

export default Photos;