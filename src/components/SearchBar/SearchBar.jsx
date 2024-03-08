import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import Style from "../SearchBar/searchBar.module.css";

const SearchBar = () => {
  const dispacth = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispacth(getRecipesByName(name));
    setName("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <div className={Style.containerBtnSearchBar}>
      <div>
        <input
          className={Style.searchBar}
          placeholder="Search recipe..."
          value={name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <button
          className={Style.buttom}
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
          🔍
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
