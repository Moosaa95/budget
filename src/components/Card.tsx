import   {FC} from 'react';
import { Box, Flex, Img, Text } from '@chakra-ui/react';

import CircularProgressBar from './Circular';
import { underline } from '../assets';

interface CardProps {
  primaryText: string;
  secondaryText: string;
  icon: string;
  percentage: number;
  newAmount: number;
  previousAmount: number;
  isPrimaryActive?: boolean; 
  isSecondaryActive?: boolean; 
}

const Card: FC<CardProps> = ({
  primaryText,
  secondaryText,
  icon,
  percentage,
  newAmount,
  previousAmount,
  isPrimaryActive = false,
  isSecondaryActive = true,
  
}) => {
  const formatAmount = (amount: number) => amount.toLocaleString();
  return (
    <Box mt="33px" ml="30px">
      <Flex alignItems="center" justifyContent="space-between" mb="33px">
        <Flex alignItems="" justifyContent="space-between">
        <Box>
        <Text color={isPrimaryActive ? '#0466C8' : '#707480'} fontSize="16px" fontStyle="normal" lineHeight={"30.5px"} fontWeight={400} letterSpacing={"-0.08px"} mr="30px">{primaryText}</Text>
        {isPrimaryActive && (<img src={underline} alt='' />)}

        </Box>
        <Box>
        <Text color={isSecondaryActive ? '#0466C8' : '#707480'} fontSize="16px" fontStyle="normal" lineHeight={"30.5px"} fontWeight={400} letterSpacing={"-0.08px"}>{secondaryText}</Text>
        {isSecondaryActive && (<img src={underline} alt='' />)}
        </Box>
        </Flex>
        <Box>
          <Img src={icon} alt='' />
        </Box>
      </Flex>
      <Box mb="21px">
        <CircularProgressBar progress={percentage} />
      </Box>
      {/* Additional components for displaying percentage, newAmount, and previousAmount */}
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text mb="11px">Amount spent so far</Text>
        <Flex alignItems="center">
        <Text color="#0466C8" fontFamily="" fontStyle="normal" fontWeight={400} lineHeight="30.5px" fontSize="16px" letterSpacing="-0.08px">₦{formatAmount(newAmount)}</Text>/
        <Text color="#67A2DC" fontFamily="" fontStyle="normal" fontWeight={400} lineHeight="30.5px" fontSize="16px" letterSpacing="-0.08px">₦{formatAmount(previousAmount)}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
