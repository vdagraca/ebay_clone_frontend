import React, { Component } from 'react'
import ProductForm from './ProductForm'
import { connect } from 'react-redux';
import { createProduct } from '../actions/products'

export class ProductFormContainer extends Component {
    state = {
        title: '',
        description: '',
        picture: '',
        price: '',
        email: '',
        phonenumber: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.setState({
            title: '',
            description: '',
            picture: '',
            price: '',
            email: '',
            phonenumber: ''

        })
        this.props.createProduct(this.state)
    }

    render() {

        return (

            <div>
                <ProductForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state} />
            </div>
        )
    }
}

export default connect(null, { createProduct })(ProductFormContainer)
