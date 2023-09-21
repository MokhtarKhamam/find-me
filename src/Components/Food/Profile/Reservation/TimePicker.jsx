import * as React from 'react';
import { useState, useEffect } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';

export default function TimePickerComp(props) {
  const [time, setTime] = useState();

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    // console.log("time mn joahhhhh:" + time);
    props.time(newTime);
  };

  useEffect(() => {


  }, [time]);

  const selectedDates = props.dateAndTime.filter(item => item.Date === props.DateState);

  const availableTimes = selectedDates.map(item => item.Times).flat();

  // console.log(availableTimes);


  const isTimeDisabled = (time) => {
    const formattedTime = time.format('HH:mm');
    return !availableTimes.includes(formattedTime);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'MobileTimePicker',
            'MobileTimePicker',
            'MobileTimePicker',
          ]}
        >
          <DemoItem>
            <TimePicker
              // views={['hours', 'minutes']}
              value={time}
              onChange={(newTime) => handleTimeChange(newTime)}
              shouldDisableTime={isTimeDisabled}
              disabled={!props.DateState}
              ampm={false}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

