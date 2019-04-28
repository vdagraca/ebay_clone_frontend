import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductDetails from './ProductDetails'
import ProductForm from './ProductForm'
import { loadDetails, updateProduct } from './../actions/products'

export class ProductDetailsContainer extends Component {
    state = {
        editMode: false,
        formValues: {}
    }

    componentDidMount() {
        this.props.loadDetails(Number(this.props.match.params.id))
    }

    goBack = () => {
        this.props.history.push('/')
    }

    editProduct = () => {

        const { product } = this.props
        this.setState({
            editMode: true,
            formValues: {
                title: product.title,
                description: product.description,
                picture: product.picture,
                price: product.price,
                email: product.email,
                phonenumber: product.phonenumber
            }
        }
        )
    }

    onSubmit = (product) => {
        console.log('onsubmit')
        product.preventDefault()
        this.setState({
            editMode: false
        })
        this.props.updateProduct(this.props.product.id, this.state.formValues)
    }

    onChange = (product) => {
        // update the formValues property with the new data from the input field
        this.setState({
            formValues: {
                ...this.state.formValues,
                [product.target.name]: product.target.value
            }
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <ProductDetails
                        product={this.props.product}
                        onEdit={this.editProduct}
                        goBack={this.goBack}
                    />}
                {this.state.editMode &&
                    <ProductForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state.formValues}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
})


export default connect(mapStateToProps, { loadDetails, updateProduct })(ProductDetailsContainer)
