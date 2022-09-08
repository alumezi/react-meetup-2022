import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/Nav";
import RequireAuth from "./components/RequireAuth";

const Home = () => <h1>Home (Public)</h1>;
const Pricing = () => <h1>Pricing (Public)</h1>;
const Dashboard = () => <h1>Dashboard (Private)</h1>;
const Settings = () => <h1>Settings (Private)</h1>;

const App = () => {
  const handleSubmit = () => {
    function handleSubmit(event) {
      const { username, password } = event.target.elements;
    }
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pricing"
          element={
            <RequireAuth>
              <Pricing />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login onSubmit={handleSubmit} />} />
      </Routes>
    </>
  );
};

export default App;
