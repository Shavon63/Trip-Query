import { useState } from "react";
import SearchForm from "../../components/SearchForm";

const Search = () => {

    const [searchedPlace, setSearchedPlace] = useState([])
    const [searchString, setSearchString] = useState()
    
    if (!searchedPlace.length) {
      return <h2>No Results Found!</h2>
    }
    return (
      <div className="gallery">
        <SearchForm searchedPlace={searchedPlace} setSearchedPlace={setSearchedPlace} searchString={searchString}/>
       {searchedPlace.map(searched => (
  <figure key={searched.id} className="gif">
    <img src={searched.photos} alt="business" />

    <figcaption>
        <h3>{searched.name} {searched.rating}</h3>
        <h3>{searched.formatted_address}</h3>
        <h4>{searched.opening_hours}</h4>
        <h6>{searched.location}</h6>
    </figcaption>
  </figure>
))}

      </div>
    )
  }
  
export default Search;