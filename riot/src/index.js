import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { rootReducer } from "./reducers";
import { updateInput } from "./reducers";

const store = createStore(updateInput);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// renderUsers = () => {
//   return this.state.matches.map(match => {
//     return <div key={Math.random()}>{match.gameId}</div>;
//   });
// };

// axios.get("http://localhost:3000/").then(res => {
//   console.log(res.data);
// });

// axios.get("http://localhost:3000/match").then(res => {
//   this.setState({ matches: res.data.matches });
// });
