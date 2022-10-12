import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LayoutPage from "../Layouts";
import RouterLinkDefine from "../shared/routerConfig";

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutPage>
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
              <Route
                key={index}
                exact={itemRouter.exact}
                path={itemRouter.path}
              >
                {itemRouter.component}
              </Route>
            );
          })}
        </Switch>
      </LayoutPage>
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
