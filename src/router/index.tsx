import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LayoutTour from "../components/LayoutTour";
import RouterLinkDefine from "../shared/routerConfig";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {RouterLinkDefine.map((itemRouter, index) => {
          if (itemRouter.isAuth) {
            return (
              <PrivateRouter
                key={index}
                path={itemRouter.path}
                exact={itemRouter.exact}
              ></PrivateRouter>
            );
          }

          return (
            <LayoutTour key={index}>
              <Route
                exact={itemRouter.exact}
                path={itemRouter.path}
              >
                {itemRouter.component}
              </Route>
            </LayoutTour>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

function PrivateRouter({ children, ...rest }: any) {
  return (
    // <LayoutTour>
      <Route
        {...rest}
        render={({ location }) => {
          return <Redirect to={{ pathname: "/", state: { from: location } }} />;
        }}
      />
    // </LayoutTour>
  );
}

export default Router;
