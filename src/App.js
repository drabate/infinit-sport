import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DashboardPage from "./pages/DashboardPage";
import DetailPage from "./pages/DetailPage";
import { FootballTeamProvider } from "./context/FootballTeamContext";

function App() {
  return (
    <FootballTeamProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="p-4 bg-blue-600 text-white flex justify-center">
            <ul className="flex space-x-10">
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/list" element={<ListPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
            <Route path="/" exact element={<ListPage />} />
          </Routes>
        </div>
      </Router>
    </FootballTeamProvider>
  );
}

export default App;
