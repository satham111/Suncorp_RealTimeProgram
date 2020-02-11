import React from "react";

class Header extends React.Component {
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
        <div className="row">
          <div className="col-sm-7">
            <div className="print-hide">
              <a className="sg-Header-logo" ng-href="" />
            </div>
            <div className="print-display">
              <img
                src="https://super.suncorp.com.au/ssp/sg/img/Logo-header.svg"
                alt="Suncorp"
                width="185"
                height="50"
              />
            </div>
          </div>

          <div ng-show="!isLoggedIn()" className="col-sm-4">
            <h1 className="ng-binding">Everyday Super</h1>

            <div>
              <span className="sg-u-smallHidden">Need help? Call </span>
              <a
                className="sg-Type--phone ng-binding"
                styles="cursor: inherit;"
              >
                1800 191 517
              </a>
              {/* </br> */}
            </div>
            <div>
              <small className="sg-u-smallHidden">Mon-Fri 8am-6pm AEST</small>
            </div>
          </div>

          {/* <div ng-show="isLoggedIn()" className="sg-Header-column ng-hide">
            <div className="sg-Grid sg-Type--size16">
              <div className="print-hide">
                <div className="sg-Grid-row sg-Grid-row--positionMiddle">
                  <div className="sg-Grid-col">
                    Hi <strong className="ng-binding" />. You're logged in as an
                    Adviser.
                    <button
                      className="sg-Btn sg-Btn--small sg-u-marginLeft"
                      ng-click="logout()"
                    >
                      Log off
                    </button>
                  </div>
                </div>
              </div>
              <div className="print-display">
                <h4 className="ng-binding">Suncorp Everyday Super</h4>
                <h4 className="ng-binding">Adviser: </h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
