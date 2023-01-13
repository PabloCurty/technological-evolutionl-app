import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./MainPage.css"
import Nav from '../components/Nav'
import Search from '../components/Search'
import Experiences from "../components/Experiences";
import { getExperience } from "../../services/Api";

const userId = "63c17d24530026f8f814a097";

const MainPage = () => {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)
  const loadData = async (query = '') => {
    try {
      setLoading(true)
      const response = await getExperience(userId);
      setExperiences(response.data);
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoadingError(true)
    }
    
  }
  useEffect(() => {
    (async () => await loadData())()
  }, [])
  const handleLogout = () => {
    console.log('logout')
  }
  const handleSearch = (query) => {
    console.log('query', query)
  }
  const handleDeleteExp = (experience) => {
    console.log("delete expe", experience);
  };
  const handleNewExp = (url) => {
    console.log('new exp', url)
  }
  if (loadingError) {
    return (
      <div className='loading'>
        Erro ao carregar os dados de Experiencia.<Link to='/login'>Voltar</Link>
      </div>
    )
  }
  if (loading) {
    return (
      <div className='loading'>
        Carregando...
      </div>
    )
  }
  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Experiences
        experiences={experiences}
        onDeleteExp={handleDeleteExp}
        onNewExp={handleNewExp}
      />
    </div>
  );
}

export default MainPage