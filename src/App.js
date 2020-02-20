import React, { Component } from "react";
import PostList from "./containers/PostList";
import "./styles.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagebody from "./components/Pagebody";
import Next1Page from "./components/Next1Page";
import NavPage from "./components/NavPage";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disply: true,
      superrDetails: true,
      secondpage: false,
      handleTitleChange: "test"
    };
    this.onGreat = this.onGreat.bind(this);
  }
  onGreat() {
    this.setState({
      disply: false,
      superrDetails: false
    });
  }

  render() {
    console.log("after use " + this.state.disply);

    return (
      <div>
        <Header />
        <NavPage superrDetails={this.state.superrDetails} />
        {this.state.disply ? <Pagebody onTitleChange={this.onGreat} /> : null}
        {this.state.secondpage ? <Next1Page /> : null}
        <hr />
        <div className="col-md-6">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
NavPage.PropTypes = {
  superrDetails: PropTypes.bool
};
