import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';

export default function PickerFilterTime(props) {
    const [time, setTime] = useState('');


    const handleTimeChange = (newTime) => {
        setTime(newTime);
        const formattedTime = dayjs(newTime).format('HH:mm');
        props.time(formattedTime);
    };

    const shouldDisableTime = (time) => {
        const currentTime = dayjs().toDate();
        const selectedTime = dayjs(time).toDate();

        if (selectedTime.getHours() === 0 && selectedTime.getMinutes() >= 0 && selectedTime.getMinutes() <= 55) {
            return false;
        }

        return selectedTime < currentTime;
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['MobileTimePicker']}>
                <DemoItem>
                    <TimePicker
                        value={time}
                        onChange={handleTimeChange}
                        ampm={false}
                        shouldDisableTime={shouldDisableTime}
                        disabled={props.isDateSlected === false}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}