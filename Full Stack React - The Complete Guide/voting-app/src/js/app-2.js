import React from 'react';
import ImageAqua from '../images/products/image-aqua.jpg';
import Daniel from '../images/avatars/daniel.PNG';

export class Product extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={ImageAqua} alt=""/>
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <h3>Fort Knight</h3>
                        <p>Authentic renaissance actors, delivered in just two weeks</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image'
                             src={Daniel} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}