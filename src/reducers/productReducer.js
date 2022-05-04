import { ActionTypes } from "../constants/action-type"

const initialState = {
    product:[],
    selectedMovie:[]
}

export const productReducer = ( state=initialState, {type,payload}) =>{
    switch (type){
        case ActionTypes.SET_PRODUCTS :
           
            return {
                ...state,
                product:payload
            }
        case ActionTypes.SELECTED_PRODUCTS :
            console.log(state,payload);
            const filterData = state.product.filter((movie) => movie.id === payload)
            console.log("filter",filterData);
            return {
                ...state,
                selectedMovie:filterData
            }
            default: 
            return state
    }
}