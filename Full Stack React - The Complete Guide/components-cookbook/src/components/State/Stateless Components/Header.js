import React from "react";

const Header = function(props){
    return (
        <h1>{props.headerText}</h1>
    )
};

export default Header;

// Benefits of stateless components
// - Minimizing stateful components
// - Performance