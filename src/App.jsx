import react from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Dashboard from "./navigation/Dashboard";

function App() {
  const dashboard = true;

  return (
    <BrowserRouter>
      {!dashboard ? (
        <>
          <MainStack />
        </>
      ) : (
        <Dashboard />
      )}
    </BrowserRouter>
  );
}

export default App;
