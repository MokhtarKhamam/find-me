import {
  Box,
  Card,
  CardContent,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import ReadMoreTypography from "../../../../Components/readMoreTypography/ReadMoretypography";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

const RequestCard = () => {
  const [activetab, setActivetab] = useState("0");

  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Card
        p={4}
        style={{
          width: isLargeScreen ? "350px" : "100%",
          borderRadius: "20px",
          height: "450px",
        }}
      >
        <CardContent>
          <TabContext value={activetab}>
            <Tabs
            allow
              centered
              value={activetab}
              onChange={(_, newValue) => setActivetab(newValue)}
            >
              <Tab label="Overview" value="0" style={{ fontWeight: "bold" }} />
              <Tab
                label="Additional Information"
                value="1"
                style={{ fontWeight: "bold" }}
              />
            </Tabs>
            <TabPanel value="0">
              <CardContent style={{ padding: "0" }}>
                  <Box
                    direction="row"
                    sx={{
                      display : "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#223057",
                      borderRadius: "20px",
                      marginBottom : "20px"
                    }}
                    p={1}
                  >
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", margin: "auto" }}
                    >
                      Kia Rio
                    </Typography>
                  </Box>
                <Item style={{ marginBottom: "10px", borderRadius: "20px" }}>
                  <Stack
                    sx={{
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                    p={2}
                  >
                    <Stack
                      direction="row"
                      style={{
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography variant="h6" style={{ color: "#000" }}>
                        Model
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "#2EB714", fontWeight: "bold" }}
                      >
                        2010
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <Typography variant="h6" style={{ color: "#000" }}>
                        Passengers
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "#2EB714", fontWeight: "bold" }}
                      >
                        4
                      </Typography>
                    </Stack>
                  </Stack>
                </Item>
                <Item style={{ marginBottom: "10px", borderRadius: "20px" }}>
                  <Stack
                    sx={{
                      justifyContent: "space-between",
                      borderRadius: "20px",
                    }}
                    p={2}
                  >
                    <Stack
                      direction="row"
                      style={{
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <Typography variant="h5" style={{ color: "#000" }}>
                        Color
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "#2EB714", fontWeight: "bold" }}
                      >
                        Blue
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" style={{ color: "#000" }}>
                        price
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "#2EB714", fontWeight: "bold" }}
                      >
                        1000$_2000$
                      </Typography>
                    </Stack>
                  </Stack>
                </Item>
              </CardContent>
            </TabPanel>
            <TabPanel value="1">
              <CardContent style={{ padding: "0" }}>
                <Item style={{ marginBottom: "20px", borderRadius: "20px" }}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      backgroundColor: "#223057",
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
          </TabContext>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestCard;
