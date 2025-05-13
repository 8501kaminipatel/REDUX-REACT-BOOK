


const initialState={
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
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
