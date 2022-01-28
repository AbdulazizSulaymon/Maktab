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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<SchoolPage />} />
          <Route path="/teachers/*" element={<Teachers />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
