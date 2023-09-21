import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Link, IconButton, Divider, FormHelperText } from '@mui/material';
// import { Facebook, Twitter } from '@material-ui/icons';
import sxStyle from './Styel';
import { useNavigate } from 'react-router';


import { InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import { APIInstance } from '../../Services/Api';


function SignUpComp() {
    const navigate = useNavigate();

 
    const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;



    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [firstName, setFirstName] = useState(true);


    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(false);

    const handleChangeName = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
        setErrorName(inputValue === '');
        setFirstName(false);

    };



    const [firstPhone, setFirstPhone] = useState(true);


    const [phone, setphone] = useState('');
    const [errorPhone, setErrorPhone] = useState(false);

    const handleChangePhone = (event) => {
        const inputValue = event.target.value;
        setphone(inputValue);
        setErrorPhone(inputValue === '' || isNaN(inputValue) || inputValue.length < 10 || inputValue.length > 10);
        setFirstPhone(false);

    };


    const [firstPassword, setFirstPassword] = useState(true);

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);


    const handleChangePassword = (event) => {
        const inputValue = event.target.value;
        // console.log(inputValue);
        setPassword(inputValue);
        // console.log(PWD_REGEX.test(inputValue));
        setErrorPassword(!PWD_REGEX.test(inputValue));
        // debugger;
        setFirstPassword(false);

    };


    const myData = {
        phone,
        name,
        password,
        fcm_token: "666",
        signature: "11111111111",

    }



    const handleRegisterClick = () => {

        if (!errorPhone && !errorPassword && !errorName && !firstPhone && !firstPassword && !firstName) {
            console.log(myData);
            // console.log(password);
            APIInstance.Post("register", myData)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        console.log(res);
                        navigate('/code', { state: { phone: myData.phone } });
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
                    console.log(error);
                    alert("An error occurred while processing your request. Please try again later.");
                });


        }
        else alert("Not Vailid Name or Phone Number or Password!")


    };



    return (
        <Box sx={sxStyle.mainRoot} >

            <Card variant="outlined" sx={sxStyle.card}>
                <CardContent sx={sxStyle.cardContent}>

                    <Typography variant="h5" component="h2" sx={sxStyle.cardTitle} align="center">
                        Sign Up
                    </Typography>


                    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "60%" }}>
                            <Box sx={{ width: "100%", height: "100px" }}>
                                <TextField
                                    fullWidth
                                    required
                                    autoComplete=""
                                    autoFocus
                                    value={name}
                                    onChange={handleChangeName}
                                    placeholder="User Name"
                                    margin="normal"
                                    variant="standard"
                                    size="large"
                                    style={{ width: "100%" }}
                                    sx={sxStyle.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                {errorName && <FormHelperText error>This Is Not A Valid Name</FormHelperText>}
                            </Box>

                            <Box sx={{ width: "100%", height: "100px" }}>
                                <TextField
                                    fullWidth
                                    required
                                    autoComplete=""
                                    autoFocus
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={handleChangePhone}
                                    margin="normal"
                                    variant="standard"
                                    size="large"
                                    style={{ width: "100%" }}
                                    sx={sxStyle.textField}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                                {errorPhone && <FormHelperText error>This Is Not A Valid Phone Number</FormHelperText>}
                            </Box>

                            <Box sx={{ width: "100%", height: "100px" }}>
                                <TextField
                                    fullWidth
                                    required
                                    autoComplete=""
                                    autoFocus
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChangePassword}
                                    margin="normal"
                                    variant="standard"
                                    size="large"
                                    type={showPassword ? "text" : "password"}
                                    style={{ width: "100%" }}
                                    sx={sxStyle.textField}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {errorPassword && <FormHelperText error>This Is Not A Valid Name</FormHelperText>}
                            </Box>
                        </Box>



                        <Button variant="outlined" sx={sxStyle.btnOutlineWhite} size="large" onClick={handleRegisterClick}>
                            Register
                        </Button>
                    </div>


                    <Divider style={{ backgroundColor: 'white', width: "50%", margin: "20px auto" }} textAlign="center" />


                    <Typography variant="body2" component="div" align="center">
                        <p className="mb-0">Already Have An Account? <Link href="/#/login" style={{ textDecoration: "none" }} sx={sxStyle.dontHaveAccount}>Login</Link></p>
                    </Typography>

                </CardContent>
            </Card>

        </Box>
    );
}

export default SignUpComp;