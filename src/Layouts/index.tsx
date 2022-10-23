import React from "react";
import FooterPage from "./components/FooterPage";
import HeaderTour from "./components/HeaderPage";
import style from './index.module.scss'

const LayoutPage = ({ children }: any) => {
  return (
    <div className={style.layoutPage}>
      <HeaderTour />
      <div className={style.layoutMain}>
        {children}
        <FooterPage />
      </div>
    </div>
  );
};

export default LayoutPage;
