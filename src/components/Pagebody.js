import React from "react";
import { createPost } from "../actions/Index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
      mobilenumber: "",
      disply: true,
      enableAltCont: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alternateContact = this.alternateContact.bind(this);
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
      this.setState({
        disply: false
      });
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
  alternateContact = () => {
    this.setState({
      enableAltCont: true
    });
  };
  render() {
    const styleObject = {
      height: "25px"
    };
    const displayno = {
      display: this.state.enableAltCont ? "block" : "none"
    };
    const displayaltbutton = {
      display: this.state.enableAltCont ? "none" : "block"
    };
    return (
      <div className="sg-main ">
        <div className="container">
          <h5>Your details</h5>
          <p>
            Please answer all of the below questions, except where indicated as
            optional.
          </p>
          <form onSubmit={this.handleSubmit} className="form-group column">
            <div class="sg-Form-question">
              <label class="sg-Form-label" for="first-name">
                First name
              </label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="first-name"
                inputmode="latin-name"
                maxlength="50"
                requirederrorkey="USER_FIRST_NAME_REQUIRED"
                ng-model="customerDetail.firstName"
                ng-disabled="acquireExisting"
                validationdisabled="true"
                validation="field-required first-name field-length"
                autocomplete="off"
                elementid="0.5279141440573916"
                onChange={this.handleChange}
              />
            </div>

            <div class="sg-Form-question">
              <label class="sg-Form-label" for="last-name">
                Last name
              </label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="last-name"
                inputmode="latin-name"
                maxlength="50"
                min-length="2"
                requirederrorkey="USER_LAST_NAME_REQUIRED"
                ng-model="customerDetail.lastName"
                ng-disabled="acquireExisting"
                validationdisabled="true"
                validation="field-required last-name field-length min-field-length"
                autocomplete="off"
                elementid="0.8915857547482979"
                onChange={this.handleChange}
              />
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

            <div class="sg-Form-question">
              <label className="sg-Form-label">Date of birth</label>

              <DatePicker
                class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="dob"
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleOnChange}
              />
            </div>

            <div class="sg-Form-question" ng-show="!tfnSupplied()">
              <label class="sg-Form-label" for="taxFileNumber">
                Tax File number (optional)
              </label>
              <input
                id="taxFileNumber"
                type="text"
                class="sg-Input sg-u-widthLarger ssp-tfn ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="taxFileNumber"
                validation="tfn-format"
                placeholder="9 digits"
                ng-model="customerDetail.tfnNumber"
                ng-trim="false"
                optional="true"
                maxlength="9"
                autocomplete="off"
                elementid="0.11780298440406956"
              />
              <div class="sg-Validation-errorWrapper validation-select-occupation" />
              <p class="sg-Form-helpText">
                You can find your TFN on your tax return or you can call ATO 13
                28 61 Mon-Fri 8am-6pm
              </p>
              <div class="sg-Accordion">
                <button
                  type="button"
                  class="sg-Accordion-label js-Accordion"
                  id="tfn_accordion_link"
                  aria-selected="false"
                  aria-controls="tfn_accordion_content"
                  role="tab"
                >
                  Why do you need my TFN?
                </button>

                <div
                  id="tfn_accordion_content"
                  class="sg-Accordion-content is-closed sg-Type--size14"
                  aria-expanded="false"
                  aria-labelledby="tfn_accordion_link"
                  data-animate="true"
                  role="tabpanel"
                >
                  {/* <!-- ngIf: GLOBAL_CONFIG.static_variable.product_type.isEDSSuper(productType) --><div ng-if="GLOBAL_CONFIG.static_variable.product_type.isEDSSuper(productType)" class="ng-scope"> */}
                  <p>
                    It's not compulsory to provide your TFN. If you don't wish
                    to provide it to us now, you can give it to us online after
                    you've set-up your account. But providing us with your TFN
                    means:
                  </p>

                  <ul class="sg-List-unordered">
                    <li>
                      We can accept all types of contributions into your
                      Everyday Super account
                    </li>
                    <li>
                      Tax on contributions to your superannuation account/s will
                      not increase
                    </li>
                    <li>
                      No additional tax will be deducted when you start drawing
                      down your super (other than taxes that may ordinarily
                      apply)
                    </li>
                    <li>
                      It will make it easier to trace different super accounts
                      in your name so you receive all your super on retirement.
                    </li>
                  </ul>
                  {/* </div><!-- end ngIf: GLOBAL_CONFIG.static_variable.product_type.isEDSSuper(productType) -->
                        <!-- ngIf: GLOBAL_CONFIG.static_variable.product_type.isEDSPension(productType) --> */}
                </div>
              </div>
            </div>

            <div
              class="sg-Form-question"
              ng-show="GLOBAL_CONFIG.static_variable.product_type.isEDSSuper(productType)"
            >
              <label class="sg-Form-label" for="select-occupation">
                Occupation
              </label>
              <input
                type="text"
                class="sg-Input validation-field sg-u-widthLarger ng-pristine ng-untouched ng-valid ng-isolate-scope ui-autocomplete-input ng-empty"
                id="select-occupation"
                name="select-occupation"
                ng-model="customerDetail.occupation"
                ng-model-options="{updateOn: 'blur'}"
                placeholder="Start typing and select from list"
                ssp-autocomplete-occupation=""
                requirederrorkey="OCCUPATION_REQUIRED"
                validation="field-required valid-occupation"
                autocomplete="off"
                elementid="0.8771686093390343"
              />
              <div class="sg-Validation-errorWrapper validation-select-occupation" />

              <p class="sg-Form-helpText">
                If you can't find your occupation, please select the closest
                match. If you have more than one job, choose the one you spend
                the most time doing per week.
              </p>
              <div class="sg-Accordion">
                <button
                  type="button"
                  class="sg-Type--link sg-Accordion-label js-Accordion"
                  id="occupation_accordion_link"
                  aria-selected="false"
                  aria-controls="occupation_accordion_content"
                  role="tab"
                >
                  Why do you need my occupation?
                </button>

                <div
                  id="occupation_accordion_content"
                  class="sg-Accordion-content is-closed sg-Type--size14"
                  aria-expanded="false"
                  aria-labelledby="occupation_accordion_link"
                  data-animate="true"
                  role="tabpanel"
                >
                  <p>
                    It's used to work out what level of insurance cover you're
                    eligible for, as part of your super. We are required to
                    offer you insurance with your super account. However, if
                    you're eligible for insurance cover, you can easily change
                    or cancel your cover once your super is setup.
                  </p>
                  <p>
                    Please note if you work in a hazardous occupation e.g
                    underground miner, abalone diver or with explosives,
                    insurance cover won't be included as part of your super. For
                    questions please refer to the insurance section of the
                    Everyday Super
                    <a
                      ng-href="http://www.suncorp.com.au/super/sites/default/files/pdf/pds%20and%20forms/suncorp-everyday-super-product-guide.pdf"
                      target="_blank"
                      href="http://www.suncorp.com.au/super/sites/default/files/pdf/pds%20and%20forms/suncorp-everyday-super-product-guide.pdf"
                    >
                      Product Guide
                    </a>
                    (page 24) or call us on
                    <a
                      class="no-decoration ng-binding"
                      styles="cursor: inherit;"
                    >
                      1800 191 517
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div id="before-appbar" />
            <h5>Contact Details</h5>

            <div class="sg-Form-question">
              <label class="sg-Form-label">Address line 1</label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="residentialAddressLine1"
                placeholder="E.g Unit 2 108 Plaxis St"
                maxlength="150"
                ng-model="customerDetail.residentialAddress.line1"
                validation="field-required address-line-format field-length"
                requirederrorkey="ADDRESS_REQUIRED"
                ng-trim="false"
                autocomplete="off"
                elementid="0.15943002330401335"
              />

              <p class="sg-Form-helpText">
                Sorry we can't accept PO boxes for a residential address.
                However they can be used for your mailing address
              </p>
            </div>

            <div class="sg-Form-question">
              <label class="sg-Form-label">Address line 2 (optional)</label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="residentialAddressLine2"
                maxlength="50"
                placeholder="Apartment, Suite, unit, building, floor, etc."
                ng-model="customerDetail.residentialAddress.line2"
                validation="address-line-format field-length"
                optional="true"
                ng-trim="false"
                autocomplete="off"
                elementid="0.9992514393632312"
              />
            </div>

            <div class="sg-Form-question ">
              <label
                class="sg-Form-label"
                for="residentialAddressSuburbPostcodeState"
              >
                Suburb or postcode
              </label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger validation-field ng-pristine ng-untouched ui-autocomplete-input ng-empty ng-invalid ng-invalid-required ng-valid-maxlength"
                id="residentialAddressSuburbPostcodeState"
                name="residentialAddressSuburbPostcodeState"
                ng-model="customerDetail.residentialAddress.suburbPostcodeState"
                ng-model-options="{updateOn: 'blur'}"
                maxlength="60"
                placeholder="Start typing and select from list"
                data-required=""
                postcode-validation=""
                ssp-autocomplete=""
                autocomplete="off"
              />
              <field-error
                field="residentialAddressSuburbPostcodeState"
                class="ng-scope"
              />
            </div>

            <div class="sg-Form-question">
              <label id="sameAsPostal" class="sg-Form-label">
                Use this address for your mailing address?
              </label>
              <div
                ng-form="widget"
                id="sameAsPostal"
                name="sameAsPostal"
                btn-group="true"
                ng-model="customerDetail.sameAsPostalAddress"
                values="[{name: 'Yes', value: 'yes'}, {name: 'No', value: 'no'}]"
                btn-size="xsmall"
                class="ng-valid ng-isolate-scope ng-not-empty ng-valid-required ng-dirty ng-valid-parse"
              >
                <ng-transclude />

                <div
                  id="customerDetail_sameAsPostalAddress--buttons"
                  class="sg-Radio-btnGroup sg-Radio-btnGroup--xsmall"
                  role="radiogroup"
                  aria-labelledby="customerDetail_sameAsPostalAddress--label"
                >
                  <label
                    class="sg-Radio sg-Radio-btn sg-Radio-btn--stacked ng-scope"
                    ng-class="{'sg-Radio-btnGroup sg-Radio-btnGroup--xsmall' : sizeType === 'label'}"
                    ng-repeat="value in radioValues"
                  >
                    <input
                      id="customerDetail_sameAsPostalAddress_yes"
                      class="sg-Radio-input ng-valid ng-not-empty ng-valid-required user-success ng-dirty ng-valid-parse ng-touched"
                      type="radio"
                      name="sameAsPostal"
                      ng-model="$parent.ngModel"
                      ng-value="value"
                      ng-disabled="false"
                      ng-change="onChange(value, 'yes');"
                      tabindex="0"
                      ng-required="false"
                      value="yes"
                    />
                    <i class="sg-Radio-icon" />
                    <span
                      class="sg-Radio-text ng-binding"
                      ng-class="{'sg-Radio-btnGroup sg-Radio-btnGroup--xsmall' : sizeType === 'label'}"
                    >
                      Yes
                    </span>
                  </label>
                  <label
                    class="sg-Radio sg-Radio-btn sg-Radio-btn--stacked ng-scope"
                    ng-class="{'sg-Radio-btnGroup sg-Radio-btnGroup--xsmall' : sizeType === 'label'}"
                    ng-repeat="value in radioValues"
                  >
                    <input
                      id="customerDetail_sameAsPostalAddress_no"
                      class="sg-Radio-input ng-valid ng-not-empty ng-valid-required ng-dirty user-success ng-touched"
                      type="radio"
                      name="sameAsPostal"
                      ng-model="$parent.ngModel"
                      ng-value="value"
                      ng-disabled="false"
                      ng-change="onChange(value, 'yes');"
                      tabindex="0"
                      ng-required="false"
                      value="no"
                    />
                    <i class="sg-Radio-icon" />
                    <span
                      class="sg-Radio-text ng-binding"
                      ng-class="{'sg-Radio-btnGroup sg-Radio-btnGroup--xsmall' : sizeType === 'label'}"
                    >
                      No
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="sg-Form-question">
              <label class="sg-Form-label">Email address</label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                ng-model="customerDetail.emailAddress.line1"
                name="email"
                validation="field-required email-format field-length"
                maxlength="60"
                requirederrorkey="EMAIL_REQUIRED"
                ng-trim="false"
                autocomplete="off"
                elementid="0.3648958252198611"
              />
            </div>

            <div class="sg-Form-question">
              <label class="sg-Form-label">Mobile number</label>
              <input
                type="text"
                class="sg-Input sg-u-widthLarger ssp-input-number ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                name="mobileNumber"
                ng-model="customerDetail.mobileNumber"
                validation="phone-number-required mobile-number-format"
                requirederrorkey="PHONE_REQUIRED"
                maxlength="20"
                ng-trim="false"
                autocomplete="off"
                elementid="0.8614225441307772"
              />
            </div>

            <div className="form-group" style={displayaltbutton}>
              <button
                type="button"
                onClick={this.alternateContact}
                className="sg-Btn-sec btn-default"
              >
                <i className="sg-Btn-icon">
                  <span>
                    <img
                      style={styleObject}
                      src="https://super.suncorp.com.au/ssp/sg/img//Icon-plus--secondary.svg"
                      alt="Suncorp"
                    />
                  </span>
                </i>
                Add an alternate contact number
              </button>
            </div>
            <div id="altcontact" style={displayno}>
              <div class="sg-Form-question" ng-show="isAlternateContact()">
                <label class="sg-Form-label"> Work number (optional)</label>
                <input
                  type="text"
                  class="sg-Input sg-u-widthLarger ssp-input-number ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                  name="workNumber"
                  ng-model="customerDetail.workNumber"
                  validation="fix-line-number-format"
                  optional="true"
                  maxlength="20"
                  ng-trim="false"
                  autocomplete="off"
                  elementid="0.9751602913727455"
                />
              </div>
              <div class="sg-Form-question" ng-show="isAlternateContact()">
                <label class="sg-Form-label"> Home number (optional)</label>
                <input
                  type="text"
                  class="sg-Input sg-u-widthLarger ssp-input-number ctHidden ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                  name="homeNumber"
                  ng-model="customerDetail.homeNumber"
                  optional="true"
                  validation="fix-line-number-format"
                  maxlength="20"
                  ng-trim="false"
                  autocomplete="off"
                  elementid="0.8233781411367695"
                />
              </div>
            </div>
            <button
              onClick={this.props.onTitleChange}
              type="submit"
              className="btn btn-warning sg-Btn"
              id="acquire_your_detail_continue"
            >
              Continue
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
}
Pagebody.PropTypes = {
  onTitleChange: PropTypes.func
};
//export default Pagebody;
export default connect(null)(Pagebody);
