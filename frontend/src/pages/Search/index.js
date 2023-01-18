import { useState , useEffect} from "react";
import SearchForm from "../../components/SearchForm";
import Places


const Search = ({}) => {

    const [searchedPlace, setSearchedPlace] = useState([])
    const [formData, setFormData] = useState({searchString: ""})
    console.log(searchedPlace)
    
    return (
      <div className="gallery">
        <SearchForm formData={formData} setFormData={setFormData} setSearchedPlace={setSearchedPlace}/>
       {searchedPlace.map((searched, i) => (
  <figure key={searched.id} className="searched-results">
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