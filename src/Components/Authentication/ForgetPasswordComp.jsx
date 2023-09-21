import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, IconButton, Box } from '@mui/material';
// import { Facebook, Twitter } from '@material-ui/icons';

import sxStyle from './Styel';





import { InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ForgetPasswordComp() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    return (
        <>
            <Box sx={sxStyle.mainRoot} >

                <Card variant="outlined" sx={sxStyle.card}>
                    <CardContent sx={sxStyle.cardContent}>

                        <Typography sx={sxStyle.cardTitle} align="center">
                            Forget Password
                        </Typography>
                        <Typography sx={sxStyle.text} align="center">
                            Reset Password
                        </Typography>

                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                            <TextField
                                fullWidth
                                required
                                autoComplete=""
                                autoFocus
                                placeholder="New Password"
                                margin="normal"
                                variant="standard"
                                size="large"
                                type={showPassword ? "text" : "password"}
                                style={{ width: "60%" }}
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

                            <TextField
                                fullWidth
                                required
                                autoComplete=""
                                autoFocus
                                placeholder="Confirm Password"
                                margin="normal"
                                variant="standard"
                                size="large"
                                type={showPassword ? "text" : "password"}
                                style={{ width: "60%" }}
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
                            <Button variant="outlined" sx={sxStyle.btnOutlineWhite} size="large"  >
                                Reset Password
                            </Button>
                        </div>


                    </CardContent>
                </Card>


            </Box>
        </>
    );
}

export default ForgetPasswordComp;