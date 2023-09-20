import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
const SplashScreen = () => {

    const [timing, setTiming] = useState(0);
    const [isSplash, setIsSplash] = useState(true)

    useEffect(() => {
        if (timing !== 100) {
            setTimeout(() => setTiming(prev => prev += 10), 250)
        } else if(timing >= 100) {
            setIsSplash(false)
        }

    },[isSplash, timing])


    return (
        <Stack display={isSplash ? "flex" : "none"} backdropBlur={"2xl"} position={"absolute"} w={"100%"} h={"100%"} top={0} left={0} justifyContent={"center"} zIndex={"100"} alignItems={"center"} backdropFilter={"blur(12)"} bg={"blackAlpha.700"}>
            <motion.div>
                <Logo size="10em" par={timing} />
            </motion.div>
        </Stack>)
}

export default SplashScreen;