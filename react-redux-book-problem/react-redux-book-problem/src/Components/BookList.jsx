import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BookCard } from "./BookCard";
import { getBooks } from "../Redux/BookReducer/action";

export const BookList = () => {

  const data = useSelector(state => state.book?.data || []);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getBooks());
  }, [])
  return (
    <div data-testid="book-list" className="book-list-container">
      {data.map((item) => (
        <BookCard
          key={item.id}
          {...item} />
      ))}
    </div>
  );
};
