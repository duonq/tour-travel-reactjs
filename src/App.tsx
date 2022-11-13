import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutPage from "./Layouts";
import RouterLinkDefine from "./shared/routerConfig";
import "./index.css";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {RouterLinkDefine.map((route, index) => {
            const Page = route.component;
            let Layout = LayoutPage;
            if (route?.layout) {
              Layout = route.layout
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
