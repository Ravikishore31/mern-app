import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scences/homePage";
import LoginPage from "scences/loginPage";
import ProfilePage from "scences/profilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <h1> Ravi Kishore</h1>
      <p> Good Morning</p>
    </div>
  );
}

export default App;
