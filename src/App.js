import "./App.css";
import { Switch, Route } from "react-router-dom";
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
        console.log(path);
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
