import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FrontPage } from "./components/FrontPage";
import { Category } from "./components/Category";
import { Book } from "./components/Book";
import MOCK_DATA from "./MOCK_DATA.json";
import AboutUs from "./components/AboutUs";
import { AccountSetting } from "./components/AccountSetting/AccountSetting";
import { Profile } from "./components/Profile/Profile";
import Footer from "./components/Footer";
import classPage from "./classPage";
import { Navbar } from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { Component } from "react";

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
    { path: "/my-classes", as: classPage },
    { path: "/setting", as: AccountSetting },
    { path: "/profile", as: Profile },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs />
      <Switch>
        {routes.map(({ path, as }) => {
          return (
            <Route exact key={path} path={path}>
              {as}
            </Route>
          );
        })}
      </Switch>

      <Footer />
    </>
  );
}

export default App;
