import * as React from 'react';
import { useState, useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function DatePickerComp(props) {
  const [value, setValue] = useState();
  const handleDateChange = (newDate) => {
    setValue(newDate);
    props.slectedDate(newDate);
  }

  useEffect(() => {
    // console.log(props.dates);
  }, [value])


  const isDateDisabled = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    return !props.dates.includes(formattedDate);
  };

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          value={value}
          onChange={handleDateChange}
          shouldDisableDate={isDateDisabled}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}