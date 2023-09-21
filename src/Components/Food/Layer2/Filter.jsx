import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from '@mui/material';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const sxStyel = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        paddingTop: "32px",
        paddingBottom: "32px",
        maxWidth: 1500,

    },
    filterContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: "16px",
        marginBottom: "16px",
        width: '100%',
        border: `1px solid #f2f2f0`,
        borderRadius: "20px",
        padding: "16px",
        // borderRadius: "12px",
    },
    filterRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: "16px",
    },
    AchenRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: "16px",
    },
    filterLabel: {
        marginRight: "16px",
    },
    filterSelect: {
        minWidth: 120,
        marginRight: "16PX",
    },
    resetButton: {
        marginLeft: 'auto',
    },
    FormLabels: {
        color: "#F0A40B",
        fontWeight: "bold",
        fontSize: "16px"


    },
    checkBoxIcon: {
        fill: "#F0A40B",
        margin: `0px`
    },
    devider: {
        borderBottom: '1px solid #F0A40B',
        width: '50%',
        marginBottom: "30px",
    },
    formControlLabel: {
        marginRight: '6px',
    },
};

const Filter = () => {
    const navigate = useNavigate();

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const classes = sxStyel;
    const [price, setPrice] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [diningOption, setDiningOption] = useState('');
    const [seatingOptions, setSeatingOptions] = useState('');
    const [regionsOptions, setRegionsOptions] = useState('');
    const [topRated, setTopRated] = useState('');
    const [amenities, setAmenities] = useState('');

    const handleReset = () => {
        setCuisine('');
        setDiningOption('');
        setPrice("");
        setSeatingOptions("");
        setRegionsOptions("");
        setTopRated("");
        setAmenities("");

    };

    const handleApply = () => {
        navigate("/ShowResults");

        //API
    };

    return (

        <Box sx={classes.container}>
            <Box sx={classes.filterContainer}>
                <Box sx={classes.AchenRow}>
                    <Button variant="outlined" style={{ color: '#fff', backgroundColor: "#F0A40B" }} onClick={handleApply}>
                        Apply
                    </Button>
                    <Button variant="outlined" style={{ color: '#F0A40B' }} sx={classes.resetButton} onClick={handleReset}>
                        Reset
                    </Button>
                </Box>
                <Box style={{ borderBottom: '1px solid #4343', width: '100%', marginBottom: "30px" }} />


                <FormGroup >
                    <FormLabel sx={classes.FormLabels}>Price</FormLabel>
                    <Box sx={classes.filterRow} >
                        <FormControlLabel
                            control={<Checkbox checked={price === 'cheap'} onChange={() => setPrice('cheap')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Cheap"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={price === 'average'} onChange={() => setPrice('average')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Average"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={price === 'expensive'} onChange={() => setPrice('expensive')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Expensive"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                    <Box sx={classes.devider} />
                </FormGroup>


                <FormGroup>
                    <FormLabel sx={classes.FormLabels}>Cuisine</FormLabel>
                    <Box sx={classes.filterRow}>
                        <FormControlLabel
                            control={<Checkbox checked={cuisine === 'italian'} onChange={() => setCuisine('italian')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Italian"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cuisine === 'chinese'} onChange={() => setCuisine('chinese')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Chinese"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cuisine === 'mexican'} onChange={() => setCuisine('mexican')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Mexican"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                    <Box sx={classes.devider} />
                </FormGroup>


                <FormGroup>
                    <FormLabel sx={classes.FormLabels}>Dining Options</FormLabel>
                    <Box sx={classes.filterRow}>
                        <FormControlLabel
                            control={<Checkbox checked={diningOption === 'indoor'} onChange={() => setDiningOption('indoor')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Indoor"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={diningOption === 'outdoor'} onChange={() => setDiningOption('outdoor')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Outdoor"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                    <Box sx={classes.devider} />
                </FormGroup>

                <FormGroup>
                    <FormLabel sx={classes.FormLabels}>Seating Options</FormLabel>
                    <Box sx={classes.filterRow}>
                        <FormControlLabel
                            control={<Checkbox checked={seatingOptions === 'standard'} onChange={() => setSeatingOptions('standard')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Standard"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                    <Box sx={classes.devider} />
                </FormGroup>

                <FormGroup>
                    <FormLabel sx={classes.FormLabels}>Regions Options</FormLabel>
                    <Box sx={classes.filterRow}>
                        <FormControlLabel
                            control={<Checkbox checked={regionsOptions === 'gentrum'} onChange={() => setRegionsOptions('gentrum')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Gentrum"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={regionsOptions === 'noord'} onChange={() => setRegionsOptions('noord')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Noord"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                    <Box sx={classes.devider} />
                </FormGroup>

                <FormGroup>
                    <FormLabel sx={classes.FormLabels}>Top Rated</FormLabel>
                    <Box sx={classes.filterRow}>
                        <FormControlLabel
                            control={<Checkbox checked={topRated === 'Goodforgroups'} onChange={() => setTopRated('Goodforgroups')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Good For  Groups"
                            classes={{ root: classes.formControlLabel }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={topRated === 'GoodForSpecialOccasions'} onChange={() => setTopRated('GoodForSpecialOccasions')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Good For  Special Occasions"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                    <Box sx={classes.devider} />
                </FormGroup>


                <FormGroup>
                    <FormLabel sx={classes.FormLabels}>Amenities</FormLabel>
                    <Box sx={classes.filterRow}>
                        <FormControlLabel
                            control={<Checkbox checked={amenities === 'wheelchairAccess'} onChange={() => setAmenities('wheelchairAccess')} icon={<CheckBoxOutlineBlankIcon sx={classes.checkBoxIcon} />} checkedIcon={<CheckBoxIcon sx={classes.checkBoxIcon} />} />}
                            label="Wheelchair Access"
                            classes={{ root: classes.formControlLabel }}
                        />
                    </Box>
                </FormGroup>

            </Box>
        </Box>
    );
};

export default Filter;