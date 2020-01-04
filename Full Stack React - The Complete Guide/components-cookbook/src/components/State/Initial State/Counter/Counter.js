import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue
        };
    }

    decrement = () => {
      this.setState(prevState => {
          return {
              value: prevState.value - 1
          };
      });
    };

    increment = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            }
        });
    };

    render() {
        return (
            <div style={counterStyle} key="counter">
                {this.state.value}
                <p>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </p>
            </div>
        );
    }
}

const counterStyle = {
    width: '50px',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    padding: '10px'
};

export default Counter;