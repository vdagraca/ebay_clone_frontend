import { PRODUCT_DETAILS, EDIT_PRODUCT } from '../actions/products'

export default (state = [], action) => {
    switch (action.type) {
        case PRODUCT_DETAILS:
            return action.products
        case EDIT_PRODUCT:
            return action.products

        default:
            return state
    }
}