import React, {useState} from 'react'
import StarRating from '../starRating/StarRating';
import "./Experiences.css";
import Search from '../search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'

const Experiences = ({ experiences, onDeleteExp, onNewExp }) => {
  const [newExp, setNewExp] = useState("");

  const handleSearch = (query) => {
    console.log("query", query);
  };
  
  return (
    <div className="repositories col-8">
      <Search onSearch={handleSearch} />
      {/* <h2 className="title">Experience</h2> */}
      <ul className="list">
        {experiences.map((experiencie) => (
          <li className="item" key={experiencie._id}>
            <div className="info">

              <div className="owner">Client: {experiencie.nameClient}</div>
              <div className="owner">Language: {experiencie.language}</div>
              <div className="project">Project: {experiencie.nameProject}</div>
              <div className="name">Period: </div>
              {experiencie.period.map((period) => (
                <div className="period">
                  {period.substring(0, period.indexOf("T"))}
                </div>
              ))}
              <div className="name">Techs:</div>
              {experiencie.nameTech.map((nameTech) => (
                <div className="tech">
                  {nameTech}
                  <StarRating />
                </div>
              ))}
              <div className="name">Direct Leaders:</div>
              {experiencie.directLeaders.map((directLeader) => (
                <div className="leader">{directLeader}</div>
              ))}
            </div>
            <button onClick={() => onDeleteExp(experiencie)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="new">
        <label htmlFor="new-repo">Add New Experience</label>
        {/* <input
          className='input-new-repo'
          type="url"
          name="new-repo"
          id="new-repo"
          value={newExp}
          onChange={(e) => setNewExp(e.target.value)}
        /> */}
      <FontAwesomeIcon className="add-button" onClick={() => onNewExp(newExp)} icon={solid('plus')} />
      </div>
    </div>
  );
};

export default Experiences;