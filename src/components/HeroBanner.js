import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
 

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position='relative' p='20px' >
        <Typography color="#FF2625" fontWeight="600" fontSize="25px" >Fitness Club</Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg: '45px', xs: "40px"}}} mb="22px" mt="30px" >Sweat, Smile <br /> and Repeat </Typography>
        <Typography mb={3} >Checkout the most effective Exercises</Typography>
        <Button href='#exercises' variant="contained" style={{backgroundColor: 'red', color: 'white'}}>Explore</Button>
        <Typography fontWeight={600} color='#ff2625' sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px" >Exercises</Typography>
        <img src={HeroBannerImage} alt='HeroBanner'  className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner;
