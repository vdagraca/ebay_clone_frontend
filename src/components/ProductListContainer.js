import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import { loadProducts } from '../actions/products'

export class ProductListContainer extends Component {
    state = { products: null }

    componentDidMount() {
        this.props.loadProducts()
    }

    render() {
        return (
            <div>
                <ProductList
                    products={this.props.products}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
})


export default connect(mapStateToProps, { loadProducts })(ProductListContainer)
