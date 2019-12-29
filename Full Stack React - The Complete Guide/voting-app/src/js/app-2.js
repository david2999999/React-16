import React from 'react';

export class Product extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} alt=""/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <div>
                            <i className='large caret up icon'/>
                            {this.props.votes}
                        </div>
                    </div>
                    <div className='description'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image'
                             src={this.props.submittedAvatarUrl} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}