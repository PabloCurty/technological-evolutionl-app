import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Nav from "../components/nav/Nav";
import Experiences from "../components/experiences/Experiences";
import Profile from "../components/profile/Profile";
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { getExperience, createExperience, destroyExperience } from "../../services/Api";

const userId = "63f2b2adee8edf33f22c0797";

const MainPage = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const loadData = async (query = "") => {
    try {
      /*let testExperiences = [
        {
          nameClient: "Modec",
          nameProject: "DT",
          nameTech: ["React"],
          language: "Inglês",
          _id: "1",
          directLeaders: ["teste1", "teste2", "teste3", "teste4", "teste"],
          period: ["2021-01-01T12:00:00Z"],
        },
        {
          nameClient: "Modec",
          nameProject: "DT",
          nameTech: ["React"],
          language: "Inglês",
          _id: "2",
          directLeaders: ["teste1", "teste2", "teste3", "teste4", "teste"],
          period: ["2021-01-01T12:00:00Z"],
        },
      ];*/
      setLoading(true);
      const response = await getExperience(userId, query);
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
  const navigate = useNavigate();
  const handleLogout = useCallback(() => navigate('/login', { replace: true }), [navigate]);

  const handleSearch = (query) => {
    loadData(query)
  };
  
  const handleDeleteExp = async (experience) => {
    console.log("delete expe", experience);
    try {
      await destroyExperience(userId, experience._id)
      await loadData();
    } catch (err) {
      console.log(err);
      setLoadingError(true)
    }
    
  };
  const handleNewExp = async (url) => {
    console.log("new exp", url);
    try {
      await createExperience(userId, url)
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
