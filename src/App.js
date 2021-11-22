import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import jsonData from "./data.json";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, [data]);

  console.log(data);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination data={data} />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};
export default App;
