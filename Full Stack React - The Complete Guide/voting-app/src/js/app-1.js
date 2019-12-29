import React from 'react';
import {Product} from "./app-2";
import {products} from "../data/seed";

export class ProductList extends React.Component {
    render() {
        const product = products[0];
        return (
            <div className='ui unstackable items'>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submittedAvatarUrl={product.submittedAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        )
    }
}
