import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const EditBook = () => {
   const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()


    const bookObj = {
   
    book_name: "",
    author:"",
    no_of_chapters:""
    
  }

  const [Editdata,setEditdata] = useState(bookObj)


    const handleChange = (e) => {
    setEditdata({ ...Editdata, [e.target.name]: e.target.value })
}

const EditProduct=()=>{

  axios.get(`http://localhost:8080/books/${id}`)

    .then((res) => {
      setEditdata(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

}

useEffect(()=>{
  EditProduct()
},[id])


const handleSubmit = (e) => {
  e.preventDefault();
  if (id) {
    dispatch(editBook(id, Editdata));
    navigate("/")
  }
};


  return (
     <DIV>
      <h1 data-testid="book-id">Edit Book ID:{id} </h1>
      <input type="text" placeholder="Name" 
      name="book_name" value={Editdata.book_name}
      onChange={handleChange}
      data-testid="book-name"

       />
      <input type="text" placeholder="Author" 
      name="author" value={Editdata.author}
      onChange={handleChange} data-testid="book-author" />
      <input
        type="number"
        placeholder="Number of Chapter"
        name="no_of_chapters" value={Editdata.no_of_chapters}
      onChange={handleChange}
        data-testid="book-chapter"
      />
      <button data-testid="update-book" onClick={handleSubmit}>Update</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
