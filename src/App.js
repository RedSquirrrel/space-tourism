import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
// import Header from "./components/Header/Header";
// import history from "./history";

// import "./styles/_utilities.scss";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/destination" exact element={<Destination />} />
          <Route path="/crew" exact element={<Crew />} />
          <Route path="/technology" exact element={<Technology />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
