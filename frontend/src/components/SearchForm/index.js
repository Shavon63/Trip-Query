import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getSearchData } from '../../utils/api';




  // Destructure props object
  function SearchForm({ searchString, setSearchedPlace, searchedPlace }) {
    const [searchTerms, setSearchTerms] = useState({})


        function handleChange(event){
            setSearchTerms({ ...searchTerms, [event.target.id]: event.target.value})
        }
        // //function to retieve data from API
        // useEffect(()=>{
        //     getSearchData(data =>{setSearchedPlace(data)})
        // }, [])
        
        
        function handleSubmit(event) {
            event.preventDefault();
            getSearchData(searchString); 
          }
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  
  
export default SearchForm;