import {ADD_ITEM, DEL_ITEM} from "../types/cartType";

// For Add item Cart
export const addCart = (product) => {
    return {
        type: ADD_ITEM,
        payload: product
    }
}

// For Delete Item Cart
export const deleteCart = (product) => {
    return {
        type: DEL_ITEM,
        payload: product
    }
}