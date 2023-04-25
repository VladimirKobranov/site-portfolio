import React from "react";
import {Button} from "@chakra-ui/react";
import {isBrowser} from "react-device-detect";

function MyButton(props) {

    return (
        <Button
            fontStyle='normal'
            fontWeight='300'
            fontSize={isBrowser ? '24px' : '20px'}
            lineHeight='28px'
            textAlign='center'
            letterSpacing='-0.015em'
            textTransform='lowercase'
            color='#9B9B9B'
            variant='link' h='28px' w='auto'
            bgColor='white'
            isActive={props.active}
            id={props.id}
            onClick={props.onClick}
            _active={{fontWeight: '700', color: '#2D2D2D'}}
            _hover={{fontWeight: '700', color: '#2D2D2D'}}
        >
            {props.name}
        </Button>
    )
}

export default MyButton;