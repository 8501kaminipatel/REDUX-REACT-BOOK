import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BookCard } from "./BookCard";
import { getBooks } from "../Redux/BookReducer/action";
import { parmobj } from "./Sidebar";

export const BookList = ({ parmobj }) => {

  const data = useSelector(state => state.book?.data || []);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getBooks(parmobj));
  }, [parmobj, dispatch])
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
