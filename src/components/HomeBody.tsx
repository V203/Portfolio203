// import Skills from "./Skills";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";

import SplashScreen from "./Splash";


const HomeBody = () => {

    return (
        <>

            <Flex placeItems={"center"} flexFlow={"row"} p={".5em"} w={"100%"} >
                {/* className={"blueDop"}  className={"blueDop"}*/}
                <Text fontFamily={"impact"} fontSize={"4.5em"} p={".3em"} color={"blue.500"}>
                    Vuyisa Ndubela
                    <Text fontSize={"0.4em"} textAlign={"start"} color={"blue.200"}>
                        fullstack developer/UI-UX designer/Freelancer
                        {/* <hr /> */}
                    </Text>

                    <Text fontFamily={"sans-serif"} fontStyle={"normal"} textAlign={"match-parent"} w={"45%"} fontSize={".2em"} color={"white"}>
                        Programming and crafting websites ignite an immense passion within me. My curiosity thrives on exploring the
                        cutting-edge technologies shaping this dynamic industry. With every line of code, I dive into a world of endless
                        creativity, building digital experiences that leave a lasting impact. The ever-evolving nature of web design keeps
                        me on my toes, and I eagerly embrace each opportunity to push the boundaries of what's possible.
                    </Text>
                    <Button w={"7em"} className={"blueDop"} color={"blue.500"} p={".3em"} variant={"ghost"}>
                        About me
                    </Button>
                </Text>
                <Box borderRadius={"50%"} className={"blueDop"} w={"4em"} h={"4em"}>
                    <Image borderRadius={"50%"} h={"4em"} w={"4em"} src={"./portfolioIcon2.png"} />
                </Box>

            </Flex>
            

            <SplashScreen />



        </>

    )
}

export default HomeBody;