import React from "react";
import {Box, HStack, Img, Text, VStack} from "@chakra-ui/react";
import styles from './WorkCard.module.css';
import MyLink from "./MyLink";
import {BrowserView, MobileView} from "react-device-detect";

function WorkCard(props) {
    return (
        <Box>
            <BrowserView>
                <HStack>
                    <Box h='866px'>
                        <Box boxSize='433px'>
                            <Img
                                src={require('./works/images/' + props.imageName)}
                                alt={props.name}
                                className={styles.image}/>
                        </Box>
                    </Box>
                    <Box h='836px'>
                        <Text className={styles.h1} mb='20px'>
                            {props.name}
                        </Text>
                        <Text className={styles.textMain} mb='20px'>
                            {props.description}
                        </Text>
                        <Text className={styles.h2} mb='20px'>
                            stack:
                        </Text>
                        <Text className={styles.textTags} mb='20px'>
                            {props.stack}
                        </Text>
                        <MyLink
                            link={props.link}
                            name='link'
                        />
                    </Box>
                </HStack>
            </BrowserView>
            <MobileView>
                <VStack>
                    <Box h='auto' w='100%'>
                        <Text className={styles.h1Mobile} mb='20px'>
                            {props.name}
                        </Text>
                        <Text className={styles.textMainMobile} mb='20px'>
                            {props.description}
                        </Text>
                        <Text className={styles.h2Mobile} mb='20px'>
                            stack:
                        </Text>
                        <Text className={styles.textTagsMobile} mb='20px'>
                            {props.stack}
                        </Text>
                        <MyLink
                            link={props.link}
                            name='link'
                        />
                    </Box>
                    <Box h='auto'>
                        <Box boxSize='auto'>
                            <Img
                                src={require('./works/images/' + props.imageName)}
                                alt={props.name}
                                className={styles.imageMobile}/>
                        </Box>
                    </Box>
                </VStack>
            </MobileView>
        </Box>
    )
}

export default WorkCard