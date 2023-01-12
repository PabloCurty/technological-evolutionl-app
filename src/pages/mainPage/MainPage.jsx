import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./MainPage.css"
import Nav from '../components/Nav'
import Search from '../components/Search'
import Repositories from '../components/Repositories'
import { getRepository } from '../../services/Api'

const userId = "63b2024b069058cc20cf0b63";

const MainPage = () => {
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)
  const loadData = async (query = '') => {
    try {
      setLoading(true)
      const response = await getRepository(userId);
      setRepositories(response.data);
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
  const handleDeleteRepo = (repository) => {
    console.log('delete repo', repository)
  }
  const handleNewRepo = (url) => {
    console.log('new repo', url)
  }
  if (loadingError) {
    return (
      <div className='loading'>
        Erro ao carregar os dados de repositório.<Link to='/login'>Voltar</Link>
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
      <Nav onLogout={handleLogout}/>
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDeleteRepo}
        onNewRepo={handleNewRepo} />
      
    </div>
  );
}

export default MainPage