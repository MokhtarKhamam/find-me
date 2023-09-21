import React from 'react';

import Box from '@mui/material/Box';

import OrderComp from '../../Order/OrdreComp';

function Menu() {
  return (

    <Box sx={{ width: "100%" }}>
      <p className='pTages2 my-16 ' style={{ textAlign: "center" }}>French Food</p>
      <OrderComp />
    </Box >
  );
}

export default Menu;