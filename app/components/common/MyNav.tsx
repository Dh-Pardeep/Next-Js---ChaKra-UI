import { Box, Button, Container, Flex, Heading, Link, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const MyNav = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Container maxW={"1140px"} mx={"auto"} px={"4"} py={"3"}>
        <Flex alignItems={"center"}>
          <Heading as={"h2"} fontSize={['26px', '30px', '35px']} cursor={"pointer"}>Site Logo</Heading>
          <Spacer />
          <UnorderedList transition={"all 400ms ease-in-out"} listStyleType={"none"} ms={"0"} display={"flex"} alignItems={"center"} gap={"40px"} justifyContent={['center', 'center']} flexDirection={['column', 'column', 'row']} position={['absolute', 'absolute', 'static']} top={show ? '0' : '-100vh'} left={'0'} h={['100vh', '100vh', 'auto']} w={['100%', '100%', 'auto']} bg={['red', 'red', 'transparent']} >
            <ListItem>
              <Link href='#' pos={"relative"} _after={{
                content: '""', bg: 'black', w: '0', h: '2px', pos: 'absolute', borderRadius: '5px', bottom: '-2px', left: '0',
                transition: "all 200ms ease-in-out",
              }} _hover={{ _after: { w: 'full' }, }}>Home
              </Link>
            </ListItem>
            <ListItem>
              <Link href='#' pos={"relative"} _after={{
                content: '""', bg: 'black', w: '0', h: '2px', pos: 'absolute', borderRadius: '5px', bottom: '-2px', left: '0',
                transition: "all 200ms ease-in-out",
              }} _hover={{ _after: { w: 'full' }, }}>About
              </Link>
            </ListItem>
            <ListItem>
              <Link href='#' pos={"relative"} _after={{
                content: '""', bg: 'black', w: '0', h: '2px', pos: 'absolute', borderRadius: '5px', bottom: '-2px', left: '0',
                transition: "all 200ms ease-in-out",
              }} _hover={{ _after: { w: 'full' }, }}>Blog
              </Link>
            </ListItem>
            <ListItem>
              <Button bg={"black"} textColor={"white"} border={"1px solid black"} borderRadius={"10px"} pb={"2px"}
                transition={"all 200ms ease-in-out "} _hover={{ color: "black", bg: "white", border: "1px solid black" }}>
                Log In
              </Button>
            </ListItem>
          </UnorderedList>
          <Box display={["block", "block", "none"]} zIndex={"111"} onClick={() => setShow(!show)}>{show ? <RxCross2 fontSize={35} /> : <RxHamburgerMenu fontSize={35} />}</Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default MyNav;
