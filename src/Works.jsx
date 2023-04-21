import React, {useState} from "react";
import {Box, Button, Center, HStack, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import styles from "./Works.module.css";
import Icon from '@mdi/react';
import {mdiChevronDown, mdiChevronUp, mdiCircle} from '@mdi/js';
import WorkCard from "./WorkCard";
import dataWorks from "./works/dataWorks";

function Works() {
    const [worksIndex, setWorksIndex] = useState(0);

    function handleUpClick() {
        setWorksIndex(prevIndex => {
            if (prevIndex === 0) {
                return dataWorks.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    function handleDownClick() {
        setWorksIndex(prevIndex => {
            if (prevIndex === dataWorks.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }

    function createCard(dataWorks) {
        if (dataWorks.index === worksIndex) {
            return <WorkCard
                key={(Math.random() + 2).toString(36).substring(7)}
                name={dataWorks.name}
                description={dataWorks.description}
                stack={dataWorks.stack}
                link={dataWorks.link}
                imageName={dataWorks.imageName}
            />
        }
    }

    return (
        <Box className={styles.main}>
            <Text className={styles.h1} width='866px'>
                Works
            </Text>
            <SimpleGrid columns={2} width='866px' mb='20px'>
                {dataWorks.map((item, index) => createCard({...item, index}))}
                <Box width='64px' position='relative' right='-441px'>
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
            </SimpleGrid>
            <Box width='866px'>
                <Center>
                    <HStack color='black'>
                        {dataWorks.map((item, index) => (
                            <Button
                                key={index}
                                size='20px'
                                variant='unstyled'
                                onClick={() => setWorksIndex(index)}
                                _hover={{color: '#2D2D2D'}}
                            >
                                <Icon className={styles.dots}
                                    // path={index === worksIndex ? mdiCircle : mdiCircleOutline}
                                    path={mdiCircle}
                                    size='15px'
                                    color={index === worksIndex ? '#2D2D2D' : '#9B9B9B'}
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


