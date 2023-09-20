import { ISkills } from "../interfaces/Interfaces";
import { Box, Stack, Text } from "@chakra-ui/react";


const Skills = () => {

    const skillsList: Array<ISkills> = [{ name: "HTML", level: 90, radiant: 20 }, { name: "Javascript", level: 91, radiant: 20 }, { name: "CSS", level: 80, radiant: 20 }, { name: "Typescript", level: 80, radiant: 20 }, { name: "React", level: 80, radiant: 20 }, { name: "Rest API's", level: 80, radiant: 20 }]




    return (
        <Box w={"50%"} >
            <Text fontSize={"3em"} textShadow={"6px 4px 2px  blue, 1px 1px 5px  white, 4px 4px 4px  blue"} textAlign={"center"} color={"blue.500"} m={0} p={0}>
                Skills
            </Text>
            {skillsList.map((el: ISkills) => {
                return <>

                    <Stack w={"100%"} p={".4em"} m={".3em"}>

                        <Text color="blue.500">
                            <span className="material-symbols-outlined">
                                {el.name}
                            </span>
                        </Text>

                        <Box w={"99%"} mx={".1em"}>
                            <Box borderRadius={"8px"} bg={"white"} boxShadow={"-3px -2px 14px white, 1px 1px 5px white, 1px 1px 5px white"} w={"100%"}>

                                <Box className={"blueDop3"} bg={"blue"} h={"1.0em"} width={`${el.level}%`}>

                                </Box>
                            </Box>

                        </Box>
                    </Stack>

                </>

            }

            )
            }
        </Box>

    )
}

export default Skills;
