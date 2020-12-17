import "./App.css";
import { Switch, Route } from "react-router-dom";
import { FrontPage } from "./components/FrontPage";
import { Category } from "./components/Category";
import { Book } from "./components/Book";
import MOCK_DATA from "./MOCK_DATA.json";
import AboutUs from "./components/AboutUs";
import { AccountSetting } from "./components/AccountSetting/AccountSetting";
import { Profile } from "./components/Profile/Profile";
import Footer from "./components/Footer";
import classPage from "./components/classPage/classPage";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header/Header";
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
    { path: "/contact-us", as: ContactUs },
    { path: "/my-classes", as: classPage },
    { path: "/setting", as: AccountSetting },
    { path: "/profile", as: Profile },
  ];

  return (
    <>
      <Header />
      <Switch>
        {routes.map(({ path, as }) => {
          return (
            <Route key={path} path={path} exact>
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
