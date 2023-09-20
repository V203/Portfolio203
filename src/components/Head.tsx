
import { Box, Text, Container, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const Head = () => {

  return (
    <Container>

      
      <Box zIndex={"10"} boxShadow={"4px 3px 18px inset blue"} borderBottom={"1px blue solid"} position={"fixed"} backdropFilter={"blur(10px)"}
        bg={"blue"} color={"blue.500"} left={0} top={0} w={"100%"} fontSize={".7em"} >
          
        <HStack backdropFilter={"blur(10px)"} fontFamily={"heading"} fontWeight={"medium"} fontSize={"1.3em"} color={"blue.500"} spacing={"1em"}
          justifyContent={"center"} position={"fixed"} left={0} top={0} w={"100%"}
          borderBottom={"1px blue solid"} boxShadow={"0px 2px 9px inset blue"} textShadow={"0px 0px 8px  white.50%"} >
          
          <Box>
            <Link to={"/"}>
              <Text textDecoration={"underline"} >
                Home
              </Text>
            </Link>

          </Box>
          <Box>
            <Link to={"/aboutMe"}>
              <Text textDecoration={"underline"} >

                About Me
              </Text >
            </Link>

          </Box>

          <Box>
            <Link to={"/Certifications"}>
              <Text textDecoration={"underline"} >
                Certifications

              </Text>
            </Link>

          </Box>

          <Box>
            <Link to={"/projects"}>
              <Text textDecoration={"underline"} >

                Projects
              </Text>
            </Link>

          </Box>
        </HStack>

      </Box>

      
    </Container>

)

}

// bgGradient={"linear( #050317 45%, #fff 10%, #050317 45%)"


export default Head;