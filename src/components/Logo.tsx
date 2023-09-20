import {Text, Box, Stack } from "@chakra-ui/react";


const Logo = (props: { size: string,par:number }) => {
    console.log(props.par);

    // const loadTimeout = ()=> {
        
    //     setTimeout(()=> {props.par+= 10 } ,1000)
    //     console.log(props.par);
    // }
        
    return (

        <>
            <Stack>

                <Box mx={"auto"}  w={props.size} h={props.size} className={"logoStyle  blueDop2 glow"} zIndex={"40"}>

                    <Box color={"whitesmoke"} className={"rotScale"} position={"static"} fontSize={"5xl"}>

                        VN
                    </Box>
                    <Box className="shade">

                    </Box>

                </Box>
                {/* #fe5500, 1px 2px 3px inset white */}

                <Box my={".75em"} borderRadius={"7px"} mx={"auto"} bg={"blue"} w={"150px"} h={"1em"}>
                    <Box  h={"1em"} borderRadius={"inherit"} bg={"#fe5500"} boxShadow={"1px 2px 3px inset #fe5500, 1px 2px 3px inset white "} width={`${props.par}%`}>
                    </Box>
                            <Text fontFamily={"monospace"} color={"blue"}  textAlign={"center"} mx={"auto"}>
                                Loading {`${props.par}%`}
                            </Text>
                </Box>

            </Stack>

        </>
    )
}

export default Logo;