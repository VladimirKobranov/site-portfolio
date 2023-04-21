import React, { useState } from "react";
import { Box, Flex, Grid, Spacer } from "@chakra-ui/react";
import MyButton from "./MyButton";

function Header({ callback }) {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const Buttons = [
        { text: "home", isActive: activeButtonIndex === 0 },
        { text: "works", isActive: activeButtonIndex === 1 },
        { text: "about", isActive: activeButtonIndex === 2 },
        { text: "contacts", isActive: activeButtonIndex === 3 },
    ];

    const handleButtonClick = (buttonIndex) => {
        setActiveButtonIndex(buttonIndex);
        callback(buttonIndex);
    };

    return (
        <Box w="100%" h="80px" color="white" alignContent="flex-end">
            <Flex>
                <Box w="100px" h="28px" position="absolute" left="0" top="52px" ml="100px">
                    <MyButton id="vk" name=".vk" />
                </Box>
                <Spacer />
                <Box
                    w="400px"
                    h="28px"
                    position="absolute"
                    top="52px"
                    right="120px"
                    mr="20px"
                    align="center"
                >
                    <Grid templateColumns="repeat(4, 1fr)" gap={0}>
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
