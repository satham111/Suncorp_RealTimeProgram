import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const NavbarStyle = {
      "background-color": "rgb(0, 174, 255)"
    };
    const textColor = {
      color: "white",
      "text-align": "center"
    };
    return (
      <div
        id="acquire-header"
        className="container"
        ng-controller="SSP.HeaderController"
      >
        <button
          onClick={this.props.onTitleChange}
          type="submit"
          className="btn btn-warning sg-Btn"
          id="acquire_your_detail_continue"
        >
          Continue
        </button>
      </div>
    );
  }
}

export default Footer;
