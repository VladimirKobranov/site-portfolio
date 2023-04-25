import React from 'react';
import {Box, Center, Text} from "@chakra-ui/react";
import Home from "./Home";
import Works from "./Works";
import About from "./About";
import Contacts from "./Contacts";
import {isBrowser} from 'react-device-detect';

function Main({number}) {

    function ShowPage() {
        switch (number) {
            case 0:
                return <Home/>;
            case 1:
                return <Works/>;
            case 2:
                return <About/>;
            case 3:
                return <Contacts/>;
            default:
                return (
                    <Text>Default option</Text>
                )
        }
    }

    return (
        <Center>
            <Box
                w={isBrowser ? '882px' : 'auto'}
                h='90%'
                color='white' p='2'>
                {ShowPage({number})}
            </Box>
        </Center>
    )
}

export default Main;