import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FrontPage } from "./components/FrontPage";
import { Category } from "./components/Category";
import { Book } from "./components/Book";
import MOCK_DATA from "./MOCK_DATA.json";
import AboutUs from "./components/AboutUs";
import { AccountSetting } from "./components/AccountSetting/AccountSetting";
import { Profile } from "./components/Profile/Profile";

function App() {
  const routes = [
    { path: "/category/:name", as: Category },
    {
      path: "/book/:id",
      as: (props) => {
        const id = props.location.state.id;
        return Book(MOCK_DATA[id - 1]);
      },
    },
    { path: "/", as: FrontPage },
    { path: "/about-us", as: AboutUs },
  ];

  return (
    <Switch>
      <Route path="/setting" exact component={AccountSetting} />
      <Route path="/profile" exact component={Profile} />

      {routes.map(({ path, as }) => {
        return (
          <Route key={path} path={path} exact>
            {as}
          </Route>
        );
      })}
    </Switch>
  );
}

export default App;
