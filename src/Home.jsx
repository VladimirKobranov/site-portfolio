import React from "react";
import {Box, Text} from "@chakra-ui/react";
import styles from "./Home.module.css";
import {isBrowser} from "react-device-detect";

function Home() {
    return (
        <Box className={styles.main} h={isBrowser ? '91vh' : '91vh'}>
            <Text className={isBrowser ? styles.h1 : styles.h1Mobile}>
                Greetings
            </Text>
            <Text className={isBrowser ? styles.h2 : styles.h2Mobile}>
                I'm Vlad - developer
            </Text>
            <Text className={isBrowser ? styles.textMain : styles.textMainMobile}>
                I'm glad you stopped by to take a look at my work.
                I have a passion for creating innovative and user-friendly software solutions.
                On this website, you'll find examples of my work, including web applications, mobile apps, and other
                software projects. I'm always looking for new and exciting opportunities to collaborate with other
                developers, designers, and entrepreneurs, so if you like what you see here, please don't hesitate to
                reach out and get in touch.
            </Text>
            <Text className={isBrowser ? styles.textMain : styles.textMainMobile}>
                Thank you for taking the time to visit my website, and I look forward to hearing from you soon!
            </Text>
        </Box>
    )
}

export default Home;