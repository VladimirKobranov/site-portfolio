import React from 'react';
import './styles.css';
import {Box, Center, ChakraProvider, extendTheme, Grid, GridItem, Text,} from '@chakra-ui/react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BrowserView, MobileView} from 'react-device-detect';
import Icon from '@mdi/react';
import { mdiHammerWrench } from '@mdi/js';

const theme = extendTheme({
    fonts: {
        heading: '"Roboto", san-serif',
        body: '"Roboto", san-serif'
    },
});

function App() {
    const [index, setIndex] = React.useState(0);
    return (<ChakraProvider theme={theme}>
            <BrowserView>
                <Box m='20px'>
                    <Grid templateAreas={`"header header"
                  "main main"
                  "footer footer"`}>
                        <GridItem area={'header'}>
                            <Header callback={setIndex}/>
                        </GridItem>
                        <GridItem area={'main'}>
                            <Main number={index}/>
                        </GridItem>
                        <GridItem area={'footer'}>
                            <Footer/>
                        </GridItem>
                    </Grid>
                </Box>
            </BrowserView>
            <MobileView>
                <Center>
                    <Text>
                        Under construction
                    </Text>
                    <Icon path={mdiHammerWrench} size={1} />
                </Center>
            </MobileView>
        </ChakraProvider>
    )
}

export default App;
