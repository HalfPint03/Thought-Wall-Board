import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "../Components/LogIn";
import ThoughtWall from "../Components/ThoughtWall";
import CreateUser from "../Components/CreateUser";
import Header from "../Components/Header";
import Home from "../Components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<LogIn />} />
        <Route path="/homepage/registration" element={<CreateUser />} />
        <Route path="/thought-wall" element={<ThoughtWall />} />
      </Routes>
    </>
  );
}

export default App;
