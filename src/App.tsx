import React from "react";
import { Route, Routes } from "react-router-dom";

import style from "./App.module.scss";
import { ProfilePage } from "./pages/profilePage";
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
