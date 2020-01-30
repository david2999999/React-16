import React from "react";
import Article from "./Article";
import Container from "./Container";

const Newspaper = props => {
    return (
        <Container>
            <Article headline="An interesting Article">
                Content Here
            </Article>
        </Container>
    )
};

export default Newspaper;