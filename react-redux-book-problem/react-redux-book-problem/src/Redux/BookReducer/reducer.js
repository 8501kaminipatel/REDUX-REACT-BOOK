import { GET_DATA_ERRORS, GET_DATA_REQUEST, GET_DATA_SUCCESS, PATCH_BOOK_FAILURE, PATCH_BOOK_REQUEST, PATCH_BOOK_SUCCESS } from "./actionTypes";



const initialState = {
    isLoading: false,
    isError: false,
    books: [],
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return { ...state, isLoading: true }
        case GET_DATA_SUCCESS:
            return { ...state, isLoading: false, data: action.payload }
        case GET_DATA_ERRORS:
            return { ...state, isError: action.payload }
        default:
            return state
    }
};


