import { Box, Button, Flex, Heading, Link, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const MyNav = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Box pt={['20px', '30px', '50px', '64px']}>
        <Flex alignItems={"center"}>
          <Heading as={"h2"}  fontSize={['20px','24px']} color={'#000638'} lineHeight={'100%'} fontFamily={'fontmerriweather'} fontWeight={'900'} cursor={"pointer"}>Food Ninja</Heading>
          <Spacer />
          <UnorderedList transition={"all 400ms ease-in-out"} listStyleType={"none"} ms={"0"} display={"flex"} alignItems={"center"} gap={"20px"} justifyContent={['center', 'center']} flexDirection={['column', 'column', 'row']} position={['absolute', 'absolute', 'static']} top={show ? '0' : '-100vh'} left={'0'} h={['100vh', '100vh', 'auto']} w={['100%', '100%', 'auto']} bg={['white', 'white', 'transparent']} >
            <ListItem>
              <Link href='#' pos={"relative"} fontFamily={'fontroboto'} lineHeight={'100%'} color={'#605C59'} _after={{
                content: '""', bg: '#605C59', w: '0', h: '2px', pos: 'absolute', borderRadius: '5px', bottom: '-2px', left: '0',
                transition: "all 200ms ease-in-out",
              }} _hover={{ _after: { w: 'full' }, }}>Home
              </Link>
            </ListItem>
            <ListItem>
              <Link href='#' pos={"relative"} fontFamily={'fontroboto'} lineHeight={'100%'} color={'#605C59'} _after={{
                content: '""', bg: '#605C59', w: '0', h: '2px', pos: 'absolute', borderRadius: '5px', bottom: '-2px', left: '0',
                transition: "all 200ms ease-in-out",
              }} _hover={{ _after: { w: 'full' }, }}>About
              </Link>
            </ListItem>
            <ListItem>
              <Link href='#' pos={"relative"} fontFamily={'fontroboto'} lineHeight={'100%'} color={'#605C59'} _after={{
                content: '""', bg: '#605C59', w: '0', h: '2px', pos: 'absolute', borderRadius: '5px', bottom: '-2px', left: '0',
                transition: "all 200ms ease-in-out",
              }} _hover={{ _after: { w: 'full' }, }}>Blog
              </Link>
            </ListItem>
            <ListItem>
              <Button fontFamily={'fontroboto'} bg={"#283A61"} textColor={"white"} border={"1px solid #283A61"} borderRadius={"29px"} pb={"2px"}
                transition={"all 200ms ease-in-out "} _hover={{ color: "#283A61", bg: "white", border: "1px solid #283A61" }}>
                Log In
              </Button>
            </ListItem>
          </UnorderedList>
          <Box display={["block", "block", "none"]} zIndex={"111"} onClick={() => setShow(!show)}>{show ? <RxCross2 fontSize={35} /> : <RxHamburgerMenu fontSize={35} />}</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MyNav;
