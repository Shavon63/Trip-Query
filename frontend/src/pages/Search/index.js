import { useState , useEffect} from "react";
import SearchForm from "../../components/SearchForm";
import "./search.css"



const Search = () => {

    const [searchedPlace, setSearchedPlace] = useState([])
    const [formData, setFormData] = useState({searchString: ""})

    return (
      <div className="gallery">
        <div className="search-container">
        <SearchForm formData={formData} setFormData={setFormData} setSearchedPlace={setSearchedPlace}/>
       {searchedPlace.map((searched, i) => (
  <figure key={i} className="searched-results">
<img src={searched.photos.photos_reference} />


    <figcaption className="search">
      <h3>{searched.name}</h3>
      <h3>{searched.formatted_address}</h3>
      <h4>{searched.rating}</h4>
      <h5>{searched.geometry.location.lat}{searched.geometry.location.lng}</h5>

        
    </figcaption>
  </figure>
))}

      </div>
      </div>
    )
  }
  
export default Search;