import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'

export default class ProductList extends Component {

    renderProductList(product) {
        return <li key={product.name}><Link to={`/products/${product.id}`} className="ListItem">
            <img style={{ height: 400 }} src={product.picture} alt={product.title} /><br />
            {product.title} <br />€ {product.price}</Link></li>
    }

    render() {
        const { products } = this.props
        return (
            <div className="product-list">
                <h1>Product List</h1>
                {products === null && 'Loading...'}
                {products !== null &&
                    <ul className={'List'}>
                        {products.map(this.renderProductList)}
                    </ul>}
            </div>
        )
    }
}