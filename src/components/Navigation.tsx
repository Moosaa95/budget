import React from 'react';
import { Box, Flex, Text,  Stack, Image } from '@chakra-ui/react';
import { home, reports, budget, profile, chat } from '../assets';
import { Link as ReactRouterLink } from 'react-router-dom';
// import { IoPersonOutline, IoChatbubbleOutline, IoCameraOutline, IoSettingsOutline } from 'react-icons/io5';

interface MenuItem {
  name: string;
  icon: string;
  path: string;
}

const Navigation = () => {
  const menus: MenuItem[] = [
    { name: 'Home', icon: home, path: '/' },
    { name: 'Reports', icon: reports, path: '/reports' },
    { name: 'Chat', icon: chat, path: '/chat' },
    { name: 'Budget', icon: budget, path: '/budget' },
    { name: 'Profile', icon: profile, path: '/profile' },
  ];

  const [active, setActive] = React.useState<number>(3);

  return (
    <Flex
      width="376px"
      height={87}
      position="fixed"
      bottom={0}
      zIndex={1}
      backgroundColor="white"
      
    >
      <Stack direction="row" spacing={4} width="100%" justify="space-around">
        {menus.map((menu, index) => (
          <ReactRouterLink to={menu.path} key={index}>
          <Box
            key={index}
            onClick={() => setActive(index)}
            cursor="pointer"
            p={2}
            // borderBottom={active === index ? '2px solid green' : 'none'}
          >
            <Flex direction="column" align="center">
              {/* <img src={menu.icon} width="24px" height="24px" alt={menu.name}/> */}
              <Image src={menu.icon} width="24px" height="24px" alt={menu.name} />
              <Text fontSize="xs" mt={1} color={active === index ? '#001233' : '#707480'}>
                {menu.name}
              </Text>
            </Flex>
            {/* {active === index ? (<img src={underline} />) : ""} */}
          </Box>
          </ReactRouterLink>
        ))}
      </Stack>
    </Flex>
  );
};

export default Navigation;

   