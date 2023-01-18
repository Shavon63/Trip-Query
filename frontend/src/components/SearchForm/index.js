import React from 'react';
import { useState, useEffect } from 'react';
import { getSearchData } from '../../utils/api';
import axios from 'axios';




  // Destructure props object
  function SearchForm({ formData, setFormData, setSearchedPlace }) {
    // const [formState, setFormState] = useState({})


        function handleChange(event){
            setFormData({ ...formData, [event.target.name]: event.target.value})
        
        }
        
        
        async function handleSubmit(event) {
            event.preventDefault();
            const {data} = await axios.post(`http://localhost:5002/maps`, formData)
            setSearchedPlace = data.results

          }
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={formData.searchString}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  
  
export default SearchForm;