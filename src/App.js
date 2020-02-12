import React, { Component } from "react";
import NewPost from "./components/NewPost";
import PostList from "./containers/PostList";
import "./styles.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagebody from "./components/Pagebody";

const stylesApp = {
  marginTop: 40
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pagebody />
      </div>
      // <div className="container">
      //   <div className="col-md-6">
      //     <Header />
      //   </div>

      //   <div className="row" style={stylesApp}>
      //     <div className="col-md-6">
      //       <NewPost />
      //     </div>
      //     <hr />
      //     <div className="col-md-6">
      //       <PostList />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
