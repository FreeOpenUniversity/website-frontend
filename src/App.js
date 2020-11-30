import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { Category } from "./Category";
import { AccountSetting } from "./components/AccountSetting/AccountSetting";
import { Profile } from "./components/Profile/Profile";
import { MyLearning } from "./components/MyLearning/MyLearning";

function App() {
  const routes = [
    { path: "/category/:name", as: Category },
    { path: "/", as: FrontPage },
  ];

  return (
    <Switch>
      <Route path="/setting" exact component={AccountSetting} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/mylearning" exact component={MyLearning} />

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
