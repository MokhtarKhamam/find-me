import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function PickerFilterDate(props) {
  const [value, setValue] = useState(null);

  const handleDateChange = (newDate) => {
    setValue(newDate);
    const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
    props.date(formattedDate);
  };

  const shouldDisableDate = (date) => {
    const today = dayjs().startOf('day');
    const selectedDate = dayjs(date).startOf('day');
    return selectedDate.isBefore(today);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          value={value}
          onChange={handleDateChange}
          shouldDisableDate={shouldDisableDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}