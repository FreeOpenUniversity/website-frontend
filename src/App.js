import "./App.css";
import { Switch, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import { Category } from "./components/Category";
import { Book } from "./components/Book";
import MOCK_DATA from "./MOCK_DATA.json";
import AboutUs from "./components/AboutUs";
import { AccountSetting } from "./components/AccountSetting/AccountSetting";
import { Profile } from "./components/Profile/Profile";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Header from "./components/Header/Header";
import { api } from "./store";
import { Component } from "react";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import classPage from "./components/classPage/classPage";
import ScrollToTop from "./components/ScrollToTop";
import Placeholder1 from "./components/Category/Placeholder1";
import Placeholder2 from "./components/Category/Placeholder2";

class App extends Component {
  render() {
    const l = api.book.read();
    console.log(l);
    const routes = [
      { path: "/category/:name", as: Category },
      {
        path: "/book/:id",
        as: (props) => {
          const id = props.location.state.id;
          return Book(MOCK_DATA[id - 1]);
        },
      },
      { path: "/", as: <FrontPage /> },
      { path: "/about-us", as: AboutUs },
      { path: "/contact-us", as: ContactUs },
      { path: "/my-classes", as: classPage },
      { path: "/setting", as: AccountSetting },
      { path: "/profile", as: Profile },
      { path: "/questions", as: FAQ },
      { path: "/placeholder1", as: Placeholder1 },
      { path: "/placeholder2", as: Placeholder2 },
    ];

    return (
      <>
        <Header />
        <Breadcrumbs />
        <ScrollToTop>
          <Switch>
            {routes.map(({ path, as }) => {
              return (
                <Route key={path} path={path} exact>
                  {as}
                </Route>
              );
            })}
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    );
  }
}

export default App;
