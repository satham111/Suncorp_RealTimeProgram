// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// import App from "./App";
// //import rootReducer from "./reducers";

// //const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
