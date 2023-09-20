import { Box, Button, Image, Stack } from "@chakra-ui/react"
import { useContext } from "react"
import { certificationContext } from "../context/ContextValues"
// import { ICertContext } from "../interfaces/Interfaces";

const ViewModal = (props: { imgUrl: string, displayBool: false }) => {
    const { viewBool, setViewBool } = useContext(certificationContext);

    const handleClose = () => {
        setViewBool(!viewBool)
    }

    return (
        <>
            <Stack className={"overLay"} zIndex={38} width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"} position={"absolute"} display={props.displayBool ? "flex" : "none"}>
                <Box opacity={1} zIndex={6}>
                    <Box bg={"#050317"}>
                    <Button onClick={handleClose} variant={"outline"} className="blueDop" color={"blue.300"} borderRadius={"5px"} position={"absolute"} >
                        Close
                    </Button>

                    </Box>
                    <Image w={"auto"} h={"40em"} src={`${props.imgUrl}`} />
                </Box>
            </Stack>
        </>
    )
}

export default ViewModal;