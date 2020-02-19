import React, { Component } from "react";
import PostList from "./containers/PostList";
import "./styles.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagebody from "./components/Pagebody";
import Next1Page from "./components/Next1Page";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disply: true,
      secondpage: false,
      handleTitleChange: "test"
    };
  }
  // this.state.handleTitleChange(event){
  //   setTitle(evt.target.value)
  // }

  render() {
    console.log("after use " + this.state.disply);

    return (
      <div>
        <Header />
        {this.state.disply ? (
          <Pagebody onTitleChange={this.state.handleTitleChange} />
        ) : null}
        {this.state.secondpage ? <Next1Page /> : null}

        <hr />
        <div className="col-md-6">
          <PostList />
        </div>
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
