import React, {useState} from "react";
import styles from './Contacts.module.css'
import {Box, Button, HStack, Input, Text, Textarea, useToast} from "@chakra-ui/react";
import {send} from 'emailjs-com';
import {isBrowser} from "react-device-detect";

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();
    const id = 'test-toast';
    const toastEmpty = useToast();
    const idEmpty = 'empty-toast';

    function sendFunction() {
        if (!name || !email || !message) {
            if (!toast.isActive(idEmpty)) {
                toastEmpty({
                    // idEmpty,
                    title: `One of inputs is empty`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } else {
            setName('');
            setEmail('');
            setMessage('');

            if (!toast.isActive(id)) {
                toast({
                    // id,
                    title: 'Message sent.',
                    description: " I'll respond to you promptly.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    colorScheme: 'gray',
                })
            }

            send(
                'service_chojtpa',
                'template_cc698r8',
                {name, email, message},
                '4WCIsiTE3GxivqjgB'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    }

    return (
        <Box className={styles.main} h={isBrowser ? '91vh' : '91vh'}>
            <Text className={isBrowser ? styles.h1 : styles.h1Mobile}>
                Contacts
            </Text>
            <Text className={isBrowser ? styles.textMain : styles.textMainMobile}>
                I'm interested in talking with enthusiastic individuals who want to improve the user experience and
                interface design of their product. To initiate the conversation, kindly complete the form provided below
                and share some details about your project. I'll respond to you promptly.
            </Text>
            <Box>
                <HStack className={isBrowser ? styles.h2 : styles.h2Mobile} mb='20px'>
                    <Text
                        width={isBrowser ? '441px' : '50%'}
                    >
                        name
                    </Text>
                    <Text
                        width={isBrowser ? '441px' : '50%'}
                    >
                        email
                    </Text>
                </HStack>
                <HStack className={styles.inputNameMail} mb='20px'>
                    <Input variant='filled'
                           placeholder='name' value={name}
                           size='md'
                           width={isBrowser ? '441px' : '50%'}
                           borderRadius='2px'
                           textAlign='right' bg='#F5F5F5' color='#6A6A6A'
                           _placeholder={{opacity: 1.0, color: 'white'}}
                           focusBorderColor='#F5F5F5'
                           _hover={{backgroundColor: "#F5F5F5"}}
                           _focus={{backgroundColor: "#F5F5F5"}}
                           onChange={event => setName(event.target.value)}
                    />
                    <Input variant='filled'
                           placeholder='email' value={email}
                           size='md'
                           width={isBrowser ? '441px' : '50%'}
                           borderRadius='2px'
                           textAlign='right' bg='#F5F5F5' color='#6A6A6A'
                           _placeholder={{opacity: 1.0, color: 'white'}}
                           focusBorderColor='#F5F5F5'
                           _hover={{backgroundColor: "#F5F5F5"}}
                           _focus={{backgroundColor: "#F5F5F5"}}
                           onChange={event => setEmail(event.target.value)}
                    />
                </HStack>
                <Text className={styles.h2} mb='20px'>
                    message
                </Text>
                <Textarea
                    placeholder='tell me about your concerns'
                    value={message} size='md'
                    width={isBrowser ? '866px' : '100%'}
                    height='200px' borderRadius='2px'
                    textAlign='right'
                    mb='20px'
                    bg='#F5F5F5' color='#6A6A6A'
                    _placeholder={{opacity: 1.0, color: 'white'}}
                    resize='none'
                    focusBorderColor='#F5F5F5'
                    _hover={{backgroundColor: "#F5F5F5"}}
                    onChange={event => setMessage(event.target.value)}
                />
                <Button className={styles.button}
                        colorScheme='teal' variant='ghost' color='#6A6A6A' fontWeight='400'
                        fontSize={isBrowser ? '28px' : '25px'}
                        bgColor='white'
                        _active={{fontWeight: '700', color: '#2D2D2D'}}
                        _hover={{fontWeight: '700', color: '#2D2D2D'}}
                        onClick={() => sendFunction()}
                >
                    send
                </Button>
            </Box>
        </Box>
    )
}

export default Contacts;