import IBadge from "../interfaces/Interfaces";
import { Badge } from "@chakra-ui/react";

const Badges = (props: { badges: Array<IBadge> }) => {

    return (
        <>
            {props.badges.map((el: IBadge) => <Badge key={el.name} alignItems={"center"} justifyContent={"center"} backgroundColor={el.color} color={"White"} m={".3em"}  borderRadius={"6px"} boxShadow={"1px 2px 3px inset white"} textShadow={"1px 2px 3px black"}>
                {el.name}
            </Badge>


            )}

        </>
    )


}


export default Badges;