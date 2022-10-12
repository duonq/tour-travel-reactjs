import React from "react";
import { useHistory } from "react-router";
import { listRouterNoLayout } from "../shared/constants";
import FooterPage from "./components/FooterPage";
import HeaderTour from "./components/HeaderPage";

const LayoutPage = ({ children }: any) => {
  const router = useHistory();
  console.log("router", router);
  return (
    <div>
      {!listRouterNoLayout.includes(router.location.pathname) && <HeaderTour />}
      <div className="layout-tour">
        {children}
        {!listRouterNoLayout.includes(router.location.pathname) && (
          <FooterPage />
        )}
      </div>
    </div>
  );
};

export default LayoutPage;
