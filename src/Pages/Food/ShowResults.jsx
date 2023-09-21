import CardShowResults from "../../Components/Food/ShowResults/CardShowResults";
import Skeleton from '@mui/material/Skeleton';

import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";



const ShowResults = () => {
    const [loding, setLoding] = useState(true);
    const [respons, setRespons] = useState([]);
    const location = useLocation("");

    useEffect(() => {
        console.log(respons);
        setRespons(location.state.respons)
        setLoding(false);
    }, [location.state.respons, respons]);
    return (
        <div style={{ backgroundColor: "rgba(10, 10, 10, 0.08)" }}>
            <div className="justify-end items-end p-16" style={{ textAlign: "-webkit-center" }} >
                {loding ? (<Skeleton variant='text' animation="wave" width={200} />) :
                    (<p className='p12' >Results for "Amsterdam" in Amsterdam :</p>)}
            </div>

            {loding ? (
                <div
                    className="flex flex-row justify-center  p-1 "
                    style={{ flexWrap: 'wrap' }}
                >
                    <Skeleton variant='img' animation="wave" width={450} height={550} className={"m-16"} />
                    <Skeleton variant='img' animation="wave" width={450} height={550} className={"m-16"} />
                    <Skeleton variant='img' animation="wave" width={450} height={550} className={"m-16"} />
                    <Skeleton variant='img' animation="wave" width={450} height={550} className={"m-16"} />
                </div>
            ) : (

                <div
                    className="flex flex-row justify-center items-center p-1 "
                    style={{ flexWrap: 'wrap' }}
                >
                    {respons !== undefined && (
                        (respons).map((item) => (
                            <CardShowResults key={item.id} respons={item} />
                        ))
                    )}
                    {/* <CardShowResults />
                    <CardShowResults />
                    <CardShowResults />
                    <CardShowResults />
                    <CardShowResults /> */}

                </div>
            )}
        </div>
    );

}
export default ShowResults;