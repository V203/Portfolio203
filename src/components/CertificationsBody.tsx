import { Box, Stack, Text, Image, } from "@chakra-ui/react";
import { ICertificationProperties } from "../interfaces/Interfaces";
import { useContext } from "react";
import { certificationContext } from "../context/ContextValues";


const CertificationsBody = () => {

    const {setViewBool, setViewCert} = useContext(certificationContext)

    const certificationObj: Array<ICertificationProperties> = [
        {
            name: "MICT Certificate", imgUrl: "/itsdCert.png"
        },
        {
            name: "Solo Learn Certificate", imgUrl: "/vuyisaSolo.png"
        },
        {
            name: "AWD Certificate", imgUrl: "/awdcert.png"
        }];

    const certView = (certName: string) => {

        setViewBool(true);
        setViewCert(certificationObj.filter(el => el.name === certName)[0])

    }

    return (<>
        <Stack textAlign={"center"} fontWeight={"bolder"} h={"26em"} gap={"2em"} alignItems={"center"} flexFlow={"row"} justifyContent={"center"}>
            {certificationObj.map((el: ICertificationProperties) => <Box mt={"4em"} onClick={() => certView(el.name)}>
                <Text color={"blue.300"}>
                    {el.name}
                </Text>
                <Image className={"blueDop illuminate"} w={"auto"} h={"25em"} src={el.imgUrl} />           
            </Box>

            )}
        </Stack>
    </>
    )
}

export default CertificationsBody;