import { easeIn, motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const Sparkles = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    position

    useEffect(() => {
        const maxX = 500; // Width of the moving div
        const maxY = 500 // Height of the moving div

        console.log(maxX);


        const intervalId = setInterval(() => {
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;


            setPosition({ x: newX, y: newY });
        }, 2160);

        return () => clearInterval(intervalId)
    }, [])

    const sparkleCount = () => {
        const ourArr = [12, 34, 5, 6, 7,34,5,6,6,7,7]
     return   ourArr.map((el: number) => (<motion.div   key={el} initial={{ x: Math.ceil(Math.random() * 2), y: Math.ceil(Math.random() * 1) }} animate={{ x: Math.ceil(Math.random() * 500), y: Math.ceil(Math.random() * 500) }} transition={{ duration: 15, repeatType: "loop", repeat: Infinity, easeIn }} style={{ position: "absolute", borderRadius: "50%", width: "5px", height: "5px", backgroundColor: "white" }}>

            <Box opacity={".1px"} zIndex={"-1"} position={"absolute"} w={"3px"} h={"3px"}>

            </Box>
        </motion.div>))

    }


    return  sparkleCount()
        
    
}

export default Sparkles