import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'

export default class ProductList extends Component {

    renderProductList(product) {
        return <Link to={`/products/${product.id}`} ><li key={product.name} className="ListItem">
            <img style={{ height: 400 }} src={product.picture} alt={product.title} />
            <div className="ItemText">
                <h4>{product.title} </h4>
                <p>€ {product.price}</p>
            </div>
        </li></Link>
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