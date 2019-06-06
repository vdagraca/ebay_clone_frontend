import React from 'react'
import './ProductDetails.css'


export default function ProductDetails(props) {

    const { product } = props
    return (
        <div>
            <h2>{product.title}</h2>
            <div className="product-details">
                <div>
                    <img style={{ height: 400 }} src={product.picture} alt={product.title} />
                    <br /><br />
                    <p>Price:{product.price}</p>
                    <p>Email:{product.email}</p>
                    <p>Phonenumber:{product.phonenumber}</p>
                    <button onClick={props.goBack}>Go back</button>
                    <button onClick={props.onEdit}>Edit</button>
                </div>
                <div>
                    <h3>Description:</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}
