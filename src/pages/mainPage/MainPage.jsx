import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Nav from "../components/nav/Nav";
import Experiences from "../components/experiences/Experiences";
import Profile from "../components/profile/Profile";
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { getExperience, createExperience, destroyExperience } from "../../services/Api";
import { AuthContext } from "../../contexts/Auth";

const MainPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const loadData = async (query = "") => {
    try {
      setLoading(true);
      const response = await getExperience(user?.id, query);
      setExperiences(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoadingError(true);
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);
  
  const handleLogout = () => {
    logout();
  }

  const handleSearch = (query) => {
    loadData(query)
  };
  
  const handleDeleteExp = async (experience) => {
    console.log("delete expe", experience);
    try {
      await destroyExperience(user?.id, experience._id)
      await loadData();
    } catch (err) {
      console.log(err);
      setLoadingError(true)
    }
    
  };
  const handleNewExp = async (url) => {
    console.log("new exp", url);
    try {
      await createExperience(user?.id, url)
      await loadData();
    } catch (err) {
      console.log(err);
      setLoadingError(true)
    }
  };
  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados de Experiencia.<Link to="/login">Voltar</Link>
      </div>
    );
  }
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }
  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Container>
        <Row className="mt-5 d-flex justify-content-around">
          <Profile />
          <Experiences
            experiences={experiences}
            onDeleteExp={handleDeleteExp}
            onNewExp={handleNewExp}
            onHandleSearch={handleSearch}
          />
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
