import React, {useState} from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('') 
    /*const handleClear = () => {
        setQuery('')
        onSearch('')
    };*/
  return (
    <div className="search">
      <label className="label-search">Project Name Search</label>
      <input
        className='input-search'
        type="search"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
      {/* <FontAwesomeIcon onClick={handleClear} className="clear-button" icon={solid('xmark')} /> */}
      <FontAwesomeIcon className="search-button" onClick={() => onSearch(query)} icon={solid('magnifying-glass')} />
      {/* <FontAwesomeIcon className="filter-button" onClick={() => onSearch(query)} icon={solid('filter')} /> */}
    </div>
  );
};

export default Search