/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { ICertContext } from "../interfaces/Interfaces";

export const certificationContext = React.createContext<ICertContext | any>({
    displayBool: false, name: "", imgUrl: "",
    viewBool: false,
    viewCert: ""
    
})