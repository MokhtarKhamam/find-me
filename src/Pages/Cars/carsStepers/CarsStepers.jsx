import * as React from 'react';
import Box from '@mui/material/Box';
import { Stepper, Step ,StepButton  } from '@mui/material';


import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Grid, TextField, MenuItem, Divider } from '@mui/material';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import photo from "../../../assets/Img/photo.png"

// import { makeStyles } from '@material-ui/core/styles';

const sxStyel = {
    root: {
        backgroundImage: `url(/assets/car2.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding:"60px"   
    },
};

const unitSizeOptions = ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms'];
const bathroomOptions = ['1 Bathroom', '2 Bathrooms', '3 Bathrooms', '4 Bathrooms'];
const maxOccupancyOptions = ['2', '4', '6', '8'];

const ownershipOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const steps = ['Resort', 'Ownership', 'Details'];

export default function CarsStepers() {
    const classes = sxStyel;
    const [done, setDone] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [resortForm, setResortForm] = React.useState(null);
    const [weekForm, setWeekForm] = React.useState(null);
    const [dateForm, setDateForm] = React.useState(null);

    const [unitSize, setUnitSize] = React.useState('');
    const [bathrooms, setBathrooms] = React.useState('');
    const [maxOccupancy, setMaxOccupancy] = React.useState('');

    const [selectedOwnership, setSelectedOwnership] = React.useState('');
    const [annual, setAnnual] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        setDone(true);
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {

        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setResortForm(null);
        setWeekForm(null);
        setDateForm(null);
        setUnitSize('');
        setBathrooms('');
        setMaxOccupancy('');
        setSelectedOwnership('');
        setAnnual(false);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDone(false);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Grid container spacing={2} >
                        <Grid item xs={12} sx={{ marginBottom: "30px" }}>
                            <Typography variant="title" sx={{ fontSize: "30px" }}>Resort Information</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ marginBottom: "15px" }}>
                            <TextField
                                fullWidth
                                label="Resort Name"
                                variant="outlined"
                                value={resortForm}
                                onChange={(e) => setResortForm(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                select
                                label="Unit Size"
                                variant="outlined"
                                value={unitSize}
                                onChange={(e) => setUnitSize(e.target.value)}
                            >
                                {unitSizeOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                select
                                label="Bathrooms"
                                variant="outlined"
                                value={bathrooms}
                                onChange={(e) => setBathrooms(e.target.value)}
                            >
                                {bathroomOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                select
                                label="Max Occupancy"
                                variant="outlined"
                                value={maxOccupancy}
                                onChange={(e) => setMaxOccupancy(e.target.value)}
                            >
                                {maxOccupancyOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>
                );
            case 1:
                return (
                    <Grid container spacing={2} >
                        <Grid item xs={12} sx={{ marginBottom: "30px" }}>
                            <Typography variant="title" sx={{ fontSize: "30px" }}>Unit Information</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: "15px" }} >
                            <TextField
                                fullWidth
                                label="Check-in Date"
                                variant="outlined"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={weekForm}
                                onChange={(e) => setWeekForm(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: "15px" }} >
                            <TextField
                                fullWidth
                                label="Check-in Time"
                                variant="outlined"
                                type="time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={dateForm}
                                onChange={(e) => setDateForm(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                select
                                label="Annual - Every Year"
                                variant="outlined"
                                value={annual}
                                onChange={(e) => setAnnual(e.target.value)}
                            >
                                {ownershipOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>


                        <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                select
                                label="Ownership Type"
                                variant="outlined"
                                value={selectedOwnership}
                                onChange={(e) => setSelectedOwnership(e.target.value)}
                            >
                                {ownershipOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ marginBottom: "30px" }}>
                            <Typography variant="title" sx={{ fontSize: "30px" }}>User Information</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: "15px" }}>
                            <TextField
                                fullWidth
                                label="First Name"
                                variant="outlined"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: "15px" }}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                variant="outlined"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                type="PhoneNumber"
                                label="Phone Number"
                                variant="outlined"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </Grid>


                    </Grid>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <Box sx={classes.root} >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                <Stepper activeStep={activeStep} alternativeLabel sx={{ width: '50%', marginTop: "50px", color: '#000' }}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const buttonProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepButton
                                    onClick={handleStep(index)}
                                    completed={completed[index]}
                                    {...buttonProps}
                                    sx={{
                                        '& .MuiStepLabel-root .Mui-completed': {
                                            color: '#A7A7A7', // circle color (COMPLETED)
                                            fontSize: { sx: "small", md: "xxx-large" },
                                            zIndex: "20"

                                        },
                                        '& .MuiStepLabel-root .Mui-active': {
                                            color: '#A7A7A7', // circle color (ACTIVE)
                                            fontSize: { sx: "small", md: "xxx-large" },
                                            zIndex: "20"
                                        },
                                        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                            fill: 'white', // circle's number (ACTIVE)
                                            fontSize: { sx: "small", md: "large" },
                                        },
                                        '& .MuiStepLabel-labelContainer span': {
                                            fontSize: { sx: "small", md: "x-large" }, // font size of label text
                                        },
                                    }}
                                >
                                    <span style={{ color: "#A7A7A7" }}>{label}</span>
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: "column", justifyContent: 'center' }} >
                {done ? (

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#A7A7A7',
                        padding: '20px',
                        borderRadius: '5px',


                    }}>
                        <Typography sx={{ mt: 2, mb: 1, fontSize: '1.2rem' }}>
                            All steps completed -  finished
                        </Typography>
                        <Button
                            sx={{ backgroundColor: '#A7A7A7', mt: '20px', color: '#fff', '&:hover': { color: 'black' } }}
                            size='large'
                            onClick={handleReset}>Reset</Button>
                    </Box>
                ) : (
                    <div>
                        <Box sx={{ backgroundColor: '#dedede', borderRadius: '5px', width: { sx: "small", md: "900px" }, margin: 'auto' }}>
                            <div style={{ padding: '20px' }}>
                                <Typography sx={{ mt: 2, mb: 1, fontSize: '1.2rem' }}>{getStepContent(activeStep)}</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                    {activeStep !== 0 && (
                                        <Button sx={{ backgroundColor: 'transparent', color: '#000', borderRadius: '20px' }} onClick={handleBack}>
                                            <ArrowCircleLeftIcon /><span style={{ marginLeft: "10px" }}> Previous Step</span>
                                        </Button>
                                    )}
                                    <Button
                                        // variant="contained"
                                        size='large'
                                        sx={{ backgroundColor: '#A7A7A7', color: '#fff', borderRadius: '20px', width: "140px", height: "45px", '&:hover': { color: 'black' } }}
                                        onClick={isLastStep() ? handleComplete : handleNext}
                                    >
                                        {isLastStep() ? 'Finish' : <span> Next {<ArrowCircleRightIcon />}</span>}
                                    </Button>
                                </Box>
                            </div>
                            <Box sx={{ textAlign: 'center', padding: '30px 0', backgroundColor: '#A7A7A7' }} >
                                <p style={{ fontWeight: 'bold', fontSize: "20px" }}>
                                    Need Help Or Have Any Questions?
                                    <span style={{ color: "#fff", marginLeft: "10px" }}>CALL NOW: </span>
                                    <a href="tel:+963937346789" style={{ color: '#fff', textDecoration: 'none', fontSize: "32px", fontWeight: 'bold' }}>+963-937346789</a>
                                </p>
                            </Box>
                        </Box>

                    </div>
                )}
            </Box>
        </Box >
    );
}