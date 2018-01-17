'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCardLink = exports.TagSpan = exports.Footer = exports.Detail = exports.CardRightContent = exports.CardTitle = exports.CardHeader = exports.Placeholder = exports.MovableCardWrapper = exports.CardWrapper = exports.DraggableList = exports.RightContent = exports.Title = exports.Header = exports.Section = exports.BoardDiv = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\t.comPlainTextContentEditable {\n\t\t-webkit-user-modify: read-write-plaintext-only;\n\t}\n\t\n\t.comPlainTextContentEditable--has-placeholder::before {\n\t\tcontent: attr(placeholder);\n\t\topacity: 0.5;\n\t\tcolor: inherit;\n\t\tcursor: text;\n\t}\n'], ['\n\t.comPlainTextContentEditable {\n\t\t-webkit-user-modify: read-write-plaintext-only;\n\t}\n\t\n\t.comPlainTextContentEditable--has-placeholder::before {\n\t\tcontent: attr(placeholder);\n\t\topacity: 0.5;\n\t\tcolor: inherit;\n\t\tcursor: text;\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #23719f;\n  overflow-y: hidden;\n  padding: 5px;\n  font: 14px/18px "Helvetica Neue", Arial, Helvetica, sans-serif;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n'], ['\n  background-color: #23719f;\n  overflow-y: hidden;\n  padding: 5px;\n  font: 14px/18px "Helvetica Neue", Arial, Helvetica, sans-serif;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  padding: 10px;\n  min-width: 250px;\n  height: 95%;\n  overflow-y: auto;\n'], ['\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  padding: 10px;\n  min-width: 250px;\n  height: 95%;\n  overflow-y: auto;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n'], ['\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 100%;\n'], ['\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 100%;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30%;\n  text-align: right;\n  font-size: 13px;\n'], ['\n  width: 30%;\n  text-align: right;\n  font-size: 13px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['min-height: 10px;'], ['min-height: 10px;']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 3px;\n  margin: 10px 0px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding: 6px 8px;\n  cursor: pointer;\n  transition: all .3s cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: #fff;\n  max-width: 250px;\n'], ['\n  border-radius: 3px;\n  margin: 10px 0px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding: 6px 8px;\n  cursor: pointer;\n  transition: all .3s cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: #fff;\n  max-width: 250px;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n\t&:hover {\n    background-color: #f0f0f0;\n  }\n\n  &.is-moving {\n    background-color: rgba(black, 0.8);\n  }\n'], ['\n\t&:hover {\n    background-color: #f0f0f0;\n  }\n\n  &.is-moving {\n    background-color: rgba(black, 0.8);\n  }\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #ccc;\n  margin: 5px 0px;\n  padding: 10px;\n  min-width: 226px;\n  height: 45px;\n  max-height: 95%;\n  overflow-y: auto;\n'], ['\n  background-color: #ccc;\n  margin: 5px 0px;\n  padding: 10px;\n  min-width: 226px;\n  height: 45px;\n  max-height: 95%;\n  overflow-y: auto;\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n'], ['\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n font-size: 14px;\n'], ['\n font-size: 14px;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 10px;\n'], ['\n  font-size: 10px;\n']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 12px;\n  color: #4d4d4d;\n'], ['\n  font-size: 12px;\n  color: #4d4d4d;\n']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n'], ['\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 2px 3px;\n  font-size: 80%;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n'], ['\n  padding: 2px 3px;\n  font-size: 80%;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n\tborder-radius: 0 0 3px 3px;\n\tcolor: #838c91;\n\tdisplay: block;\n\tflex: 0 0 auto;\n\tpadding: 5px 2px;\n\tposition: relative;\n\ttext-decoration: none;\n\tcursor: pointer;\n\t\n\t&:hover {\n\t  //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n\t}\n'], ['\n\tborder-radius: 0 0 3px 3px;\n\tcolor: #838c91;\n\tdisplay: block;\n\tflex: 0 0 auto;\n\tpadding: 5px 2px;\n\tposition: relative;\n\ttext-decoration: none;\n\tcursor: pointer;\n\t\n\t&:hover {\n\t  //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n\t}\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _styledComponents.injectGlobal)(_templateObject);

var BoardDiv = exports.BoardDiv = _styledComponents2.default.div(_templateObject2);

var Section = exports.Section = _styledComponents2.default.section(_templateObject3);

var Header = exports.Header = _styledComponents2.default.header(_templateObject4);

var Title = exports.Title = _styledComponents2.default.span(_templateObject5);

var RightContent = exports.RightContent = _styledComponents2.default.span(_templateObject6);

var DraggableList = exports.DraggableList = _styledComponents2.default.div(_templateObject7);

var CardWrapper = exports.CardWrapper = _styledComponents2.default.article(_templateObject8);

var MovableCardWrapper = exports.MovableCardWrapper = (0, _styledComponents2.default)(CardWrapper)(_templateObject9);

var Placeholder = exports.Placeholder = _styledComponents2.default.section(_templateObject10);

var CardHeader = exports.CardHeader = (0, _styledComponents2.default)(Header)(_templateObject11);

var CardTitle = exports.CardTitle = (0, _styledComponents2.default)(Title)(_templateObject12);

var CardRightContent = exports.CardRightContent = (0, _styledComponents2.default)(RightContent)(_templateObject13);

var Detail = exports.Detail = _styledComponents2.default.div(_templateObject14);

var Footer = exports.Footer = _styledComponents2.default.div(_templateObject15);

var TagSpan = exports.TagSpan = _styledComponents2.default.span(_templateObject16);

var AddCardLink = exports.AddCardLink = _styledComponents2.default.a(_templateObject17);