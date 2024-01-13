import React from 'react';
import {
    Accordion as ChakraAccordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
} from '@chakra-ui/react';

const CustomAccordion = () => {
    return (
        <>
            <Container mt={'48px'} maxW={'1140px'}>
                <Box maxW={'750px'} mx={'auto'}>
                    <ChakraAccordion w='100%' defaultIndex={[0]} allowMultiple border={'2px solid #ddd'} p={'20px'} borderRadius={'20px'}>
                        <AccordionItem border={'2px solid  #DDD'} borderRadius={'10px'}>
                            <AccordionButton >
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem mt={'4'} border={'2px solid  #DDD'} borderRadius={'10px'}>
                            <AccordionButton border={'none'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </ChakraAccordion>
                </Box>
            </Container>
        </>
    );
};

export default CustomAccordion;
