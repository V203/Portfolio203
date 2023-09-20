import { Box, Image, VStack, Text, Divider, Button } from "@chakra-ui/react";
import Badges from "./Badges";

const ProjectsBody = () => {

    const openProject = (url:string) => window.open(url,"_blank");

    return (


        <>

            <VStack spacing={"3em"} flexGrow={"unset"} flexFlow={"row"} mt={"4em"} color={"blue.500"} px={".5em"} >
                <Box className={"blueDop3"} p={"1.3em"}  >
                    <Text textShadow={"6px 4px 2px  blue, 1px 1px 5px  white, 4px 4px 4px  blue"} textAlign={"start"} color={"blue.500"} fontSize={"2em"}>
                        Suga-rythm App
                    </Text>
                    <Image className="blueDop2" m={"0.6em"} w={"15em"} h={"10em"} src={"./sugarythmImg.png"} />
                    <Text p={".1em"} w={"18em"} color={"blue.500"}>
                        This App was design constructed using the React Typescript  frameworks and top of it all I used 3D models that were handcrafted by myself.
                    </Text>

                    <Badges badges={[{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "Green" }, { name: "Typescript", color: "Orange" }, { name: "ThreeJS", color: "magenta" }]} />
                    <Divider my={".2em"} color={"blue.500"} />
                    <Text fontFamily={"mono"} p={".3em"} textAlign={"start"} color={"blue.500"}>
                        Status: Complete
                    </Text>
                    <Divider my={".2em"} color={"blue.500"} />

                    <Button className={"blueDop"} color={"blue.500"} variant={"ghost"} boxShadow={"1px 1px 4px inset white"} onClick={()=> openProject("https://v203.github.io/sugar-rythm/")}>
                        <Text filter={"unset"} zIndex={"2"}>
                            View Project

                        </Text>
                    </Button>
                    <Button className={"blueDop"} color={"blue.500"} variant={"ghost"} boxShadow={"1px 1px 4px inset white"}  onClick={()=> openProject("https://github.com/V203/sugar-rythm/")}>
                        <Text filter={"unset"} zIndex={"2"}>
                            View Source

                        </Text>
                    </Button>
                </Box>

                <Box className={"blueDop3"} p={"1.3em"}  >
                    <Text textShadow={"6px 4px 2px  blue, 1px 1px 5px  white, 4px 4px 4px  blue"} textAlign={"start"} color={"blue.500"} fontSize={"2em"}>
                        Pizza Cave
                    </Text>
                    <Image className="blueDop2" m={"0.6em"} w={"15em"} h={"10em"} src={"./pizzaCaveApp.png"} />
                    <Text p={".1em"} w={"18em"} color={"blue.500"}>
                        This App was design constructed using the React Typescript  frameworks and top of it all I used 3D models that were handcrafted by myself.
                    </Text>

                    <Badges badges={[{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "Green" }, { name: "Axios", color: "purple" }]} />
                    <Divider my={".2em"} color={"blue.500"} />
                    <Text fontFamily={"mono"} p={".3em"} textAlign={"start"} color={"blue.500"}>
                        Status: Complete
                    </Text>
                    <Divider my={".2em"} color={"blue.500"} />
                    <Button className={"blueDop"} color={"blue.500"} variant={"ghost"} boxShadow={"1px 1px 4px inset white"} onClick={()=> openProject("https://v203.github.io/depo-app/")}>
                        <Text filter={"unset"} zIndex={"2"}>
                            View Project

                        </Text>
                    </Button>
                    <Button className={"blueDop"} color={"blue.500"} variant={"ghost"} boxShadow={"1px 1px 4px inset white"} onClick={()=> openProject("https://github.com/V203/depo-app") }>
                        <Text filter={"unset"} zIndex={"2"}>
                            View Source

                        </Text>
                    </Button>
                </Box>

                <Box className={"blueDop3"} p={"1.3em"} >
                    <Text textShadow={"6px 4px 2px  blue, 1px 1px 5px  white, 4px 4px 4px  blue"} textAlign={"start"} color={"blue.500"} fontSize={"2em"}>
                        Cosmetics App
                    </Text>
                    <Image className="blueDop2" m={"0.6em"} w={"15em"} h={"10em"} src={"./cosmeticImg.png"} />
                    <Text p={".1em"} w={"18em"} color={"blue.500"}>
                        This App was design constructed using the React Typescript  frameworks and top of it all I used 3D models that were handcrafted by myself.
                    </Text>

                    <Badges badges={[{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "Green" }, { name: "Superbase", color: "crimson" }]} />
                    <Divider my={".2em"} color={"blue.500"} />
                    <Text fontFamily={"mono"} p={".3em"} textAlign={"start"} color={"blue.500"}>
                        Status: In progress
                    </Text>
                    <Divider my={".2em"} color={"blue.500"} />
                    <Button className={"blueDop"} color={"blue.500"} variant={"ghost"} boxShadow={"1px 1px 4px inset white"}  onClick={()=> openProject("https://v203.github.io/804-cosmetics/")}>
                        <Text filter={"unset"} zIndex={"2"}>
                            View Project
                            
                        </Text>
                    </Button>

                    <Button className={"blueDop"} color={"blue.500"} variant={"ghost"} boxShadow={"1px 1px 4px inset white"} onClick={()=> openProject("https://github.com/V203/804-cosmetics/")}>
                        <Text filter={"unset"} zIndex={"2"}>
                            View Source

                        </Text>
                    </Button>
                </Box>


            </VStack>


        </>
    );


}


export default ProjectsBody;