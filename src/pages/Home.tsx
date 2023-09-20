import { Stack, VStack } from "@chakra-ui/react";
import Head from "../components/Head";
import HomeBody from "../components/HomeBody";
import { motion } from "framer-motion";


const Home = () => {
    return (
        <>
            <VStack >
                <Head />
                <Stack w={"100%"}>
                    <motion.div initial={"hidden"} animate={"show"}>
                        <HomeBody />
                    </motion.div>
                </Stack>
            </VStack>

        </>
    )
}

export default Home;