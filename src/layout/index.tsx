import React from "react"
import {Navigation} from "../components"
import {Container, Box} from "@chakra-ui/react"
import { Outlet } from 'react-router-dom'




const Layout = () => {
  
  return (
    <>
      <Container className='w-[375px] h-[818px] top-[-1012px] left-[-1947px]' boxSizing='border-box'>
        <Box className='flex flex-col justify-between w-full h-full overflow-hidden'>
        <Outlet />
         <Navigation />
        </Box>
        
      </Container>
    </>
  )
}

export default Layout