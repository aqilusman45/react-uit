import React from "react";

import { Loader } from "../Loader";

export const WithLoader = (Component) =>{
    return function WithLoadingComponent({isLoading , ...props}){
    if  (!isLoading) return <Component {...props} /> ;
    return <Loader/>;
    }
}
