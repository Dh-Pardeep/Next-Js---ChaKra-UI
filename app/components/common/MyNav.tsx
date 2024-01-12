import { Box, Button, Container, Flex, Heading, Link, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const MyNav = () => {
  return (
    <Box>
      <Container maxW={"1140px"} mx={"auto"} px={"4"} py={"3"}>
        <Flex alignItems={"center"}>
          <Heading as={"h2"} fontSize={['26px','30px','35px']} cursor={"pointer"}>Site Logo</Heading>
          <Spacer />
          <UnorderedList listStyleType={"none"} display={"flex"} alignItems={"center"} gap={"40px"}>
            <ListItem><Link href='#' pos={"relative"}
              _after={{
                content: '""',
                bg: 'black',
                w: '0',
                h: '2px',
                pos: 'absolute',
                borderRadius:'5px',
                bottom: '-2px',
                left: '0',
                transition: "all 200ms ease-in-out",
              }}
              _hover={{
                _after: { w: 'full' },
              }}>Home
            </Link>
            </ListItem>
            <ListItem><Link href='#' pos={"relative"}
              _after={{
                content: '""',
                bg: 'black',
                w: '0',
                h: '2px',
                pos: 'absolute',
                borderRadius:'5px',
                bottom: '-2px',
                left: '0',
                transition: "all 200ms ease-in-out",
              }}
              _hover={{
                _after: { w: 'full' },
              }}>Blog
            </Link>
            </ListItem>
            <ListItem><Link href='#' pos={"relative"}
              _after={{
                content: '""',
                bg: 'black',
                w: '0',
                h: '2px',
                pos: 'absolute',
                borderRadius:'5px',
                bottom: '-2px',
                left: '0',
                transition: "all 200ms ease-in-out",
              }}
              _hover={{
                _after: { w: 'full' },
              }}>About
            </Link>
            </ListItem>
            <ListItem><Link href='#' pos={"relative"}
              _after={{
                content: '""',
                bg: 'black',
                w: '0',
                h: '2px',
                pos: 'absolute',
                borderRadius:'5px',
                bottom: '-2px',
                left: '0',
                transition: "all 200ms ease-in-out",
              }}
              _hover={{
                _after: { w: 'full' },
              }}>Contact
            </Link>
            </ListItem>
            <Button
              bg={"black"}
              textColor={"white"}
              border={"1px solid black"}
              borderRadius={"10px"}
              pb={"2px"}
              transition={"all 200ms ease-in-out "}
              _hover={{ color: "black", bg: "white", border: "1px solid black" }}
            >
              Log In
            </Button>
          </UnorderedList>
        </Flex>
      </Container>
    </Box>
  );
};

export default MyNav;
