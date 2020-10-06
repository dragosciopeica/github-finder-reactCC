import React, {Fragment} from "react";
import spinner from "./spinner.gif"

const Spinner = () => <Fragment> <img src={spinner} alt="Loading..." style ={{ width:"200px", margin: "auto", display: "block"}}/> </Fragment>

// Am simplificat arrow functionul, am scos return () si { }

export default Spinner
    