import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/Voyage-Website" element={<WelcomePage />} />
        <Route path="/Voyage-Website/Login" element={<LoginPage />} />
        <Route path="/Voyage-Website/Registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
