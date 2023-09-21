import { TabContext, TabPanel } from '@mui/lab'
import { Box, Card, CardContent, Stack, Tab, Tabs, Typography, useMediaQuery, styled, Paper, createTheme, colors, ThemeProvider, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ReadMoreTypography from '../../readMoreTypography/ReadMoretypography'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ReactWhatsapp from 'react-whatsapp';



const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    lineHeight: "60px",
    padding: "10px 15px", 
    borderRadius: "20px",
    marginBottom : "20px"
  }));



const CardRequestsRealEstate = () => {

      const theme = createTheme({
    palette:{
      primary: {
        main: colors.pink[300]
      }
    }
  });

    const [activetab, setActivetab] = useState("0");


    const isLargeScreen = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme = {theme}>
            <div>
      <Card
        p={4}
        style={{
          width: isLargeScreen ? "350px" : "100%",
          borderRadius: "20px",
          height: "500px",
        }}
      >
        <CardContent>
          <TabContext value={activetab}>
            <Tabs
            allow
              centered
              value={activetab}
              onChange={(_, newValue) => setActivetab(newValue)}
              allowScrollButtonsMobile={true}
              variant='scrollable'
            >
              <Tab label="Overview" value="0" style={{ fontWeight: "bold" }} />
              <Tab
                label="Additional Information"
                value="1"
                style={{ fontWeight: "bold" }}
              />
              <Tab label="Contact " value="2" style={{fontWeight: "bold"}} />
            </Tabs>
            <TabPanel value="0">
              <CardContent style={{ padding: "0" }}>
                <Item sx={{backgroundColor: "#F8EAE1", padding : "20px 35px"}}>
                <Stack direction="row" sx={{justifyContent: "space-between", flexWrap :"wrap"}}>
                  <Box
                    direction="row"
                    sx={{
                      display : "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#E693A2",
                      borderRadius: "20px",
                      marginBottom : "20px",
                    }}
                    p={1}
                  >
                    <Typography
                      variant="body1"
                      style={{ color: "#fff", margin: "auto" }}
                    >
                      Damascus
                    </Typography>
                  </Box>
                  <Box
                    direction="row"
                    sx={{
                      display : "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#E693A2",
                      borderRadius: "20px",
                      marginBottom : "20px",
                    }}
                    p={1}
                  >
                    <Typography
                      variant="body1"
                      style={{ color: "#fff", margin: "auto" }}
                    >
                      Jaramana
                    </Typography>
                  </Box>
                </Stack>
                    <Item>
                        <Stack direction="row" sx={{justifyContent : "space-between"}}>
                            <Typography variant='h6' color="#E58F9F">Space</Typography>
                            <Typography variant='h6' color="#E58F9F">100m</Typography>
                        </Stack>
                    </Item>
                    <Item>
                        <Stack direction="row" sx={{justifyContent : "space-between"}}>
                            <Typography variant='h6' color="#E58F9F">Floor</Typography>
                            <Typography variant='h6' color="#E58F9F">3rd Floor</Typography>
                        </Stack>
                    </Item>
                    <Item>
                        <Stack direction="row" sx={{justifyContent : "space-between"}}>
                            <Typography variant='h6' color="#E58F9F">Price</Typography>
                            <Typography variant='h6' color="#E58F9F">50000sp</Typography>
                        </Stack>
                    </Item>
                    <Item>
                        <Stack direction="row" sx={{justifyContent : "space-between"}}>
                            <Typography variant='h6' color="#E58F9F">Side</Typography>
                            <Typography variant='h6' color="#E58F9F">East West</Typography>
                        </Stack>
                    </Item>
                    </Item>
              </CardContent>
            </TabPanel>
            <TabPanel value="1">
              <CardContent style={{ padding: "0" }}>
                <Item style={{ marginBottom: "20px", borderRadius: "20px", backgroundColor: "#E693A2", }}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                    p={1}
                  >
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", margin: "auto" }}
                    >
                      Requierment
                    </Typography>
                  </Stack>
                </Item>
                <Item
                  style={{
                    marginBottom: "20px",
                    borderRadius: "20px",
                    padding: "20px",
                    backgroundColor : "#F8EAE1"
                  }}
                >
                  <ReadMoreTypography
                    color="#000"
                    limit="200"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, nemo officia,
                  id reiciendis obcaecati quis ullam asperiores voluptates architecto rem vero expedita deserunt,
                  nisi quam doloribus eligendi laboriosam alias rerum?"
                  />
                </Item>
              </CardContent>
            </TabPanel>
            <TabPanel value='2'>
              <Item>
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems :"center" , borderBottom: "2px solid #eeeeee", marginBottom: "30px"}}>
                  <IconButton>
                    <ReactWhatsapp
                      number="+963989737475 " 
                      message="hello word !!"
                      >
                    <WhatsAppIcon sx={{color : "green"}} />
                </ReactWhatsapp>
                  </IconButton>
                  <Typography variant="h6">WhatsApp</Typography>
                </Stack>
                <Stack direction="row" sx={{justifyContent: "space-between", borderBottom: "2px solid #eeeeee", marginBottom :"30px"}}>
                  <IconButton>
                    <EmailIcon  />
                  </IconButton>
                  <Typography variant="h6">Email</Typography>
                </Stack>
                <Stack direction="row" sx={{justifyContent: "space-between", borderBottom: "2px solid #eeeeee", marginBottom: "30px"}}>
                  <IconButton>
                    <MobileFriendlyIcon sx={{color: "red"}} />
                  </IconButton>
                  <Typography variant="h6">Call Us: 0949386763</Typography>
                </Stack>
              </Item>
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </div>
    </ThemeProvider>
  )
}

export default CardRequestsRealEstate
