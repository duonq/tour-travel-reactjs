import React from "react";
import { useHistory } from "react-router";
import { listRouterNoLayout } from "../../shared/constants";
import FooterTour from "./components/FooterTour";
import HeaderTour from "./components/HeaderTour";

const LayoutTour = ({ children }: any) => {
  const router = useHistory()
  return (
    <div>
      {!listRouterNoLayout && <HeaderTour />}
      <div className="layout-tour">
        {children}
        {!listRouterNoLayout && <FooterTour />}
      </div>
    </div>
  );
};

export default LayoutTour;
