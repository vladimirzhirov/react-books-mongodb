import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import NotFound from "./components/notFound/notFound";
import { CreateBookForm, EditBookForm } from "./components/book/book";
import About from "./components/about/about";
import BooksListContainer from "./containers/booksListContainer";
import store from "./store/store";
import { Provider } from "react-redux";
import "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store} router={BrowserRouter}>
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <NavLink to={"/books"} className="navbar-brand">
            Books
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to={"/books/create"} className="nav-link">
                  Create
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={BooksListContainer} />
          <Route exact path="/books" component={BooksListContainer} />
          <Route exact path="/books/create" component={CreateBookForm} />
          <Route path="/books/edit/:bookId" component={EditBookForm} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
