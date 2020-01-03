import React from 'react';

const CREDIT_CARD = 'Credit-Card';
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
        }
    };

    render() {
        return (
            <div className='switch'>
                <div className='choice'
                    onClick={this.select(CREDIT_CARD)}>
                    Credit Card
                </div>
                <div className='choice'
                    onClick={this.select(BIT_COIN)}>
                    BitCoin
                </div>
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}

module.exports = Switch;