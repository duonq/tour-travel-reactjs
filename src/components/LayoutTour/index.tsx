import React from "react";
import FooterTour from "./components/FooterTour";
import HeaderTour from "./components/HeaderTour";

const LayoutTour = ({ children }: any) => {
  return (
    <div>
      <HeaderTour />
      <div className="layout-tour">
        {children}
        <FooterTour />
      </div>
    </div>
  );
};

export default LayoutTour;
