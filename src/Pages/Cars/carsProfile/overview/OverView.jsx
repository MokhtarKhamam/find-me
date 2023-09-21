import { Box, Button, Grid, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import ReadMoreTypography from "../../../../Components/readMoreTypography/ReadMoretypography"
import ModeCommentIcon from '@mui/icons-material/ModeComment';



const OverView = ({data}) => {


  console.log(data)



  return (
    <div style={{backgroundColor : "#0D1E31", padding: "30px"}}>
      <Typography align ="center" variant='h3' gutterBottom sx={{color : "#fff", marginTop : "30px"}}>{data.name}</Typography>
      <Stack sx={{padding : {sx: "0", md : "20px"},width : "fit-content", margin : "auto", flexDirection : {xs : "column", md : "row"}}}>
        <Stack direction="row"  >
        <Rating name="read-only" value={`${data.evaluation}`} readOnly />         
        <Typography variant='body1' sx={{color : "#fff", marginTop : "3px", marginRight : "20px", marginLeft : "10px"}}>{data.evaluation}</Typography>
        </Stack>
        <Stack direction="row" >
            <ModeCommentIcon sx={{color : "#fff", marginRight : "10px", margintop : "3px"}} />
            <Typography variant='body1' sx={{color : "#fff"}} gutterBottom>{data.review_count} reviews</Typography>
        </Stack>
      </Stack>
      <div>
        <Typography gutterBottom variant='h6' sx={{color : "#fff", textTransform : "capitalize", marginBottom : "30px"}} align='center' >Top Tags</Typography>
        <Stack spacing={4} direction="row" sx={{flexWrap : "wrap", justifyContent : "center", gap : "20px"}}>
          {
            data.Tags && data.Tags.map((element, index) => (
              <Paper key={index} sx={{padding : "10px 20px"}}>{element.tag}</Paper>
            ))
          }
        </Stack>
        <Stack sx={{flexDirection : {sx : "column", md: "row", gap : "30px"}}}>
            <Box sx={{marginTop : "30px", width : {sx: "100%", md: "50%"}}}>
            <Typography variant='h4' color="#fff" gutterBottom>Description</Typography>
            <ReadMoreTypography text={`${data.description}`} limit={300} />
                <Typography variant='h3' sx={{color : "#fff", marginTop : "30px"}} gutterBottom>photos</Typography>
                <div style={{display: "grid", gap :"20px", gridTemplateColumns : "repeat(2, 1fr)", gridTemplateRows : "repeat(2, 1fr)"}}>
                  <div style={{gridColumn :"1 / 2", gridRow :"1 / 2"}}><img src='/assets/car2.png' alt='' style={{width : "100%", height : "100%", objectFit : "cover"}} /></div>
                  <div style={{gridColumn : "2 / 3", gridRow : "1 / 3"}}><img src='/assets/car2.png' alt='' style={{width : "100%", height : "100%", objectFit : "cover"}} /></div>
                  <div style={{gridColumn :"1 / 2", gridRow : "2 / 3"}}><img src='/assets/car2.png' alt='' style={{width : "100%", height : "100%", objectFit : "cover"}} /></div>
                </div>
            </Box>
            <Box sx={{width : {sx: "100%", md: "50%"}}}>
              <Typography variant='h6' sx={{color : "#fff", marginTop : "30px"}}>Additional information</Typography>
              <Typography variant='subtitle1' sx={{color : "#fff"}}>lcation</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>{data.location}</Typography>
              <Typography variant='subtitle1' sx={{color : "#fff"}}>Neighborhood</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>De Wallen</Typography>
              <Typography variant='subtitle1' sx={{color : "#fff"}}>Cross street</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>Amsterdam Centraal Station</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>Parking details</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>We recommend parking at Oosterdok parking garage.It takes abount 5 up to 10minutes to walk to the restaurant.</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>Public transit</Typography>
              <Typography variant='body1' gutterBottom sx={{color : "#fff"}}>Restaurant 1e Klas on platform 2B is always accessible,even without public transport card.The gates are open, and you can walk right in. Grand Café Restaurant 1e Klas is easily accessibleby metro, tram, train, boat or bus - these almost literally stopat the door of the restaurant.</Typography>
            </Box>
        </Stack>
      </div>
    </div>
  )
}

export default OverView







