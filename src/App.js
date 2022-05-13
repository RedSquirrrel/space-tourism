import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import jsonData from './data.json';

const App = () => {
  const [dataDestinations, setDataDestinations] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {
    setDataDestinations(jsonData.destinations);
  }, [dataDestinations]);

  useEffect(() => {
    setCrewData(jsonData.crew);
  }, [crewData]);

  useEffect(() => {
    setTechnologyData(jsonData.technology);
  }, [technologyData]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={dataDestinations.length < 1 ? <Home /> : <Destination dataDestinations={dataDestinations} />}
        />
        <Route path="/crew" element={crewData.length < 1 ? <Home /> : <Crew crewData={crewData} />} />
        <Route
          path="/technology"
          element={technologyData.length < 1 ? <Home /> : <Technology technologyData={technologyData} />}
        />
      </Routes>
    </>
  );
};
export default App;
