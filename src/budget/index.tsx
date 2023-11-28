import { Category, ChakraCard, Header, Card } from '../components'
import { MenuIcon, foods, naira, savings } from '../assets'
import { Box, Text } from '@chakra-ui/react'

const Budget = () => {
  return (
    <>
        <Header title='Budget' />
        <ChakraCard svg={naira} title='Monthly Budget' amount={120000} />
        <Card icon={MenuIcon} primaryText='Last Month' secondaryText='This Month' percentage={49} previousAmount={120000} newAmount={50000} />
        <Box ml="30px" mb="70px">
        <Text textAlign="left" lineHeight="24px" letterSpacing="-0.105px" fontStyle="normal" fontSize="21px" fontWeight={500}>Category Breakdown</Text>
        <Box overflowY="auto" overflowX="hidden" maxHeight="100px">
        <Category icon={foods} title='Food and drinks'  percentage={40} prevAmount={12000} newAmount={30000}  />
        <Category icon={savings} title='Savings'  percentage={20} prevAmount={12000} newAmount={30000}  />
        </Box>
        </Box>
    </>
  )
}

export default Budget