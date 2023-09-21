import { FormControl, FormControlLabel, FormGroup, FormLabel, Typography, Checkbox, TextField, MenuItem, Button  } from '@mui/material'
import React, { useState } from 'react'

const BuyFilterRealEstate = () => {

    const [category, setCategory] = useState([])

    const handleCheckedChange = (e) => {
        const index = category.indexOf(e.target.value)
        if(index === -1){
            setCategory([...category, e.target.value])
        }else{
            setCategory(category.filter((cat) => cat !== e.target.value))
        }
    }

    // price variable 
    const [minPrice, setMinPrice] = useState("")

    const handleMinChange = (e) => {
        setMinPrice(e.target.value)
    }

    const [maxPrice, setMaxPrice] = useState("")

    const handleMaxChange = (e) => {
        setMaxPrice(e.target.value)
    }

    console.log("minPrice", minPrice, "maxPrice", maxPrice)

    // bedroom variable 
    const [minBedroom, setMinBedroom] = useState("")

    const handleMinBedroom = (e) => {
        setMinBedroom(e.target.value)
    }

    const [maxBedroom, setMaxBedroom] = useState("")

    const handleMaxBedroom = (e) => {
        setMaxBedroom(e.target.value)
    }

    console.log("minBedroom", minBedroom, "maxBedroom", maxBedroom)

    {/* bathroom section  */}

    const [bathroom, setBathrrom] = useState("")

    const handleBathroomChange = (e) => {
        setBathrrom(e.target.value)
    }

    console.log(bathroom)

    {/* carspaces section  */}


    const[carSpaces, setCarSpaces] = useState("")

    const handleCarSpaces = (e) => {
        setCarSpaces(e.target.value)
    }


    console.log("carSpaces", carSpaces)

    // land size section 
    const [minLandSize, setMinLandSize] = useState("")

    const handleMinLandSize = (e) => {
        setMinLandSize(e.target.value)
    }

    const [maxLandSize, setMaxLandSize] = useState("")

    const handleMaxLandSize = (e) => {
        setMaxLandSize(e.target.value)
    }

    console.log("minLandSize", minLandSize, "maxLandSize", maxLandSize)

    // outdoor feature 

    const [outdoorFeature, setOutdoorFeature] = useState([])

    const handleoutdoorFeature = (e) => {
        const index = outdoorFeature.indexOf(e.target.value)
        if(index === -1){
            setOutdoorFeature([...outdoorFeature, e.target.value])
        }else{
            setOutdoorFeature(outdoorFeature.filter((out) => out !== e.target.value))
        }
    }

    console.log(outdoorFeature)


    // keywords 

    const [keywords, setKeywords] = useState("")

    const handleKeywords = (e) => {
        setKeywords(e.target.value)
    }


    console.log(keywords)

    const handleClearFilter = () => {
        setCategory([])
        setMinPrice("")
        setMaxPrice("")
        setMinBedroom("")
        setMaxBedroom("")
        setBathrrom("")
        setCarSpaces("")
        setMinLandSize("")
        setMaxLandSize("")
        setOutdoorFeature([])
        setKeywords("")
    }






  return (
    <>
        <FormControl sx={{width: "100%"}}>
            <FormLabel sx={{textAlign: "center", fontWeight: "bold"}}>Category</FormLabel>
            <div className='flex justify-between items-start ' style={{borderBottom: "2px solid #eeeeee"}}>
                <FormGroup>
                    <FormControlLabel 
                    sx={{flexBasis: "40%"}}
                    label="Rent"
                    value="rent"
                    control={<Checkbox  checked={category.includes("rent")} onChange={handleCheckedChange} />}
                    />
                    <FormControlLabel 
                    sx={{flexBasis: "40%"}}
                    label="Buy"
                    value="buy"
                    control={<Checkbox  checked={category.includes("buy")} onChange={handleCheckedChange} />}
                    />
                    <FormControlLabel 
                    label="Sale"
                    value="sale"
                    control={<Checkbox  checked={category.includes("sale")} onChange={handleCheckedChange} />}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel 
                    label="Farms"
                    value="farms"
                    control={<Checkbox  checked={category.includes("farms")} onChange={handleCheckedChange} />}
                    />
                    <FormControlLabel 
                    label="Chalet"
                    value="chalet"
                    control={<Checkbox  checked={category.includes("chalet")} onChange={handleCheckedChange} />}
                    />
                </FormGroup>
            </div>
            <div >
                {/* price section  */}
                <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Price</FormLabel>
                <div className='flex justify-between items-center flex-wrap' style={{borderBottom: "2px solid #eeeeee", padding: "20px 0"}}>
                    <div style={{flexBasis: "48%"}}>
                        <FormLabel>Min</FormLabel>
                        <TextField label="Select main price" value={minPrice} onChange={handleMinChange} select fullWidth>
                            <MenuItem value="10000$">10000$</MenuItem>
                            <MenuItem value="50000$">50000$</MenuItem>
                            <MenuItem value="100000$">100000$</MenuItem>
                            <MenuItem value="200000$">200000$</MenuItem>
                            <MenuItem value="500000$">500000$</MenuItem>
                            <MenuItem value="1000000$">1000000$</MenuItem>
                            <MenuItem value="2000000$">2000000$</MenuItem>
                        </TextField>
                    </div>
                    <div style={{flexBasis: "48%"}}>
                        <FormLabel>Max</FormLabel>
                        <TextField label="Select max price" value={maxPrice} onChange={handleMaxChange} select fullWidth>
                            <MenuItem value="10000$">10000$</MenuItem>
                            <MenuItem value="50000$">50000$</MenuItem>
                            <MenuItem value="100000$">100000$</MenuItem>
                            <MenuItem value="200000$">200000$</MenuItem>
                            <MenuItem value="500000$">500000$</MenuItem>
                            <MenuItem value="1000000$">1000000$</MenuItem>
                            <MenuItem value="2000000$">2000000$</MenuItem>
                        </TextField>
                    </div>
                </div>
                {/* bedroom section  */}
                  <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Bedroom</FormLabel>
                <div className='flex justify-between items-center flex-wrap' style={{borderBottom: "2px solid #eeeeee", padding: "20px 0"}}>
                    <div style={{flexBasis: "48%"}}>
                        <FormLabel>Min</FormLabel>
                        <TextField label="Select main price" value={minBedroom} onChange={handleMinBedroom} select fullWidth>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </TextField>
                    </div>
                    <div style={{flexBasis: "48%"}}>
                        <FormLabel>Max</FormLabel>
                        <TextField label="Select max price" value={maxBedroom} onChange={handleMaxBedroom} select fullWidth>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </TextField>
                    </div>
                </div>
                {/* bathroom section  */}
                <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Bathroom</FormLabel>
                <div className='flex justify-between items-center flex-wrap' style={{borderBottom: "2px solid #eeeeee", padding: "20px 0"}}>
                    <div style={{flexBasis: "48%"}}>
                        <TextField label="Select Bathroom Number" value={bathroom} onChange={handleBathroomChange} select fullWidth>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </TextField>
                    </div>
                </div>

                {/* carspaces section  */}
                <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Car Spaces</FormLabel>
                <div className='flex justify-between items-center flex-wrap' style={{borderBottom: "2px solid #eeeeee", padding: "20px 0"}}>
                    <div style={{flexBasis: "48%"}}>
                        <TextField label="Select Car Spaces Number" value={carSpaces} onChange={handleCarSpaces} select fullWidth>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </TextField>
                    </div>
                </div>
                {/* land size section  */}
                <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Land Size</FormLabel>
                <div className='flex justify-between items-center flex-wrap' style={{borderBottom: "2px solid #eeeeee", padding: "20px 0"}}>
                    <div style={{flexBasis: "48%"}}>
                        <FormLabel>Min</FormLabel>
                        <TextField label="Select main Size" value={minLandSize} onChange={handleMinLandSize} select fullWidth>
                            <MenuItem value={50}>50 &#13217;</MenuItem>
                            <MenuItem value={75}>75 &#13217;</MenuItem>
                            <MenuItem value={100}>100 &#13217;</MenuItem>
                            <MenuItem value={200}>200 &#13217;</MenuItem>
                            <MenuItem value={400}>400 &#13217;</MenuItem>
                        </TextField>
                    </div>
                    <div style={{flexBasis: "48%"}}>
                        <FormLabel>Max</FormLabel>
                        <TextField label="Select max Size" value={maxLandSize} onChange={handleMaxLandSize} select fullWidth>
                            <MenuItem value={100}>100 &#13217;</MenuItem>
                            <MenuItem value={200}>200 &#13217;</MenuItem>
                            <MenuItem value={500}>500 &#13217;</MenuItem>
                            <MenuItem value={1000}>1000 &#13217;</MenuItem>
                            <MenuItem value={2000}>2000 &#13217;</MenuItem>
                        </TextField>
                    </div>
                </div>
                {/* outdoor feature */}
                <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Outdoor features</FormLabel>
                <div className='flex justify-between items-start ' style={{borderBottom: "2px solid #eeeeee", padding: "20px 0"}}>
                    <FormGroup>
                        <FormControlLabel 
                        sx={{flexBasis: "40%"}}
                        label="Swimming pool"
                        value="swimming pool"
                        control={<Checkbox  checked={outdoorFeature.includes("swimming pool")} onChange={handleoutdoorFeature} />}
                        />
                        <FormControlLabel 
                        sx={{flexBasis: "40%"}}
                        label="Garage"
                        value="garage"
                        control={<Checkbox  checked={outdoorFeature.includes("garage")} onChange={handleoutdoorFeature} />}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel 
                        label="Balcony"
                        value="balcony"
                        control={<Checkbox  checked={outdoorFeature.includes("balcony")} onChange={handleoutdoorFeature} />}
                        />
                        <FormControlLabel 
                        label="Outdoor area"
                        value="Outdoor area"
                        control={<Checkbox  checked={outdoorFeature.includes("Outdoor area")} onChange={handleoutdoorFeature} />}
                        />
                    </FormGroup>
                </div>
                {/* keyWords  */}
                <FormLabel sx={{textAlign: "center", marginTop: "30px", marginBottom: "20px", fontWeight: "bold", display: "block"}}>Keywords</FormLabel>
                <div className='flex justify-between items-center flex-wrap' style={{ padding: "20px 0"}}>
                    <div style={{flexBasis: "100%"}}>
                        <TextField value={keywords} onChange={handleKeywords} label="Air con, Pool, garage, solar, ensuite... " variant="outlined" sx={{width: "100%"}} />
                    </div>
                </div>

                <div className='flex justify-between items-center flex-wrap sticky top-0 bg-white bottom-0 p-6' style={{ zIndex: "9999999999", borderTop: "2px solid #eeeeee"}}>
                    <Button onClick={handleClearFilter}  variant='text' >Clear filter</Button>
                    <Button sx={{borderRadius: "20px"}} variant='contained' >Search</Button>
                </div>
            </div>
        </FormControl>
    </>
  )
}

export default BuyFilterRealEstate
