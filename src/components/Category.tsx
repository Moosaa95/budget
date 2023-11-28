// import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

interface CategoryProps {
    title: string;
    percentage: number;
    prevAmount: number;
    newAmount: number;
    icon: string;
}

const Category = ({
    title,
    percentage,
    prevAmount,
    newAmount,
    icon,

}:CategoryProps) => {
    const formatAmount = (amount: number) => amount.toLocaleString();
  return (
    <Container ml="-15px">
        <Box width="320px" height="47px" flexShrink={0}>
            <Flex alignItems="center" justifyContent="space-between" mt="17px">
                <Flex>
                    <Box width="50px" height="30px" mr="10px">
                        <img src={icon} alt=""/>
                    </Box>
                    <Flex flexDirection="column" justifyContent="center">
                        <Text fontSize="14px" fontStyle="normal" lineHeight="24px" color="#001233" letterSpacing="-0.07px" fontWeight={500} mb="10px" >{title}</Text>
                        <Text fontSize="14px" fontStyle="normal" lineHeight={0} letterSpacing="-0.07px" fontWeight={400} color="#707480">{percentage}%</Text>
                    </Flex>
                </Flex>
                <Flex>
                <Text color="#001233">₦{formatAmount(newAmount)}</Text>/
                <Text color="#C1C4CD">₦{formatAmount(prevAmount)}</Text>
                </Flex>
            </Flex>
        </Box>

    </Container>
  )
}

export default Category