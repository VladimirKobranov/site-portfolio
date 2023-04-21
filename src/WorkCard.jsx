import React from "react";
import {Box, HStack, Img, Text} from "@chakra-ui/react";
import styles from './WorkCard.module.css';
import MyLink from "./MyLink";

function WorkCard(props) {
    return (
        <Box>
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
        </Box>
    )
}

export default WorkCard