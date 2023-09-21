
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import NumOfPeople from "./NumOfPeople"
import TimePickerComp from './TimePicker';
import DatePickerComp from './DatePicker';

import { APIInstance } from '../../../../Services/Api';


export default function ReservationCard(props) {
    const navigate = useNavigate();

    const [numState, SetNumState] = useState('');
    const [timeState, SetTimeState] = useState();
    const [DateState, SetDateState] = useState();
    const [dates, setDates] = useState();
    const [specialRequest, setSpecialRequest] = useState()
    // const [Respons, setRespons] = useState();

    const [occasion, setOccasion] = useState()


    const sxFormControll = {
        margin: "8px",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "20px",
        marginTop: "20px"
    }

    const num = (n) => {
        SetNumState(n)
    }
    const time = (t) => {
        const formattedTime = t.format('HH:mm');
        SetTimeState(formattedTime)
    }
    const slectedDate = (newDate) => {
        const formattedDate = newDate.format('YYYY-MM-DD');
        SetDateState(formattedDate)
    }

    const myData = {
        food_shops_id: props.id,
        guests_count: numState,
        date: DateState,
        time: timeState,
        note: specialRequest,
        occasion: occasion,
    }
    const sendApi = (x) => {
        APIInstance.Post("create_reservation", myData, "27|d8qIqaRybJvg6ajH7d3ubladUS4JLWfM3r1Vi36I")
            .then((res) => {
                if (res.data.status && res.status === 200) {
                    if (x === 0) { navigate("/completeReservation", { state: { Respons: res.data.data } }) }
                    else { navigate(`/order/${myData.food_shops_id}`, { state: { reservationId: res.data.data.id } }); }
                } else {
                    let errorMessage = "Connection Failed";
                    if (res.data.message) {
                        errorMessage = res.data.message;
                    }
                    alert(errorMessage);
                    throw new Error(errorMessage);
                }
            })
            .catch((error) => {
                // alert("An error occurred while processing your request. Please try again later.");
            });

    }

    const ClicketResernWithOrder = () => {
        if (DateState === undefined || timeState === undefined || numState === "") {
            alert("Please ensure that you select the number of guests, as well as the desired date and time for your reservation.")
        }
        else {
            sendApi(1);

        }


    }
    useEffect(() => {
        setDates(props.dateAndTime.map(item => (item.Date)));
    }, [props.dateAndTime]);


    const ClicketFindTTabel = () => {

        if (DateState === undefined || timeState === undefined || numState === "") {
            alert("Please ensure that you select the number of guests, as well as the desired date and time for your reservation.")
        }
        else {
            sendApi(0);
        }
    }


    return (
        <Box sx={{ minWidth: { xs: "100%", md: "550px" } }}>
            <Card style={{ borderRadius: "13px" }}>
                <div style={{ backgroundColor: "#612929", color: "white" }} >
                    <CardContent>

                        <Typography variant="h3" component="div" style={{ textAlign: "center", alignContent: "center" }}>
                            Make an reservation
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: "50px" }}>
                            Number Of Guests
                            <br />
                            <br />

                            <NumOfPeople num={num} />
                        </Typography>
                        <Typography variant="body1" style={{ marginTop: "20px" }}>
                            Date And Time
                            <br />
                            <br />
                            <div className="bg-white grid grid-cols-1 md:grid-cols-2 justify-center items-center rounded-3xl" style={{ height: 'auto', padding: '10px', width: "100%" }}>
                                <div style={{ width: "100%", padding: "0", textAlign: "center" }} >
                                    <DatePickerComp dates={dates} date={DateState} slectedDate={slectedDate} />
                                </div>
                                <div style={{ width: "100%", padding: "0", textAlign: "center" }} >
                                    <TimePickerComp time={time} slectedDate={slectedDate} dateAndTime={props.dateAndTime} DateState={DateState} />
                                </div>
                            </div>
                        </Typography>
                        <Grid item xs={12} sm={12}>
                            <div style={{ width: "100%", padding: "0", textAlign: "center" }} >
                                <FormControl fullWidth sx={sxFormControll}>
                                    <TextField id="Add a special request" label="Add a special request" variant="outlined"
                                        InputProps={{
                                            style: {
                                                borderRadius: "20px",
                                            }
                                        }}
                                        value={specialRequest}
                                        onChange={(e) =>
                                            setSpecialRequest(e.target.value)
                                        }
                                    />
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <div style={{ width: "100%", padding: "0", textAlign: "center" }} >
                                <FormControl fullWidth sx={sxFormControll}>
                                    <InputLabel id="occasion-label" style={{ marginLeft: "13px" }}>Select an occasion</InputLabel>
                                    <Select
                                        labelId="occasion-label"
                                        id="occasion"
                                        variant="outlined"
                                        style={{ borderRadius: '20px' }}
                                        value={occasion}
                                        onChange={(e) =>
                                            setOccasion(e.target.value)
                                        }
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="birthday">Birthday</MenuItem>
                                        <MenuItem value="anniversary">Anniversary</MenuItem>
                                        <MenuItem value="wedding">Wedding</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center', marginTop: "20px" }}>
                        <Button onClick={ClicketFindTTabel} variant="contained" style={{ width: '70%', height: '50px', backgroundColor: '#F0A40B', borderRadius: "16px" }}>
                            Find A Tabel
                        </Button>
                        <Button onClick={ClicketResernWithOrder} variant="contained" style={{ width: '70%', height: '50px', backgroundColor: '#F0A40B', borderRadius: "16px" }}>
                            Reservation With Order
                        </Button>
                    </CardActions>
                </div>

            </Card>
        </Box >
    );
}