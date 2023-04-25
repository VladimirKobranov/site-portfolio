import React from "react";
import {Box, Center, Container, Flex, Text, VStack} from "@chakra-ui/react";
import MyButtonIcon from "./MyButtonIcon";
import {mdiArtstation, mdiFacebook, mdiGithub, mdiLinkedin} from '@mdi/js';
import {isBrowser} from "react-device-detect";

const d = new Date();
let year = d.getFullYear();

function Footer() {

    return (
        <Center>
            <Box w='auto' h='100px'>
                <VStack position='relative' top='44px'>
                    <Container w='auto' fontStyle='normal'
                               fontWeight='300'
                               fontSize={isBrowser ? '20px' : '15px'}
                               lineHeight={isBrowser ? '23px' : '18px'}
                               textAlign='center'
                               letterSpacing='0.0015em'
                               color='#D3D3D3'>
                        <Text textAlign='center'>
                            .vk {year} | All rights reserved
                        </Text>
                    </Container>
                    <Container w='auto' color='white'>
                        <Flex>
                            <MyButtonIcon
                                link='https://www.linkedin.com/in/kobranov/'
                                iconname={mdiLinkedin}
                                size={'36px'}
                            />
                            <MyButtonIcon
                                link='https://github.com/VladimirKobranov'
                                iconname={mdiGithub}
                                size={'36px'}
                            />
                            <MyButtonIcon
                                link='https://www.facebook.com/vladimir.kobranov/'
                                iconname={mdiFacebook}
                                size={'36px'}
                            />
                            <MyButtonIcon
                                link='https://www.artstation.com/vladimirkobranov'
                                iconname={mdiArtstation}
                                size={'36px'}
                            />
                        </Flex>

                    </Container>
                </VStack>
            </Box>
        </Center>
    )
}

export default Footer;