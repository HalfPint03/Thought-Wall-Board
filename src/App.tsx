import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogInForm from "./Components/LogInForm";
import ThoughtWall from "./Components/ThoughtWall";
import RegistrationForm from "./Components/RegistrationForm";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/thought-wall" element={<ThoughtWall />} />
      </Routes>
    </>
  );
}

export default App;
