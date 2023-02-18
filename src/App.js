import { Routes, Route } from "react-router-dom";

//layout
import Navigation from "./layout/Navigation";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
//style
import "./assets/style/style.scss";
import "./App.css";
import WorkList from "./components/WorkList";
import ProjectInfo from "./components/ProjectInfo";
import ProjectInfo2 from "./components/ProjectInfo2";
import TopBtn from "./components/TopBtn";
import WorkListWeb from "./components/WorkListWeb";
import WorkListToy from "./components/WorkListToy";

function App() {
  return (
    <>
      <Navigation />
      <TopBtn />
      <div className="bg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<WorkList />} />
          <Route path="/web" element={<WorkListWeb />} />
          <Route path="/toy" element={<WorkListToy />} />
          <Route path="/projectInfo" element={<ProjectInfo />} />
          <Route path="/projectInfo2" element={<ProjectInfo2 />} />
        </Routes>

        {/* <Main /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
