import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, Box, Spacer, Text } from '@chakra-ui/react'

const CustomTabs = () => {
    return (
        <Container>
            <Box border={'2px solid #ddd'} my={'50px'} borderRadius={'12px'}>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab _selected={{ color: 'white', bg: 'green.500' }} px={'40px'} borderRadius={'10px'}>Tab 1</Tab>
                        <Spacer />
                        <Tab _selected={{ color: 'white', bg: 'green.500' }} px={'40px'} borderRadius={'10px'}>Tab 2</Tab>
                        <Spacer />
                        <Tab _selected={{ color: 'white', bg: 'green.500' }} px={'40px'} borderRadius={'10px'}>Tab 3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text textAlign={'center'} py={'50px'}> Tab 1 </Text>
                        </TabPanel>
                        <TabPanel>
                            <Text textAlign={'center'} py={'50px'}> Tab 2 </Text>
                        </TabPanel>
                        <TabPanel>
                            <Text textAlign={'center'} py={'50px'}> Tab 3 </Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default CustomTabs
