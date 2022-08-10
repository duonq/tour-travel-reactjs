import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LayoutTour from "../components/LayoutTour";
import RouterLinkDefine from "../shared/routerConfig";

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutTour>
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
              <Route key={index}
                exact={itemRouter.exact}
                path={itemRouter.path}
              >
                {itemRouter.component}
              </Route>
            );
          })}
        </Switch>
      </LayoutTour>
    </BrowserRouter>
  );
};

function PrivateRouter({ children, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return <Redirect to={{ pathname: "/", state: { from: location } }} />;
      }}
    />
  );
}

export default Router;
