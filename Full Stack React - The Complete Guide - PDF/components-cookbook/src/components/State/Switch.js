import React from 'react';
import styles from './Switch.css';

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

    renderChoice = (choice) => {
        const cssClasses = ['choice'];

        if (this.state.payMethod === choice) {
            cssClasses.push(styles.active);
        }

        return (
            <div onClick={this.select(choice)}
                 className={cssClasses}>
                {choice}
            </div>
        )
    };

    render() {
        return (
            <div className='switch'>
                {this.renderChoice(CREDIT_CARD)}
                {this.renderChoice(BIT_COIN)}
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}

module.exports = Switch;