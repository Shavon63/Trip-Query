import { useState , useEffect} from "react";
import SearchForm from "../../components/SearchForm";
import "./search.css"



const Search = () => {

    const [searchedPlace, setSearchedPlace] = useState([])
    const [formData, setFormData] = useState({searchString: ""})

    return (
      <div className="gallery">
        <SearchForm formData={formData} setFormData={setFormData} setSearchedPlace={setSearchedPlace}/>
       {searchedPlace.map((searched, i) => (
  <figure key={searched.id} className="searched-results">


    <figcaption className="search">
        <h3>{searched.description} {searched.type}</h3>
    </figcaption>
  </figure>
))}

      </div>
    )
  }
  
export default Search;