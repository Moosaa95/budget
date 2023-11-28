import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';


interface CardProps {
  svg: string;
  title: string;
  amount: number;
}

const ChakraCard: React.FC<CardProps> = ({ svg: svg, title, amount }) => {
  const formatAmount = (amount: number) => amount.toLocaleString();

  return (
    <Box ml="30px">
    <Flex  align="center" justify="" gap={2}>
        {/* <Icon size={24} /> */}
        <Box>
            <img src={svg} alt="" />
        </Box>
        <Text fontSize="14px" color="#707480" fontWeight={400} lineHeight="0%" letterSpacing="-0.07px" fontStyle="normal">{title}</Text>
      </Flex>
    <Box
      shadow="md"
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      textAlign="center"
      background="#fff"
      boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
      flexShrink="0"
      height="51px"
      width="315px"
      className='mx-30 mt-[calc((100vh-51px-158px-609px)/2)] mb-[calc((100vh-51px-158px-609px)/2)]'

    >
      <Box  pt="9px" pb="6px" pl="20px" pr="185px">
        <Text fontSize="28px" fontWeight="700" lineHeight="36px" letterSpacing="-1.4px" fontFamily="cursive" className='text-[#001233]'>
        ₦{formatAmount(amount)}
        </Text>
      </Box>
    </Box>
    </Box>
  );
};

export default ChakraCard;
