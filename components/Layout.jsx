import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

//children contain all children tags in a component
const Layout = ({children}) => { 
    return( 
        <>
            <Head>
                <title>DubaiEstate</title>
            </Head>
            <Box maxWidth="full-width" m="auto">
                <header>
                    <Navbar/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Box>  
        </>
    )
}

export default Layout;