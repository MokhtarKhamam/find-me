import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./FilterTimeAndDeat.css";

import food from '../../../assets/Img/cover4.png';

import NumOfPeople from "../Profile/Reservation/NumOfPeople"
import PickerFilterTime from './PickerFilterTime';
import PickerFilterDate from './PickerFilterDate';
import { Box, Button } from '@mui/material';

import { APIInstance } from '../../../Services/Api';

const Reservation = () => {
    const navigate = useNavigate();
    const [timeState, SetTimeState] = useState();
    const [DateState, SetDateState] = useState();
    const [numState, SetNumState] = useState("");
    const [isDateSlected, SetIsDateSlected] = useState(false);



    const time = (t) => {
        SetTimeState(t)
    }
    const date = (newDate) => {
        SetDateState(newDate)
        SetIsDateSlected(true)
    }
    const num = (n) => {
        SetNumState(n)
    }
    const myData = {
        guests_count: numState,
        date: DateState,
        time: timeState,
    }
    const sendApi = () => {
        APIInstance.Post("filter", myData)
            .then((res) => {
                if (res.data.status && res.status === 200) {

                    navigate("/ShowResults", { state: { respons: res.data } });
                    alert("done");
                    console.log(res);
                }
                else {
                    console.log(myData)
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
    const HandelClick = () => {
        if (DateState === undefined || timeState === undefined || numState === "") {
            alert("Please ensure that you select the number of guests, as well as the desired date and time for your reservation.")
        }
        else {
            sendApi(1);
        }
        // console.log("timeState");
        // console.log(timeState);
        // console.log("DateState");
        // console.log(DateState);
        // console.log("numState");
        // console.log(numState);
    }
    return (
        <div
            className="flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${food})`,
                backgroundSize: 'cover',
                height: '100vh',
            }}
        >
            <div className="text-center flex flex-col justify-center items-center">
                <div>
                    <p className='p2'>DISCOVER GREAT RESTAURANTS NEARBY</p>
                    <p className='p2'>YOUR SEARCH FOR THE PERFECT SPOT STARTS HERE</p>
                </div>
                <div className="bg-white flex justify-center items-center my-10 rounded-3xl" style={{ height: '100px', padding: '10px' }}>
                    <div style={{ width: "100%" }} >
                        <PickerFilterDate date={date} />
                    </div>
                    <div style={{ width: "100%" }} >
                        <PickerFilterTime time={time} isDateSlected={isDateSlected} />
                    </div>
                </div>
                <Box sx={{ width: { md: "77%", xs: "100%" } }}>
                    <NumOfPeople num={num} />
                </Box>

                <Box className='my-16' sx={{ width: { md: "77%", xs: "100%" } }}>
                    <Button onClick={HandelClick} variant="contained" style={{ width: '100%', height: '50px', backgroundColor: '#F0A40B', borderRadius: "24px" }}>
                        Show results
                    </Button>
                </Box >
                <div style={{ position: 'absolute', bottom: '-112px', textAlign: 'center' }}>
                    <p className='p1'>sudant, Syria - Edit Location </p>
                </div>

            </div>
        </div>
    );
};

export default Reservation;