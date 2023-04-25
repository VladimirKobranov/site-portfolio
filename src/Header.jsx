import React, {useState} from "react";
import {Box, Flex, Grid, Spacer} from "@chakra-ui/react";
import MyButton from "./MyButton";
import {isBrowser} from 'react-device-detect';

function Header({callback}) {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const Buttons = [
        {text: "home", isActive: activeButtonIndex === 0},
        {text: "works", isActive: activeButtonIndex === 1},
        {text: "about", isActive: activeButtonIndex === 2},
        {text: "contacts", isActive: activeButtonIndex === 3},
    ];

    const handleButtonClick = (buttonIndex) => {
        setActiveButtonIndex(buttonIndex);
        callback(buttonIndex);
    };

    return (
        <Box w="100%"
             h={isBrowser ? "80px" : '50px'}
             color="white">
            <Flex>
                <Box w="100px" h="28px" position="absolute" left="0"
                     top={isBrowser ? "52px" : '20px'}
                     ml={isBrowser ? "100px" : '20px'}
                >
                    <MyButton id="vk" name=".vk"/>
                </Box>
                <Spacer/>
                <Box
                    w={isBrowser ? "400px" : 'auto'}
                    h="28px"
                    position="absolute"
                    top={isBrowser ? "52px" : '20px'}
                    right={isBrowser ? "120px" : "0"}
                    mr='20px'
                    align="center"
                >
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        gap={0}>
                        {Buttons.map((button, index) => (
                            <MyButton
                                key={index}
                                id={index}
                                name={button.text}
                                active={button.isActive}
                                onClick={() => handleButtonClick(index)}
                            />
                        ))}
                    </Grid>
                </Box>
            </Flex>
        </Box>
    );
}

export default Header;
