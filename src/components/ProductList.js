import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductList extends Component {

    renderProductList(product) {
        return <li key={product.name}><Link to={`/products/${product.id}`}>Title:{product.title} Price:{product.price}</Link></li>
    }

    render() {
        const { products } = this.props
        return (
            <div className="product-list">
                <h1>Product List</h1>
                {products === null && 'Loading...'}
                {products !== null &&
                    <ul>
                        {products.map(this.renderProductList)}
                    </ul>}
            </div>
        )
    }
}