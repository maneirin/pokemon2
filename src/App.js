import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/home";
import Pokemon from "./pages/Pokemon/pokemon";

function App() {

  return (

    <BrowserRouter basename="/pokemon2">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/pokemon/:name"
          element={<Pokemon />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;