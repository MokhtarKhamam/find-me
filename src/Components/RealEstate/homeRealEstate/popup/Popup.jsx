import { TabContext, TabPanel } from '@mui/lab'
import { Button, Dialog, DialogTitle, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import BuyFilterRealEstate from './BuyFilterRealEstate'
import RentFilterRealEstate from './RentFilterRealEstate'
import SaleFilterRealEstate from './SaleFilterRealEstate'

const Popup = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false)
    }


    const [activtab, setActiveTab] = useState("0")

    const handleTabChange = (_, newValue) => {
        setActiveTab(newValue)
    }


    


  return (
    <div style={{width: "100%"}}>
        <Dialog open={open} onClose={handleClose} fullWidth >
            <DialogTitle sx={{textAlign: "center", borderBottom: "2px solid #eeeeee", position: "sticky", top: "0", zIndex: "999999999", backgroundColor: "#fff"}}>Filter</DialogTitle>
            <TabContext value={activtab} sx={{borderTop : "2px solid #eeeeee", width: "100%"}} >
            <Tabs value={activtab} onChange={handleTabChange} variant='scrollable' allowScrollButtonsMobile={true} sx={{width: "100%"}}>
                <Tab label="Buy" value="0" sx={{flexBasis: "33%"}}  />
                <Tab label="Rent" value="1" sx={{flexBasis: "33%"}} />
                <Tab label="Sale" value="2" sx={{flexBasis: "33%"}} />
            </Tabs>
            <TabPanel value='0' sx={{padding: "24px 24px 0 24px"}}>
                <BuyFilterRealEstate />
            </TabPanel>
            <TabPanel value='1'>
                <RentFilterRealEstate />
            </TabPanel>
            <TabPanel value='2'>
                <SaleFilterRealEstate />
            </TabPanel>
            </TabContext>
        </Dialog>
    </div>
  )
}

export default Popup
