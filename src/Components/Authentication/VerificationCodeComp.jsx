import { useState, useEffect, useRef } from "react";
import { Box, Card, CardContent, Typography, TextField, Button, Link } from '@mui/material';
// import { Facebook, Twitter } from '@material-ui/icons';
import sxStyle from './Styel';
import { useLocation } from 'react-router-dom';

import { APIInstance } from '../../Services/Api';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authAction } from "../../Store/auth";
import { useNavigate } from 'react-router-dom';

function VerificationCodeComp(state) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const Myphone = location.state.phone;


    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];
    const [isCodeFilled, setIsCodeFilled] = useState(false);


    const myData = {
        code: code.join(""),
        phone: Myphone,
    }
    const SendCode = () => {
        console.log("Verification code:", code.join(""));
        console.log("Phone:", Myphone);
        console.log("myData:", myData);
        setIsCodeFilled(true);
        APIInstance.Post("verify_code", myData)
            .then((res) => {
                if (res.data.status) {
                    alert(res.data.message);
                    dispatch(authAction.login({ phone: myData.phone, token: res.data.token }));
                    console.log(res);
                    navigate("/");
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
                // alert(error);
            });
    }

    useEffect(() => {
        if (code[0] !== "" && code[1] !== "" && code[2] !== "" && code[3] !== "" && code[4] !== "" && code[5] !== "") {
            SendCode();
        } else {
            setIsCodeFilled(false);
        }
    }, [code]);

    const handleInputChange = (index, event) => {
        const newCode = [...code];
        newCode[index] = event.target.value;
        setCode(newCode);


        if (newCode[index] !== "" && index < 5) {
            refs[index + 1].current.focus();
        }


        if (index === 0 || newCode[index - 1] !== "") {
            setCode(newCode);
        }

        setCode(newCode);
    };
    const ReSendCodeHandler = () => { 
        //API ReSendCode
    }



    return (
        <Box sx={sxStyle.mainRoot} >

            <Card variant="outlined" sx={sxStyle.card}>
                <CardContent sx={sxStyle.cardContent}>

                    <Typography variant="h5" component="h2" sx={sxStyle.cardTitle} align="center">
                        Verification Code
                    </Typography>
                    <Typography variant="body2" component="p" sx={sxStyle.text} style={{}} align="center">

                        Please Check your SMS on <span style={{ fontWeight: "bold", fontSize: "15px" }}>{Myphone}</span> To Take 6 Digit Code To Continue.
                    </Typography>


                    <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>

                        {Array.from({ length: 6 }, (_, index) => (
                            <TextField
                                key={index}
                                fullWidth
                                required
                                margin="normal"
                                variant="standard"
                                size="large"
                                inputProps={{
                                    maxLength: 1,
                                    style: { textAlign: "center", fontSize: "24px", textDecoration: 'none' },
                                    disableUnderline: true

                                }}
                                sx={sxStyle.textField}
                                value={code[index]}
                                onChange={(e) => handleInputChange(index, e)}
                                autoFocus={index === 0}
                                inputRef={refs[index]}
                                style={{ width: "85px", backgroundColor: "#fff", margin: "10px", borderRadius: "10px", border: "none" }}
                            />
                        ))}
                        {isCodeFilled && <p>Verification code filled!</p>}




                        <Typography variant="body2" component="p" style={{ marginTop: "10px", marginBottom: "10px", textAlign: "-webkit-center" }} align="start">
                            <p style={{
                                color: "#fff",
                                textAlign: 'center',
                                width: "10%",
                                height: "70px",
                                borderRadius: "50%",
                                fontSize: "30px",
                                border: "2px solid #fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                146
                            </p>
                        </Typography>
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Typography variant="body2" component="p" style={{ marginTop: "10px", marginBottom: "10px" }} align="start">
                                <Link href="#" style={{ color: "#7E5D19", textDecoration: 'none' }} >
                                    Didn't recive a code ?
                                </Link>
                            </Typography>
                        </div>

                        <Button onClick={ReSendCodeHandler} variant="outlined" sx={sxStyle.btnOutlineWhite} size="large"  >
                            Resend
                        </Button>
                    </div>


                </CardContent>
            </Card>

        </Box>
    );
}

export default VerificationCodeComp;