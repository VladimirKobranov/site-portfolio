import React from "react";
import styles from './About.module.css';
import {Box, Text} from "@chakra-ui/react";
import {isBrowser} from "react-device-detect";

function About() {
    return (
        <Box className={styles.main} h={isBrowser ? '91vh' : '91vh'}>
            <Text className={isBrowser ? styles.h1 : styles.h1Mobile}>
                identity
            </Text>
            <Text className={isBrowser ? styles.textMain : styles.textMainMobile}>
                I am a developer with a passion for creating
                efficient, user-friendly software solutions. My journey as a developer started several years ago. I was
                fascinated by how technology could make people's lives easier and decided to learn how to create
                software myself. Over the years, I have gained experience in various programming languages. As a
                developer, I enjoy taking on complex challenges and finding creative solutions to
                problems. I believe that attention to detail and a willingness to learn are crucial qualities for
                success in this field. My areas of expertise. I have worked on various projects , and I am always eager
                to take on new challenges. When I am not coding, I enjoy hobbies. I
                also enjoy staying up-to-date with the latest developments in the technology industry.
            </Text>
            <Text className={isBrowser ? styles.h2 : styles.h2Mobile}>
                passion
            </Text>
            <Text className={isBrowser ? styles.textSub : styles.textSubMobile}>
                Depending on what stage you are at with your business, your needs will be different. From an
                entrepreneur, to a start-up or established business, I have the skills and experience to help achieve
                what’s needed across all aspects of the design spectrum.
            </Text>
            <Text className={isBrowser ? styles.h2 : styles.h2Mobile}>
                stack
            </Text>
            <Text className={isBrowser ? styles.textTags : styles.textTagsMobile}>
                html; css; bootstrap; javascript; react; figma;
                unreal; unity ; c++ ; c#;
            </Text>
            <Text className={isBrowser ? styles.h2 : styles.h2Mobile}>
                interesting?
            </Text>
            <Text className={isBrowser ? styles.textMain : styles.textMainMobile}>
                I'm always looking to chat to passionate people who are looking make their product.
            </Text>
            <Text className={isBrowser ? styles.textMain : styles.textMainMobile}>
                Feel free to get in touch!
            </Text>
        </Box>
    )
}

export default About;