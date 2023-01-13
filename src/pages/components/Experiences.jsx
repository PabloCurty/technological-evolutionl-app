import React, {useState} from 'react'
import StarRating from './starRating/StarRating';

const Experiences = ({ experiences, onDeleteExp, onNewExp }) => {
  const [newExp, setNewExp] = useState("");
  return (
    <div className="repositories">
      <h2 className="title">Experience</h2>
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
        <label htmlFor="new-repo">New Experience:</label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          value={newExp}
          onChange={(e) => setNewExp(e.target.value)}
        />
        <button onClick={() => onNewExp(newExp)}>Add</button>
      </div>
    </div>
  );
};

export default Experiences;