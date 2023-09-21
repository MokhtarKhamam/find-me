import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComp from './CardComp';
import './Card.css';


const CardCarousel = ({ p, shopHasDelivery, noAvailable }) => {
    const [myData, setMyData] = useState(shopHasDelivery);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMyData(shopHasDelivery);
        console.log(shopHasDelivery);
        setLoading(false);
    }, [shopHasDelivery]);

    const settings = {
        dots: true,
        customPaging: (i) => {
            return <button>{i + 1}</button>;
        },
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <>  <p className='text-[#F0A40B] mt-16 font-bold text-4xl'>{p}</p>
                {noAvailable !== "" && <p className='text-[#fff] mt-16 font-bold text-3xl'>{noAvailable}</p>}
                <div className='grid grid-cols-1 my-10'>
                    <div className='sm:col-span-1 md:col-span-2 lg:col-span-4 ml-6.5'>
                        <Slider {...settings}>
                            {myData.map((item) => (
                                <CardComp key={item.id} item={item} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </>
        </>
    );
};

export default CardCarousel;