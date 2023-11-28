import { Text } from '@chakra-ui/react';
import React from 'react'

type HeaderProps = {
    title: string;
  };
  

const Header:React.FC<HeaderProps>  = ({title}) => {
  return (
    <Text mb="28px" mt="64px" ml="30px" mr="24px" color="#001233" fontSize="28px" fontWeight={700} lineHeight="36px" letterSpacing="-1.4px" fontStyle="normal">
      {title}
    </Text>
  )
}

export default Header