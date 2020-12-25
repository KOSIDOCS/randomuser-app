import React, { useEffect } from "react";
import axios from "axios";
import store from "./store/store";
import { addUsers } from "./actions/users";
import Header from "./component/Header";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import UsersList from "./component/UsersList";
import Baner from "./component/Baner";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      store.dispatch(addUsers(response.data.results));
    });
  });

  return (
    <div>
      <Header />
      <Baner />
      <UsersList />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
