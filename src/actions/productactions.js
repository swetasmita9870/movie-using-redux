import { ActionTypes } from "../constants/action-type"
export const setProducts = (product) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product
    }
}
export const setSelectProduct = (selectedProduct) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: selectedProduct
    }
}