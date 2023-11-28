import React from 'react';
import { Text, CircularProgress, CircularProgressLabel, Box, Center } from '@chakra-ui/react';

interface CircularProgressBarProps {
  progress: number; // Progress value (0 to 100)
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress }) => {
  // Ensure progress is within the valid range (0 to 100)
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <Center >
      <Box position="relative" width="150px" height="150px">
        <CircularProgress
          value={progress}
          size="120px"
          thickness="5px"
          color="#0466C8"
          trackColor="transparent"
        >
          <CircularProgressLabel>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="55" stroke="#0466C8" strokeOpacity="0.4" strokeWidth="10" />
            </svg>
          </CircularProgressLabel>
        </CircularProgress>
        <Text position="absolute" top={50} left={50} fontSize="20px" fontWeight="bold" color="#0466C8">
              {clampedProgress}%
        </Text>
      </Box>
    </Center>
  );
};

export default CircularProgressBar;
