import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { Category } from "./Category";

function App() {
  const routes = [
    { path: "/category/:name", as: Category },
    { path: "/", as: FrontPage },
  ];

  return (
    <Switch>
      {routes.map(({ path, as }) => {
        return (
          <Route key={path} path={path}>
            {as}
          </Route>
        );
      })}
    </Switch>
  );
}

export default App;
