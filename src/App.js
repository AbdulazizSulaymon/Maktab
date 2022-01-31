import MenuIcon from "@mui/icons-material/Menu";
import MyBtn from "./components/MyBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "./styles/global";
import Layout from "./containers/Layout";
import Teachers from "./pages/Teachers";
import SchoolPage from "./pages/School";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DarkModeContext from "./data/DarkModeContext";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<SchoolPage />} />
          <Route path="/teachers/*" element={<Teachers />} />
        </Routes>
      </Layout>
    </DarkModeContext.Provider>
  );
};

export default App;
