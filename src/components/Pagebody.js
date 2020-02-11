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
  render() {
    this.state = {
      startDate: new Date()
    };

    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
    return (
      <div>
        <Navbar className="container" color="light" light expand="md">
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Your Details</NavLink>
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
          <h2>Your details</h2>
          <p>
            Please answer all of the below questions, except where indicated as
            optional.
          </p>
          <form>
            <div class="form-group">
              <label class="col-md-4 control-label">Full Name</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user" />
                  </span>
                  <input
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    class="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Last Name</label>
              <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user" />
                  </span>
                  <input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    class="form-control"
                    required="true"
                    value=""
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
                Gender<span class="asteriskField">*</span>{" "}
              </label>
              <div class="controls col-md-8 " styles="margin-bottom: 10px">
                <label class="radio-inline">
                  <input
                    type="radio"
                    checked="checked"
                    name="select"
                    id="id_select_1"
                    value="S"
                    styles="margin-bottom: 10px"
                  />{" "}
                  Male
                </label>
                {"    "}
                <label class="radio-inline">
                  {" "}
                  <input
                    type="radio"
                    name="select"
                    id="id_select_2"
                    value="P"
                    styles="margin-bottom: 10px"
                  />{" "}
                  Female
                </label>
              </div>
            </div>
            <div />

            <div class="form-group">
              <label class="col-md-4 control-label">Date of birth</label>
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
          </form>
        </div>
      </div>
    );
  }
}
export default Pagebody;
