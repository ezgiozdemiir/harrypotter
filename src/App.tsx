import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/";
import LayoutMain from "./pages/LayoutMain";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:charName" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
