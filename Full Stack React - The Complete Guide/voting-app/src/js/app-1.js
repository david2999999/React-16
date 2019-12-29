import React from 'react';
import {Product} from "./app-2";
import {products} from "../data/seed";

export class ProductList extends React.Component {
    render() {
        const productComponents = products.map((product) => (
            <Product
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submittedAvatarUrl={product.submittedAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));

        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        )
    }
}
