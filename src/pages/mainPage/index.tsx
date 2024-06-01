import React from "react";
import style from "./index.module.scss";
import { MainPageContainer } from "../../components/mainPageContainer";

export const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MainPageContainer />
      </div>
    </div>
  );
};
