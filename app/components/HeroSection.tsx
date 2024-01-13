import { Box, Container, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import MyNav from './common/MyNav'
import { SearchIcon } from './common/Icon'

const HeroSection = () => {
    return (
        <>
            <Container maxW={"1140px"} mx={"auto"} >
                <MyNav />
                <Box mt={'92px'}>
                    <Heading as={'h1'} fontSize={['34px','40px','48px']} textAlign={'center'} fontFamily={'fontmerriweather'} fontWeight={'900'} color={'#000638'} lineHeight={'100%'} mb={'10px'}>The Food Ninja Blog</Heading>
                    <Text as={'p'} textAlign={'center'} color={'#605C59'} lineHeight={'100%'} fontSize={'20px'} mb={'48px'}>A blog about food, experiences, and recipes. </Text>
                    <Stack mx={'auto'} pos={'relative'} maxW={'430px'} w={'100%'} border={'1px solid #DDD'} borderRadius={'5px'}>
                        <Input placeholder='Search for articles' _placeholder={{ fontFamily: 'fontmerriweather', color: '#5F5F5F', fontSize: '18px', lineHeight: '100%' }} h={'58px'} border={'none'} pe={'60px'} maxW={'430px'} w={'100%'} mx={'auto'} />
                        <Box pos={'absolute'} top={'50%'} right={'24px'} transform={'translateY(-50%)'}><SearchIcon /></Box>
                    </Stack>
                </Box>
            </Container >
        </>
    )
}

export default HeroSection
