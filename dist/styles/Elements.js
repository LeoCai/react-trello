'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelButton = exports.AddButton = exports.DeleteIcon = exports.DeleteWrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n'], ['\n  text-align: center;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  opacity: 0;\n  overflow: hidden;\n  border: 1px solid #83bd42;\n  border-radius: 50%;\n  padding: 4px;\n  background-color: #83bd42;\n\n  ', ':hover & {\n    opacity: 1;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background: red;\n  }\n\n  &:before,\n  &:after {\n    content: \'\';\n    position: absolute;\n    height: 2px;\n    width: 60%;\n    top: 45%;\n    left: 20%;\n    background: #fff;\n    border-radius: 5px;\n  }\n\n  &:before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n'], ['\n  position: relative;\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  opacity: 0;\n  overflow: hidden;\n  border: 1px solid #83bd42;\n  border-radius: 50%;\n  padding: 4px;\n  background-color: #83bd42;\n\n  ', ':hover & {\n    opacity: 1;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background: red;\n  }\n\n  &:before,\n  &:after {\n    content: \'\';\n    position: absolute;\n    height: 2px;\n    width: 60%;\n    top: 45%;\n    left: 20%;\n    background: #fff;\n    border-radius: 5px;\n  }\n\n  &:before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: #5aac44;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 8px;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\t\n  margin-bottom: 0;\n'], ['\n  background: #5aac44;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 8px;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\t\n  margin-bottom: 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background: #999999;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\t\n  margin-bottom: 0;\n'], ['\n  background: #999999;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\t\n  margin-bottom: 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Base = require('./Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteWrapper = exports.DeleteWrapper = _styledComponents2.default.div(_templateObject);

var DeleteIcon = exports.DeleteIcon = _styledComponents2.default.span(_templateObject2, _Base.CardWrapper);

var AddButton = exports.AddButton = _styledComponents2.default.button(_templateObject3);

var CancelButton = exports.CancelButton = _styledComponents2.default.button(_templateObject4);