import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue
        };
    }
}

export default Counter;