import React from 'react';
import {Product} from "./app-2";
import {products} from "../data/seed";

export class ProductList extends React.Component {
    handleProductUpvote(productId) {
        console.log(productId + ' was upvoted');
    }

    render() {
        const sortedProducts = products.sort((a, b) => b.votes - a.votes);

        const productComponents = sortedProducts.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submittedAvatarUrl={product.submittedAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpvote}
            />
        ));

        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        )
    }
}