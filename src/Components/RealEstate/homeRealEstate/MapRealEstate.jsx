import React from 'react'

const restaurantLongitude = 36.29049707915128;
const restaurantLatitude = 33.516590320685665;
const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4772.686413827387!2d${restaurantLongitude}!3d${restaurantLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e76eabb8a391%3A0xadd9ec786c30f4db!2sBee%20patisserie!5e0!3m2!1sen!2snl!4v1687786572516!5m2!1sen!2snl`;

const MapRealEstate = () => {
  return (
    <div>
   <iframe src={url} height="450" frameborder="0" style={{border:"1px solid #E58F9F", width : "100%", borderRadius :"20px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  )
}

export default MapRealEstate
