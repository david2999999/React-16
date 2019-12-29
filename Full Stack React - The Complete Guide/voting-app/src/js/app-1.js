import React from 'react';
import {Product} from "./app-2";

export class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                <Product/>
            </div>
        )
    }
}
