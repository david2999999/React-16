import React from 'react';
import {Product} from "./app-2";
import {products} from "../data/seed";

export class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.setState({
            products: products
        });
    }

    handleProductUpvote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1
                });
            } else {
                return product;
            }
        });

        this.setState({
            products: nextProducts
        });
    };

    render() {
        const sortedProducts = this.state.products.sort((a, b) => b.votes - a.votes);

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