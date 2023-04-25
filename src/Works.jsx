import React, {useState} from "react";
import {Box, Button, Center, HStack, SimpleGrid, Text, VStack,} from "@chakra-ui/react";
import styles from "./Works.module.css";
import WorkCard from "./WorkCard";
import dataWorks from "./works/dataWorks";
import {BrowserView, isBrowser} from "react-device-detect";
import Icon from "@mdi/react";
import {mdiChevronDown, mdiChevronUp, mdiCircle} from "@mdi/js";
import {useSwipeable} from "react-swipeable";

function Works() {
    const [worksIndex, setWorksIndex] = useState(0);

    function handleUpClick() {
        setWorksIndex((prevIndex) => {
            if (prevIndex === 0) {
                return dataWorks.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    function handleDownClick() {
        setWorksIndex((prevIndex) => {
            if (prevIndex === dataWorks.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }

    function createCard(dataWorks) {
        if (dataWorks.index === worksIndex) {
            return (
                <WorkCard
                    key={(Math.random() + 2).toString(36).substring(7)}
                    name={dataWorks.name}
                    description={dataWorks.description}
                    stack={dataWorks.stack}
                    link={dataWorks.link}
                    imageName={dataWorks.imageName}
                />
            );
        }
    }

    const handlers = useSwipeable({
        onSwipedRight: () => handleUpClick(),
        onSwipedLeft: () => handleDownClick(),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });


    return (
        <Box
            className={styles.main} {...handlers}>
            <Text
                className={isBrowser ? styles.h1 : styles.h1Mobile}
                width={isBrowser ? "866px" : "100%"}
            >
                Works
            </Text>
            <SimpleGrid
                columns={isBrowser ? 2 : 1}
                width={isBrowser ? "866px" : "100%"}
                mb="20px"
            >
                {dataWorks.map((item, index) =>
                    createCard({...item, index})
                )}
                <BrowserView>
                    <Box width='64px' position='relative'
                         right={isBrowser ? '-441px' : '-100px'}>
                        <VStack className={styles.dots}>
                            <Box height='64px' width='64px' position='relative'>
                                <Button variant='link' color='#9B9B9B' _hover={{color: '#2D2D2D'}}
                                        onClick={handleUpClick}>
                                    <Icon path={mdiChevronUp} size={'64px'}/>
                                </Button>
                            </Box>
                            <Box height='64px' width='64px'>
                                <Button variant='link' color='#9B9B9B' _hover={{color: '#2D2D2D'}}
                                        onClick={handleDownClick}>
                                    <Icon path={mdiChevronDown} size={'64px'}/>
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </BrowserView>
            </SimpleGrid>
            <Box width={isBrowser ? "866px" : "100%"}>
                <Center>
                    <HStack color="black">
                        {dataWorks.map((item, index) => (
                            <Button
                                key={index}
                                size="20px"
                                variant="unstyled"
                                onClick={() => setWorksIndex(index)}
                                _hover={{color: "#2D2D2D"}}
                            >
                                <Icon
                                    className={styles.dots}
                                    path={mdiCircle}
                                    size="15px"
                                    color={index === worksIndex ? "#2D2D2D" : "#9B9B9B"}
                                />
                            </Button>
                        ))}
                    </HStack>
                </Center>
            </Box>
        </Box>

    )
}

export default Works;