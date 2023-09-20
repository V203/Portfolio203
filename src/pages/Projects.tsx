import { VStack } from "@chakra-ui/react";
import Head from "../components/Head"
import ProjectsBody from "../components/ProjectsBody";


const Projects = () => {

    return (
        <>
            <Head />
        <VStack alignItems={"center"} justifyContent={"center"}>

            <ProjectsBody />
        </VStack>


        </>
    )
}

export default Projects;