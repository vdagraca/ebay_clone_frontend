import request from 'superagent'

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'
export const PRODUCTS_CREATED = 'PRODUCTS_CREATED'
export const PRODUCT_DETAILS = 'PRODUCT_DETAILS'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'

const baseUrl = 'https://ebayclone.herokuapp.com'

const productsFetched = products => ({
    type: PRODUCTS_FETCHED,
    products
})

export const loadProducts = () => (dispatch, getState) => {
    // when the state already contains products, we don't fetch them again
    if (getState().events) return

    // a GET /products request
    request(`${baseUrl}/products`)
        .then(response => {
            // dispatch an PRODUCTS_FETCHED action that contains the events
            dispatch(productsFetched(response.body.products))
        })
        .catch(console.error)
}

const productCreatedSuccess = product => ({
    type: PRODUCTS_CREATED,
    product
})

export const createProduct = (data) => (dispatch) => {
    request
        .post(`${baseUrl}/products`)
        .send(data)
        .then(response => {
            dispatch(productCreatedSuccess(response.body))
        })
        .catch(console.error)
}

const productDetailsFetched = (products) => ({
    type: PRODUCT_DETAILS,
    products
})

export const loadDetails = (id) => dispatch => {
    request
        .get(`${baseUrl}/products/${id}`)
        .then(response => {
            dispatch(productDetailsFetched(response.body))
        })
        .catch(console.error)
}

const editProductAction = (products) => ({
    type: EDIT_PRODUCT,
    products
})

export const updateProduct = (id, data) => dispatch => {
    console.log('updateProduct')
    request
        .put(`${baseUrl}/products/${id}`)
        .send(data)
        .then(response => dispatch(editProductAction(response.body)))
        .catch(console.error)
}
