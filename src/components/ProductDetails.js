import React from 'react'

export default function ProductDetails(props) {

    const { product } = props
    return (
        <div>
            <li>Title:{product.title}</li>
            <li>Description:{product.description}</li>
            <br />
            <img style={{ height: 400 }} src={product.picture} alt={product.title} />
            <br /><br />
            <li>Price:{product.price}</li>
            <li>Email:{product.email}</li>
            <li>Phonenumber:{product.phonenumber}</li>
            <button onClick={props.goBack}>Go back</button>
            <button onClick={props.onEdit}>Edit</button>
        </div>
    )
}
