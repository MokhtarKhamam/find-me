import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Link, IconButton, Divider, Box } from '@mui/material';
import sxStyle from './Styel';
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login } from '../../Store/auth'; 

import { APIInstance } from '../../Services/Api';

import { FormHelperText } from '@mui/material';


import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authAction } from "../../Store/auth";
import { useNavigate, useLocation } from 'react-router-dom';

function LoginComp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);


    const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
        setPassword(inputValue);
        setErrorPassword(!PWD_REGEX.test(inputValue));
        setFirstPassword(false);

    };


    const myData = {
        phone,
        password,
        fcm_token: "666",
    }

                  //check where we was befor login and go to same page afetr login
                  const redirectPath = location.state?.path || "/"


    // const handleLoginClick = () => {
    //     if (!errorPhone && !errorPassword && !firstPhone && !firstPassword) {
    //         console.log(myData);
    //         APIInstance.Post("login", myData)
    //             .then((res) => {
    //                 if (res.data.status) {
    //                     alert(res.data.message);
    //                     dispatch(authAction.login({ phone: myData.phone, token: res.data.token }));
    //                     console.log(res);
    //                     navigate("/");
    //                 } else {
    //                     let errorMessage = "Connection Failed";
    //                     if (res.data.message) {
    //                         errorMessage = res.data.message;
    //                     }
    //                     alert(errorMessage);
    //                     throw new Error(errorMessage);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 alert("An error occurred while processing your request. Please try again later.");
    //             });
    //     }
    //     else alert("Not Vailid Phone Number Or Password!")
    // };

    //redux state
    const {error, loading} = useSelector((state) => state.auth)

    const handleLoginClick = () => {
        dispatch(login(myData))
          .then((result) => {
            if (result.payload.status) {
              setphone("");
              setPassword("");
              navigate(redirectPath, {replace: true});
            }
            else{
                alert(result.payload.message)
            }
          })
          .catch((error) => {
            console.log(error);
            alert("An error occurred while processing your request. Please try again later.");
          });
      };



    return (
        <Box sx={sxStyle.mainRoot} >
            <Card variant="outlined" sx={sxStyle.card}>
                <CardContent sx={sxStyle.cardContent}>
                    <Typography variant="h5" component="h2" sx={sxStyle.cardTitle} align="center">
                        Login
                    </Typography>
                    <Typography variant="body2" component="p" sx={sxStyle.text} align="center">
                        Please enter your login and password!
                    </Typography>
                    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "60%", height: "200px" }}>
                            <Box sx={{ width: "100%", height: "100px" }}>
                                <TextField
                                    fullWidth
                                    required
                                    autoComplete=""
                                    autoFocus
                                    placeholder="Phone Number"
                                    margin="normal"
                                    variant="standard"
                                    size="large"
                                    style={{ width: "100%" }}
                                    sx={sxStyle.textField}
                                    value={phone}
                                    onChange={handleChangePhone}
                                    InputProps={{
                                        disableUnderline: true,
                                        inputProps: {
                                            onKeyDown: (event) => {
                                                if (event.key === '.' || event.key === '-') {
                                                    event.preventDefault();
                                                }
                                            }
                                        }
                                    }}
                                />
                                {errorPhone && <FormHelperText error>This Is Not A Valid Phone Number</FormHelperText>}
                            </Box>



                            <TextField
                                fullWidth
                                required
                                autoComplete=""
                                autoFocus
                                placeholder="Password"
                                margin="normal"
                                variant="standard"
                                size="large"
                                type={showPassword ? "text" : "password"}
                                style={{ width: "100%" }}
                                sx={sxStyle.textField}
                                value={password}
                                onChange={handleChangePassword}
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
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    inputProps: {
                                        onKeyDown: (event) => {
                                            if (event.key === '.' || event.key === '-') {
                                                event.preventDefault();
                                            }
                                        }
                                    }

                                }}
                            />
                            {errorPassword && <FormHelperText error>This Is Not A Valid Password</FormHelperText>}

                        </Box>

                        <Typography variant="body2" component="p" style={{ marginTop: "20px" }} align="start">
                            <Link href="/#/forgetpassword" style={{ color: "#7E5D19", textDecoration: 'none' }}>
                                Forgot password?
                            </Link>
                        </Typography>
                        <Button variant="outlined" sx={sxStyle.btnOutlineWhite} size="large" onClick={handleLoginClick}>
                            {loading ? "loading..." : "Login"}
                        </Button>
                        {
                            error && <div>{error}</div>
                        }
                    </div>
                    <Typography variant="body2" component="div" align="center">
                        <p className="mb-0">Don't have an account? <Link href="/#/signup" style={{ textDecoration: 'none' }} sx={sxStyle.dontHaveAccount}>Sign Up</Link></p>
                    </Typography>
                    <Divider style={{ backgroundColor: 'white', width: "50%", margin: "20px auto" }} textAlign="center" />
                    <Typography variant="body2" component="div" align="center">
                        <p className="mb-0">Just browse ? <Link href="/" style={{ textDecoration: 'none' }} sx={sxStyle.dontHaveAccount}>Skip</Link></p>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default LoginComp;