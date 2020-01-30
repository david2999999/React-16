import React from "react";
import Choice from "./Choice";

const CREDIT_CARD = 'Credit Card';
const BIT_COIN = 'Bitcoin';

class Switch extends React.Component {
    state = {
        payMethod: BIT_COIN
    };

    select = (choice) => {
        return (evt) => {
            this.setState({
                payMethod: choice
            })
        };
    };

    render() {
        return (
            <div className='switch'>
                <Choice
                    onClick={this.select(CREDIT_CARD)}
                    active={this.state.payMethod === CREDIT_CARD}
                    label='Pay with Credit Card'
                />
                <Choice
                    onClick={this.select(BIT_COIN)}
                    active={this.state.payMethod === BIT_COIN}
                    label='Pay with Bitcoin'
                />
                Paying with: {this.state.payMethod}
            </div>
        )
    }
}

export default Switch;