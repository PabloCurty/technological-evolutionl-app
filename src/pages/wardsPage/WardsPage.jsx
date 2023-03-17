import React, { useContext } from 'react';
import "./WardsPage.css";
import Nav from "../components/nav/Nav";
import { AuthContext } from "../../contexts/Auth";

const list = [
  {
    id: '1',
    name: 'Robin',
    nickName: 'Wieruch',
    photoUrl: 'https://i.ibb.co/wpYcybq/eu.jpg',
    role: 'Tech Lead',
    email: 'blabla@blabla.com.br',
    tel: '21 988889999',
    brithdayDate: '22 / 02 / 2002',
    city: 'Maceió',
    startDate: '22/02/2022'
  },
  {
    id: '2',
    name: 'David',
    nickName: 'Davidds',
    photoUrl: 'https://i.ibb.co/wpYcybq/eu.jpg',
    role: 'Tech Lead',
    email: 'blabla@blabla.com.br',
    tel: '21 977779999',
    brithdayDate: '11 / 01 / 2001',
    city: 'Maceió',
    startDate: '12/01/2021'
  },
];

const WardsPage = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }
  return (
    <div id="main">
      <Nav onLogout={handleLogout} pageName="My Tutored Students" />
      <div className="wards col-8">
        <ul className="list">
          {list.map(item => (
            <li className="item" key={item.id}>
              <div className="info">
                <div>{item.name}</div>
                <div>{item.nickName}</div>
                <div>{item.photoUrl}</div>
                <div>{item.role}</div>
                <div>{item.email}</div>
                <div>{item.tel}</div>
                <div>{item.brithdayDate}</div>
                <div>{item.city}</div>
                <div>{item.startDate}</div>
              </div>
            </li>
          ))}
       </ul>
      </div>
    </div>
  )
}

export default WardsPage