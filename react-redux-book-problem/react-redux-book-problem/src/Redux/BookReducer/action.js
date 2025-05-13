import axios from "axios";
import { GET_DATA_ERRORS, GET_DATA_SUCCESS, PATCH_BOOK_FAILURE, PATCH_BOOK_REQUEST, PATCH_BOOK_SUCCESS } from "./actionTypes";




export const getBooks = (paramObj) => (dispatch) => {
  // Write logic here
  axios.get(' http://localhost:8080/books',{ params: paramObj })
    .then((res) => {
      console.log(res.data)
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data })

    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: GET_DATA_ERRORS, payload: err?.message })
    })
};

export const editBook = (id,Editdata)=>(dispatch) => {
  // Write logic here

  axios.patch(`http://localhost:8080/books/${id}`,Editdata)
  .then((res)=>{
    alert(" Update Successfully")
    getBooks(dispatch)
  })
  .catch((err)=>console.log(err))


};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
