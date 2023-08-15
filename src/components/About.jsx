import {TfiGithub,TfiLinkedin} from "react-icons/tfi"
import {SiInstagram} from "react-icons/si"
import { Stack, VStack ,Avatar,Text, Box, HStack} from '@chakra-ui/react'
import React from 'react'
import aman from "../assets/WhatsApp Image 2023-08-15 at 21.43.52.jpg"

const About = () => {
  return (
    <Stack  justifyItems={'center'} >
     <VStack marginTop={'5'}>
      <Avatar  boxSize={"52"}  mt={["4", "0"]} src={aman} />
       <Box 
       alignItems={'center'}
       padding={['8','14']}
       w={['100%','60%']}
       
      >
       <Text 
      fontSize={'lg'}
      textAlign={'center'}
      letterSpacing={["unset","widest"]}
      >
      Hey! Myself Aman Singh . I'm a 4th Year Student Of Netaji Subhas University 
      of Technology , New Delhi . I have made this project using ReactJs . Here are my other handles ... stay tuned 👍  
      </Text>

      <HStack marginTop={['9','14']} 
       justifyContent={'center'} 
       spacing={'9'}
       > 
       
       <a href="https://github.com/amansingh0411">
        <TfiGithub  size={'30'} />
        </a>
        <a href="https://www.linkedin.com/in/aman-singh-b79070202/"> 
        <TfiLinkedin size={'30'}/>
        </a>
        <a href="https://instagram.com/amansingh0411?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
        <SiInstagram size={'30'} />
        </a>
      </HStack>
      </Box>
     </VStack>
    </Stack>
   
  )
}

export default About
