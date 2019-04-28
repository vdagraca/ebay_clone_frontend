import { PRODUCTS_FETCHED, PRODUCTS_CREATED } from '../actions/products'

export default (state = [], action) => {
    switch (action.type) {

        case PRODUCTS_FETCHED:
            return action.products
        case PRODUCTS_CREATED:
            return [...state, action.product]
        default:
            return state
    }
}
