import React from "react";
import { useNavigate } from "react-router-dom";

export const BookCard = ({ id, book_name, author, cover_photo, category, release_year, no_of_chapters }) => {
  const navigate = useNavigate();
  

  return (
    <div className="book-card">
      <img className="book-image" src={cover_photo} alt={book_name} />
      <div className="book-name">{book_name}</div>
      <div className="book-author">{author}</div>
      <div className="book-category">{category}</div>
      <div className="book-year">{release_year}</div>
      <div className="book-chapter">chapter:{no_of_chapters}</div>
      <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>
    </div>
  );
};
