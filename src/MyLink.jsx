import React from "react";
import {Link, Text} from "@chakra-ui/react";
import styles from "./MyLink.module.css";
import {isBrowser} from "react-device-detect";

function MyLink(props) {
    return (
        <Link href={props.link} isExternal className={isBrowser? styles.link : styles.linkMobile}>
            <Text
                position='relative'
                top='0'
                right='0'
                fontStyle='normal'
                fontWeight='700'
                fontSize='32px'
                lineHeight='38px'
                letterSpacing='-0.015em'
                textTransform='lowercase'
                color='#9B9B9B'
                variant='link' h='38px' w='auto'
                bgColor='white'
                id={props.id}
                _hover={{color: '#2D2D2D'}}
            >
                {props.name}
            </Text>
        </Link>

    )
}

export default MyLink;