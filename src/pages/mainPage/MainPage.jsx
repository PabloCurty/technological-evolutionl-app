import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Nav from "../components/nav/Nav";
import Experiences from "../components/experiences/Experiences";
import Profile from "../components/profile/Profile";
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { getExperience } from "../../services/Api";

const userId = "63c17d24530026f8f814a097";

const MainPage = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const loadData = async (query = "") => {
    try {
      let testExperiences = [
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
      ];
      setLoading(true);
      const response = await getExperience(userId);
      setExperiences(response);
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
  const handleLogout = useCallback(() => navigate('/login', {replace: true}), [navigate]);
  const handleDeleteExp = (experience) => {
    console.log("delete expe", experience);
  };
  const handleNewExp = (url) => {
    console.log("new exp", url);
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
          />
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
