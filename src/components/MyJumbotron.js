import React, { forwardRef } from "react";
import  {Jumbotron} from "reactstrap";
import colors from "./colors";

const MyJumbotron = forwardRef((props, ref) => (
    <div ref = {ref} {...props}><Jumbotron style={{
        padding: `0`,
    }}>{props.children}</Jumbotron></div>
));


export default MyJumbotron;