export interface ISkills {
    name: string;
    level: number;
    radiant: number;
}

export interface ICertificationProperties {
    name: string,
    imgUrl: string,
}

export interface ICertContext {
     name: string, imgUrl: string, displayBool:boolean,viewBool:boolean,viewCert:string,setViewBool:void
}

export default interface IBadge {
    name: string,
    color:string,
}