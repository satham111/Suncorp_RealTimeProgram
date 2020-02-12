import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

class Pagebody extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <div className="sg-main ">
        <Navbar
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
        </Navbar>

        <div class="container">
          <h5>Your details</h5>
          <p>
            Please answer all of the below questions, except where indicated as
            optional.
          </p>
          <form className="form-group column">
            <div class="form-group">
              <label className="sg-Form-label">Full Name</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user" />
                  </span>
                  <input
                    type="text"
                    name="fistname"
                    className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                    placeholder="First name"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label className="sg-Form-label">Last Name</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user" />
                  </span>
                  <input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div class="sg-Form-question">
              <label id="gender" class="sg-Form-label">
                Gender
              </label>

              <div
                class="sg-Radio-btnGroup sg-Radio-btnGroup--noFullWidth ng-isolate-scope is-invalid"
                name="genderGroup"
                validation="event:[#gender-male-label&amp;#gender-female-label]|option-required"
                autocomplete="off"
                elementid="0.5927550333792562"
              >
                <label
                  id="gender-male-label"
                  class="sg-Radio sg-Radio-btn marginTopZero"
                  elementid="0.028977479695404096"
                >
                  <input
                    id="gender-male"
                    name="gender"
                    class="sg-Radio-input ng-valid ng-not-empty ng-dirty user-success ng-touched ng-valid-parse"
                    type="radio"
                    value="male"
                    ng-model="customerDetail.gender"
                    ng-disabled="acquireExisting"
                    validationdisabled="true"
                  />
                  <i class="sg-Radio-icon" />
                  <span class="sg-Radio-text">Male</span>
                </label>
                <label
                  id="gender-female-label"
                  class="sg-Radio sg-Radio-btn marginTopZero"
                  elementid="0.42415372137756036"
                >
                  <input
                    id="gender-female"
                    name="gender"
                    class="sg-Radio-input ng-valid ng-valid-valid-gender ng-not-empty ng-dirty user-success ng-touched"
                    type="radio"
                    value="fem"
                    validate-gender="customerDetail.title"
                    ng-model="customerDetail.gender"
                    ng-disabled="acquireExisting"
                    validationdisabled="true"
                  />
                  <i class="sg-Radio-icon" />
                  <span class="sg-Radio-text">Female</span>
                </label>
              </div>
              <field-error field="gender" class="ng-scope">
                <span
                  class="error-msg sg-Validation-errorMessage ng-binding ng-scope"
                  ng-if="getCurrentForm().hasErrors(field)"
                  ng-bind="getErrorMessage(getCurrentForm()[field].$error)"
                />
              </field-error>
              <div class="sg-Validation-errorWrapper" />
            </div>
            <div />

            <div class="form-group">
              <label className="sg-Form-label">Date of birth</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <DatePicker
                    name="dob"
                    class="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label className="sg-Form-label">
                Tax File number (optional)
              </label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user" />
                  </span>
                  <input
                    class="col-md-6 control-label"
                    id="taxfilenumber"
                    name="taxfilenumber"
                    placeholder="Tax File Number"
                    className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                    type="text"
                  />
                  <p class="sg-Form-helpText">
                    You can find your TFN on your tax return or you can call ATO
                    13 28 61 Mon-Fri 8am-6pm
                  </p>
                  <div class="container">
                    <button
                      href="#demo"
                      type="button"
                      class="sg-Type--link sg-Accordion-label js-Accordion"
                    >
                      <u>(+) Why do you need my occupation? </u>
                    </button>
                    <div id="demo" class="collapse">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label className="sg-Form-label">Occupation</label>
                <div class="col-md-8 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="occupation"
                      name="occupation"
                      placeholder="Occupation"
                      class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                    <p class="sg-Form-helpText">
                      If you can't find your occupation, please select the
                      closest match. If you have more than one job, choose the
                      one you spend the most time doing per week.
                    </p>
                  </div>
                </div>
              </div>
              <div id="before-appbar" />
              <h5>Contact Details</h5>
              <div class="form-group">
                <label className="sg-Form-label">AddressLine 1</label>
                <div class="col-md-8 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="addressline1"
                      name="addressline1"
                      placeholder="Addressline 1"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label className="sg-Form-label">AddressLine 2</label>
                <div class="col-md-8 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="addressline2"
                      name="addressline2"
                      placeholder="Addressline 2"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label className="sg-Form-label">Suburb or postcode</label>
                <div class="col-md-8 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="postalcode"
                      name="postalcode"
                      placeholder="Postal Code"
                      class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div id="div_id_select" class="form-group required">
                <label
                  for="id_select"
                  class="control-label col-md-4  requiredField"
                >
                  {" "}
                  Use this address for your mailing address?
                  <span class="asteriskField">*</span>{" "}
                </label>
                <div class="controls col-md-8 " styles="margin-bottom: 10px">
                  <label class="radio-inline">
                    <input
                      type="radio"
                      checked="checked"
                      name="select1"
                      id="id_select_1"
                      value="S"
                      styles="margin-bottom: 10px"
                    />{" "}
                    Yes
                  </label>
                  {"    "}
                  <label class="radio-inline">
                    {" "}
                    <input
                      type="radio"
                      name="select1"
                      id="id_select_2"
                      value="P"
                      styles="margin-bottom: 10px"
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label className="sg-Form-label">Email Address</label>
                <div class="col-md-8 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="emailaddress"
                      name="emailaddress"
                      placeholder="Email Address"
                      className="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label className="sg-Form-label">Mobile Number</label>
                <div class="col-md-8 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="mobilenumber"
                      name="mobilenumber"
                      placeholder="Mobile Number"
                      class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <button type="button" class="sg-Btn-sec btn-default">
                  <i class="sg-call-to-action " /> Add an alternate contact
                  number
                </button>
              </div>

              <button
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
export default Pagebody;
