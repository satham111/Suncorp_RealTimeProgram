import React from "react";
import PropTypes from "prop-types";

export default class NavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      superrDetails: props.superrDetails
    };
  }
  render() {
    const classes = this.props.superrDetails
      ? "sg-Progress-step--current"
      : null;
    const classes1 = this.props.superrDetails
      ? null
      : "sg-Progress-step--current";
    return (
      <div id="acquire" class="sg-Main-content">
        <nav id="progress-bar" ng-if="showProgressBar()" class="container">
          <ol
            class="sg-Progress sg-Progress--shrinkToNumbers"
            role="progressbar"
          >
            <li
              ng-repeat="(key, value) in pageEnum"
              class={`sg-Progress-step--prev member-direct-progress-step  sg-Progress-step ng-scope  ${classes}`}
            >
              <span class="sg-Progress-text ng-binding">Your details</span>
            </li>

            <li
              ng-repeat="(key, value) in pageEnum"
              class={`member-direct-progress-step sg-Progress-step ng-scope sg-Progress-step--next ${classes1}`}
            >
              <span
                class="sg-Progress-text ng-binding"
                ng-click="pageIndex>key &amp;&amp; pageIndex+1!==pageEnum.length &amp;&amp; $parent.validate.goTo(key)"
              >
                Super details
              </span>
            </li>

            <li
              ng-repeat="(key, value) in pageEnum"
              class="member-direct-progress-step sg-Progress-step ng-scope sg-Progress-step--next"
            >
              <span
                class="sg-Progress-text ng-binding"
                ng-click="pageIndex>key &amp;&amp; pageIndex+1!==pageEnum.length &amp;&amp; $parent.validate.goTo(key)"
              >
                Combine
              </span>
            </li>
            <li
              ng-repeat="(key, value) in pageEnum"
              class="member-direct-progress-step sg-Progress-step ng-scope sg-Progress-step--next"
            >
              <span
                class="sg-Progress-text ng-binding"
                ng-click="pageIndex>key &amp;&amp; pageIndex+1!==pageEnum.length &amp;&amp; $parent.validate.goTo(key)"
              >
                Finalise
              </span>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

NavPage.PropTypes = {
  superrDetails: PropTypes.bool
};
