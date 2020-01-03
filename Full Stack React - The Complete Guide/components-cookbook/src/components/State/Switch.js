import React from 'react';

const CREDIT_CARD = 'Credit-Card';
const BIT_COIN = 'Bitcoin';

class Switch extends React.Component {
    state = {
        payMethod: BIT_COIN
    };

    render() {
        return (
            <div className='switch'>
                <div className='choice'>Credit Card</div>
                <div className='choice'>BitCoin</div>
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}

module.exports = Switch;