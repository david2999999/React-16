import React from 'react';

export class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUpVote = () => {
        this.props.onVote(this.props.id);
    };

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} alt=""/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'/>
                            {this.props.votes}
                        </a>
                    </div>
                    <div className='description'>
                        <a href={this.props.url} style={{fontWeight:'bold'}}>
                            {this.props.title}
                        </a>
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