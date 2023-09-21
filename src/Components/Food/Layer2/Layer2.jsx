import { useNavigate } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import { Button } from "@mui/material";
import CardCarousel from "./CardCarousel";

import { APIInstance } from '../../../Services/Api';
import { useEffect, useState } from 'react';

const Layer2 = () => {
    const navigate = useNavigate();
    const [shopHasDelivery, setShopHasDelivery] = useState([]);
    const [availableNow, setAvailableNow] = useState([]);
    const [availableName, setAvailableName] = useState([]);
    const [deliveryName, setDeliveryName] = useState([]);
    const [noAvailableMessage, setNoAvailableMessage] = useState("");
    const [noDeliveryMessage, setNoDeliveryMessage] = useState("");
    const [loder1, setLoder1] = useState(true);
    const [loder2, setLoder2] = useState(true);


    const getDataApi = (setterMessage, name, setter, setter2, lod) => {
        APIInstance.Get(name)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.status) {
                        setterMessage("");
                        setter(res.data.data);
                        setter2(res.data.name);
                        lod(false);
                    } else {
                        lod(false);
                        const errorMessage = res.data.message || "Connection Failed";
                        setterMessage(errorMessage);
                        throw new Error(errorMessage);
                    }
                } else {
                    alert("Failed to fetch data. Please try again later.");
                    throw new Error("Failed to fetch data");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getDataApi(setNoAvailableMessage, "available_now", setAvailableNow, setAvailableName, setLoder1);
    }, []);
    useEffect(() => {
        getDataApi(setNoDeliveryMessage, "shop_has_delivery", setShopHasDelivery, setDeliveryName, setLoder2);
    }, []);

    const MapHandler = () => {
        navigate("/map");
    };

    const FilterHandler = () => {
        navigate("/filter");
    };



    return (
        <>
            <div className="bg-[#261207] flex flex-col justify-center items-center md:p-16 lg:p-16 sm:p-0">
                <div className='mt-16'>
                    <Button onClick={MapHandler} style={{ borderRadius: '50%', border: '1px solid white', padding: '12px 16px', margin: '8px', color: 'white' }}>
                        <MapIcon /> <span className='ml-3' >Map</span>
                    </Button>
                    <Button onClick={FilterHandler} style={{ borderRadius: '50px', backgroundColor: 'white', color: '#686868', padding: '12px 24px', margin: '8px' }}>
                        Filter
                    </Button>
                </div>
                {!loder1 && !loder2 ? (
                    <>
                        <CardCarousel p={`Available For ${availableName} Now`} shopHasDelivery={availableNow} noAvailable={noAvailableMessage} />
                        <CardCarousel p={`Get it ${deliveryName}`} shopHasDelivery={shopHasDelivery} noAvailable={noDeliveryMessage} />
                    </>
                ) : null}

                <br />
            </div>
        </>
    );
};

export default Layer2;