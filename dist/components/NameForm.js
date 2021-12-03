"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

require("./nameForm.style.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NameForm(props) {
  const [inputs, setInputs] = (0, _react.useState)({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => _objectSpread(_objectSpread({}, values), {}, {
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.whenSubmit(inputs);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "mainForm"
  }, /*#__PURE__*/React.createElement("label", null, "Super Balance: "), /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "superbalnce",
    value: inputs.superbalnce || "",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("label", null, "Retirement Age: "), /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "retirementAge",
    value: inputs.retirementAge || "",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("label", null, "Target Age:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "targetAge",
    value: inputs.targetAge || "",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    className: "submitBtn"
  })));
}

var _default = NameForm;
exports.default = _default;