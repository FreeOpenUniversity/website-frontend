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
import classPage from "./components/classPage/classPage";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      categories: {},
    };
  }

  componentDidMount() {
    //get book data from API
    api.book.read().then((result) => this.setState({ books: result.payload }));
  }
  render() {
    const { books } = this.state;
    // console.log(l.then(result => console.log('result', result.payload)));
    const routes = [
      { path: "/category/:name", as: Category },
      {
        path: "/book/:id",
        as: (props) => {
          const id = props.match.params.id;
          return <Book data={books[id] ? books[id] : MOCK_DATA[id - 1]}></Book>;
        },
      },
      { path: "/", as: <FrontPage /> },
      { path: "/about-us", as: AboutUs },
      { path: "/contact-us", as: ContactUs },
      { path: "/my-classes", as: classPage },
      { path: "/setting", as: AccountSetting },
      { path: "/profile", as: Profile },
      { path: "/questions", as: FAQ },
    ];

    return (
      <>
        <Header />
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
