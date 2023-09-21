import * as React from 'react';
import { useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const names = [
    '1 personed',
    '2 People',
    '3 People',
    '4-6 People',
    '7-9 People',
    '10-12 People',
    '12-14 People',
    'More Then...',

];

export default function SelectAutoWidth(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);

    };

    useEffect(() => {
        props.num(age);
    }, [age])

    return (
        <div style={{width: "100%"}}>
            <FormControl sx={{  minWidth: "100%" }} style={{ textAlign: "start" }}>
                <InputLabel id="demo-simple-select-autowidth-label" sx={{ color: '#707070' }}>{<PersonOutlineOutlinedIcon />}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" sx={{ backgroundColor: 'white', borderRadius : "20px" }} />}
                    label="Number"
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}

                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}