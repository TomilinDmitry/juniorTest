import React from "react";
import style from "./index.module.scss";
import { MainContainer } from "../../components/mainContainer";
export const ProfilePage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MainContainer />
      </div>
    </div>
  );
};
