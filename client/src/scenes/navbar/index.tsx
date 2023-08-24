import React from 'react'
import { useState } from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {Link} from 'react-router-dom'
import {Box,Typography,useTheme} from '@mui/material'
import FlexBetween from '@/Components/flexBetween'
type Props = {}

const Navbar = (props: Props) => {
    const {palette}=useTheme();
    const [selected,setSelected]=useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" padding="0.5rem 0rem" color={palette.grey[300]}>
      {/*LEFT SIDE*/}
      <FlexBetween  gap='0.75rem'>
      <MonetizationOnIcon sx={{ fontSize:"28px"}}/> 
      <Typography variant="h4" fontSize='16px'>RevInsight</Typography>
      </FlexBetween>
      {/*Right Side*/}
      <FlexBetween  gap="2rem">
        <Box sx={{"&:hover":{color:palette.primary[100]}}} fontSize='16px'>
            <Link to='/' onClick={()=>setSelected("dashboard")}
            style={{color:selected==="dashboard" ? "inherit":palette.grey[600],
            textDecoration:"inherit"}}>
            Dashboard
            </Link>
        </Box>
        <Box sx={{"&:hover":{color:palette.primary[100]}}} fontSize='16px'>
            <Link to='/predictions' onClick={()=>setSelected("predictions")}
            style={{color:selected==="predictions" ? "inherit":palette.grey[600],
            textDecoration:"inherit"}}>
            Prediction
            </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar