import React from 'react';
import '../App.css'; 

const SortOptions = ({ setSortCriterion }) => {
  const handleSort = event => {
    setSortCriterion(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSort}>
        <option value="title">Sort by: <b>Title</b></option>
        <option value="price">Sort by: <b>Price</b></option>
        <option value="reviews">Sort by: <b>Reviews</b></option>
      </select>
    </div>
  );
};

export default SortOptions;
