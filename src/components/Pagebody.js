import React from "react";
import { createPost } from "../actions/Index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { Collapse, Navbar, Nav, NavItem, NavLink } from "reactstrap";

class Pagebody extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      startDate: new Date(),
      fistname: "",
      lastname: "",
      gender: "",
      dob: "",
      taxfilenumber: "",
      occupation: "",
      addressline1: "",
      addressline2: "",
      postalcode: "",
      select1: "",
      emailaddress: "",
      mobilenumber: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      redirectToReferrer: false
    });
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    console.log("handleSubmit 001 " + JSON.stringify(this.state));
    e.preventDefault();
    if (this.state.lastname.trim() && this.state.fistname.trim()) {
      console.log("inside of check");
      this.props.dispatch(createPost(this.state));
      this.handleReset();
    }
  };
  handleReset = () => {
    this.setState({
      fistname: "",
      lastname: ""
    });
  };
  handleOnChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <div className="sg-main ">
        <div id="acquire" class="sg-Main-content">
          <nav id="progress-bar" ng-if="showProgressBar()" class="container">
            <ol
              class="sg-Progress sg-Progress--shrinkToNumbers"
              role="progressbar"
            >
              <li
                ng-repeat="(key, value) in pageEnum"
                class="sg-Progress-step--prev member-direct-progress-step  sg-Progress-step ng-scope sg-Progress-step--current"
              >
                <span class="sg-Progress-text ng-binding">Your details</span>
              </li>
              <li
                ng-repeat="(key, value) in pageEnum"
                class="member-direct-progress-step sg-Progress-step ng-scope sg-Progress-step--next"
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

        {/* <Navbar
          className="container sg-main sg-process-text"
          color="light"
          light
          expand="md"
        >
          <Collapse navbar className="sg-main">
            <Nav className="mr-auto sg-main" navbar>
              <NavItem>
                <NavLink className="p-2 mb-1 sg-focus " href="/components/">
                  Your Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Super Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Combine</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Finalise</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}

        <div className="container">
          <h5>Your details</h5>
          <p>
            Please answer all of the below questions, except where indicated as
            optional.
          </p>
          <form onSubmit={this.handleSubmit} className="form-group column">
            <div className="form-group">
              <label className="sg-Form-label">Full Name</label>
              <div className="col-md-8 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    type="text"
                    name="fistname"
                    className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                    placeholder="First name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="sg-Form-label">Last Name</label>
              <div className="col-md-8 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="sg-Form-question">
              <label id="gender" className="sg-Form-label">
                Gender
              </label>

              <div
                className="sg-Radio-btnGroup sg-Radio-btnGroup--noFullWidth ng-isolate-scope is-invalid"
                name="genderGroup"
                validation="event:[#gender-male-label&amp;#gender-female-label]|option-required"
                autocomplete="off"
                elementid="0.5927550333792562"
              >
                <label
                  id="gender-male-label"
                  className="sg-Radio sg-Radio-btn marginTopZero"
                  elementid="0.028977479695404096"
                >
                  <input
                    id="gender-male"
                    name="gender"
                    className="sg-Radio-input ng-valid ng-not-empty ng-dirty user-success ng-touched ng-valid-parse"
                    type="radio"
                    value="male"
                    ng-model="customerDetail.gender"
                    ng-disabled="acquireExisting"
                    validationdisabled="true"
                    onChange={this.handleChange}
                  />
                  <i className="sg-Radio-icon" />
                  <span className="sg-Radio-text">Male</span>
                </label>
                <label
                  id="gender-female-label"
                  className="sg-Radio sg-Radio-btn marginTopZero"
                  elementid="0.42415372137756036"
                >
                  <input
                    id="gender-female"
                    name="gender"
                    className="sg-Radio-input ng-valid ng-valid-valid-gender ng-not-empty ng-dirty user-success ng-touched"
                    type="radio"
                    value="fem"
                    validate-gender="customerDetail.title"
                    ng-model="customerDetail.gender"
                    ng-disabled="acquireExisting"
                    validationdisabled="true"
                    onChange={this.handleChange}
                  />
                  <i className="sg-Radio-icon" />
                  <span className="sg-Radio-text">Female</span>
                </label>
              </div>
              <field-error field="gender" className="ng-scope">
                <span
                  className="error-msg sg-Validation-errorMessage ng-binding ng-scope"
                  ng-if="getCurrentForm().hasErrors(field)"
                  ng-bind="getErrorMessage(getCurrentForm()[field].$error)"
                />
              </field-error>
              <div className="sg-Validation-errorWrapper" />
            </div>
            <div />

            <div className="form-group">
              <label className="sg-Form-label">Date of birth</label>
              <div className="col-md-8 inputGroupContainer">
                <div className="input-group">
                  <DatePicker
                    name="dob"
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="sg-Form-label">
                Tax File number (optional)
              </label>
              <div className="col-md-8 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    id="taxfilenumber"
                    name="taxfilenumber"
                    placeholder="Tax File Number"
                    className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <p className="sg-Form-helpText">
                    You can find your TFN on your tax return or you can call ATO
                    13 28 61 Mon-Fri 8am-6pm
                  </p>
                  <div className="sg-Accordion">
                    <button
                      type="button"
                      className="sg-Accordion-label js-Accordion"
                      id="tfn_accordion_link"
                      role="tab"
                    >
                      Why do you need my TFN?
                    </button>

                    <div
                      id="tfn_accordion_content"
                      className="sg-Accordion-content is-closed sg-Type--size14"
                      aria-expanded="false"
                      aria-labelledby="tfn_accordion_link"
                      data-animate="true"
                      role="tabpanel"
                    >
                      {/* <div
                        ng-if="GLOBAL_CONFIG.static_variable.product_type.isEDSSuper(productType)"
                        className="ng-scope"
                      >
                        <p>
                          It's not compulsory to provide your TFN. If you don't
                          wish to provide it to us now, you can give it to us
                          online after you've set-up your account. But providing
                          us with your TFN means:
                        </p>

                        <ul className="sg-List-unordered">
                          <li>
                            We can accept all types of contributions into your
                            Everyday Super account
                          </li>
                          <li>
                            Tax on contributions to your superannuation
                            account/s will not increase
                          </li>
                          <li>
                            No additional tax will be deducted when you start
                            drawing down your super (other than taxes that may
                            ordinarily apply)
                          </li>
                          <li>
                            It will make it easier to trace different super
                            accounts in your name so you receive all your super
                            on retirement.
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="sg-Form-label">Occupation</label>
                <div className="col-md-8 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="occupation"
                      name="occupation"
                      placeholder="Occupation"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                    <p className="sg-Form-helpText">
                      If you can't find your occupation, please select the
                      closest match. If you have more than one job, choose the
                      one you spend the most time doing per week.
                    </p>
                  </div>
                </div>
              </div>
              <div id="before-appbar" />
              <h5>Contact Details</h5>
              <div className="form-group">
                <label className="sg-Form-label">AddressLine 1</label>
                <div className="col-md-8 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="addressline1"
                      name="addressline1"
                      placeholder="Addressline 1"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="sg-Form-label">AddressLine 2</label>
                <div className="col-md-8 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="addressline2"
                      name="addressline2"
                      placeholder="Addressline 2"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="sg-Form-label">Suburb or postcode</label>
                <div className="col-md-8 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="postalcode"
                      name="postalcode"
                      placeholder="Postal Code"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div id="div_id_select" className="form-group required">
                <label
                  for="id_select"
                  className="control-label col-md-4  requiredField"
                >
                  {" "}
                  Use this address for your mailing address?
                  <span className="asteriskField">*</span>{" "}
                </label>
                <div
                  className="controls col-md-8 "
                  styles="margin-bottom: 10px"
                >
                  <label className="radio-inline">
                    <input
                      type="radio"
                      checked="checked"
                      name="select1"
                      id="id_select_1"
                      value="S"
                      onChange={this.handleChange}
                      styles="margin-bottom: 10px"
                    />{" "}
                    Yes
                  </label>
                  {"    "}
                  <label className="radio-inline">
                    {" "}
                    <input
                      type="radio"
                      name="select1"
                      id="id_select_2"
                      value="P"
                      onChange={this.handleChange}
                      styles="margin-bottom: 10px"
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="sg-Form-label">Email Address</label>
                <div className="col-md-8 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="emailaddress"
                      name="emailaddress"
                      placeholder="Email Address"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                      value={this.state.emailaddress}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="sg-Form-label">Mobile Number</label>
                <div className="col-md-8 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="mobilenumber"
                      name="mobilenumber"
                      placeholder="Mobile Number"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                      value={this.state.mobilenumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <button type="button" className="sg-Btn-sec btn-default">
                  <i className="sg-Btn-icon">
                    <span>
                      <img
                        src="https://super.suncorp.com.au/ssp/sg/img//Icon-plus--secondary.svg"
                        alt="Suncorp"
                      />
                    </span>
                  </i>
                  Add an alternate contact number
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-warning sg-Btn"
                styles="float:right"
                id="acquire_your_detail_continue"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
//export default Pagebody;
export default connect(null)(Pagebody);
