import React from 'react'
import './ProductDetails.css'


export default function ProductDetails(props) {

    const { product } = props
    return (
        <div>
            <h1>Product details</h1>
            <div className="product-details">
                <div>
                    <img style={{ height: 400 }} src={product.picture} alt={product.title} />
                    <br /><br />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <button onClick={props.goBack}>Go back</button>
                    <button onClick={props.onEdit}>Edit</button>
                </div>
                <div>
                    <p>€ {product.price}</p>
                    <p>Email:{product.email}</p>
                    <p>Phonenumber:{product.phonenumber}</p>
                </div>
            </div>
        </div>
    )
}
