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
import classPage from "./components/classPage/classPage";
import ScrollToTop from "./components/ScrollToTop";
import { connect } from "react-redux";
import BreadCrumb from "./components/Breadcrumbs/Breadcrumbs";
import Cat from "./components/Cat";

function App(props) {
  const { books, categories } = props;
  api.book.read();
  api.category.read();
  let cats = Object.values(categories); // covert categories to array
  const getBookTitle = (props) => {
    const id = props.match.params.id;
    const book = books[id] ? books[id] : MOCK_DATA[id - 1];
    return book.title;
  };
  const getBook = (props) => {
    const id = props.match.params.id;
    return <Book {...(books[id] ? books[id] : MOCK_DATA[id - 1])}></Book>;
  };
  const getCat = (props) => {
    const name = props.match.params.name;
    return <Cat data={cats.filter((cat) => cat.name == name)}></Cat>;
  };
  const routes = [
    {
      title: (props) => props.match.params.name,
      path: "/category/:name",
      as: Category,
    },
    {
      title: (props) => props.match.params.name,
      path: "/cat/:name",
      as: getCat,
    },
    {
      title: getBookTitle,
      path: "/category/:name/book/:id",
      as: getBook,
    },
    {
      title: getBookTitle,
      path: "/book/:id",
      as: getBook,
    },
    { title: "Home", path: "/", as: FrontPage },
    { title: "About", path: "/about-us", as: AboutUs },
    { title: "Contact", path: "/contact-us", as: ContactUs },
    { title: "My Classes", path: "/my-classes", as: classPage },
    { title: "Settings", path: "/setting", as: AccountSetting },
    { title: "Profile", path: "/profile", as: Profile },
    { title: "Questions", path: "/questions", as: FAQ },
  ]
    .map((v) => ({ exact: true, ...v }))
    .map(({ as: As, title, path }, _, routes) => {
      return {
        as: (props) => {
          return (
            <>
              {BreadCrumb({ title, ...props, routes })}
              <As {...props} />
            </>
          );
        },
        title,
        path,
      };
    });

  return (
    <>
      <Header />
      <ScrollToTop>
        <Switch>
          {routes.map(({ path, as }, index) => {
            return (
              <Route key={index} path={path} exact>
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

function mapStateToProps(state) {
  return { categories: state.category, books: state.book };
}

export default connect(mapStateToProps)(App);
