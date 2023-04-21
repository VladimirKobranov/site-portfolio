import React from "react";
import {Link} from "@chakra-ui/react";
import Icon from '@mdi/react';

function MyButtonIcon(props) {
    return (
        <Link href={props.link} isExternal
              color='#9B9B9B' _hover={{color: '#2D2D2D'}}
        >
            <Icon path={props.iconname} size={props.size}/>
        </Link>
    )
}

export default MyButtonIcon;