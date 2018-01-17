'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Base = require('../styles/Base');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactDnd = require('react-dnd');

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _DragType = require('../helpers/DragType');

var _reactDom = require('react-dom');

var _NewCard = require('./NewCard');

var _NewCard2 = _interopRequireDefault(_NewCard);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var laneActions = require('../actions/LaneActions');

var CARD_HEIGHT = 66;
var CARD_MARGIN = 10;
var OFFSET_HEIGHT = 15;

var Lane = function (_Component) {
  (0, _inherits3.default)(Lane, _Component);

  function Lane() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Lane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Lane.__proto__ || (0, _getPrototypeOf2.default)(Lane)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      currentPage: _this.props.currentPage,
      cards: _this.props.cards,
      placeholderIndex: -1,
      shouldUpdate: true,
      addCardMode: false
    }, _this.handleScroll = function (evt) {
      var node = evt.target;
      var elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      var onLaneScroll = _this.props.onLaneScroll;

      if (elemScrolPosition <= 0 && onLaneScroll && !_this.state.loading) {
        var currentPage = _this.state.currentPage;

        _this.setState({ loading: true });
        var nextPage = currentPage + 1;
        onLaneScroll(nextPage, _this.props.id).then(function (moreCards) {
          if (!moreCards || moreCards.length === 0) {
            // if no cards present, stop retrying until user action
            node.scrollTop = node.scrollTop - 50;
          } else {
            _this.props.actions.paginateLane({ laneId: _this.props.id, newCards: moreCards, nextPage: nextPage });
          }
          _this.setState({ loading: false });
        });
      }
    }, _this.laneDidMount = function (node) {
      if (node) {
        node.addEventListener('scroll', _this.handleScroll);
      }
    }, _this.moveCard = function (dragIndex, hoverIndex) {
      var cards = _this.state.cards;

      var dragCard = cards[dragIndex];

      _this.setState((0, _immutabilityHelper2.default)(_this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      }));
    }, _this.moveCardAcrossLanes = function (fromLaneId, toLaneId, cardId) {
      toLaneId && _this.props.actions.moveCardAcrossLanes({ fromLaneId: fromLaneId, toLaneId: toLaneId, cardId: cardId });
    }, _this.removeCard = function (laneId, cardId) {
      _this.props.actions.removeCard({ laneId: laneId, cardId: cardId });
    }, _this.handleCardClick = function (e, card) {
      var onCardClick = _this.props.onCardClick;

      onCardClick && onCardClick(card.id, card.metadata, card.laneId);
      e.stopPropagation();
    }, _this.showEditableCard = function () {
      _this.setState({ addCardMode: true });
    }, _this.hideEditableCard = function () {
      _this.setState({ addCardMode: false });
    }, _this.addNewCard = function (params) {
      var laneId = _this.props.id;
      var id = (0, _v2.default)();
      _this.hideEditableCard();
      var card = (0, _extends3.default)({}, params, { id: id });
      _this.props.actions.addCard({ laneId: laneId, card: card });
      _this.props.onCardAdd(card, laneId);
    }, _this.renderAddCardLink = function () {
      var addCardLink = _this.props.addCardLink;

      if (addCardLink) {
        return _react2.default.createElement(
          'span',
          { onClick: _this.showEditableCard },
          addCardLink
        );
      } else {
        return _react2.default.createElement(
          _Base.AddCardLink,
          { onClick: _this.showEditableCard },
          'Add Card'
        );
      }
    }, _this.renderNewCard = function () {
      var newCardTemplate = _this.props.newCardTemplate;

      if (newCardTemplate) {
        var newCardWithProps = _react2.default.cloneElement(newCardTemplate, { onCancel: _this.hideEditableCard, onAdd: _this.addNewCard });
        return _react2.default.createElement(
          'span',
          null,
          newCardWithProps
        );
      } else {
        return _react2.default.createElement(_NewCard2.default, { onCancel: _this.hideEditableCard, onAdd: _this.addNewCard });
      }
    }, _this.renderDragContainer = function () {
      var _this$props = _this.props,
          connectDropTarget = _this$props.connectDropTarget,
          laneSortFunction = _this$props.laneSortFunction,
          editable = _this$props.editable,
          tagStyle = _this$props.tagStyle,
          cardStyle = _this$props.cardStyle,
          draggable = _this$props.draggable;
      var addCardMode = _this.state.addCardMode;


      var cardList = _this.sortCards(_this.state.cards, laneSortFunction).map(function (card, idx) {
        return _react2.default.createElement(_Card2.default, (0, _extends3.default)({
          key: card.id,
          index: idx,
          customCardLayout: _this.props.customCardLayout,
          customCard: _this.props.children,
          handleDragStart: _this.props.handleDragStart,
          handleDragEnd: _this.props.handleDragEnd,
          tagStyle: tagStyle,
          cardStyle: cardStyle,
          moveCard: _this.moveCard,
          moveCardAcrossLanes: _this.moveCardAcrossLanes,
          removeCard: _this.removeCard,
          onClick: function onClick(e) {
            return _this.handleCardClick(e, card);
          },
          onDelete: _this.props.onCardDelete,
          draggable: draggable,
          editable: editable
        }, card));
      });

      if (_this.state.placeholderIndex > -1) {
        cardList.splice(_this.state.placeholderIndex, 0, _react2.default.createElement(_Base.Placeholder, { key: 'placeholder' }));
      }

      return connectDropTarget(_react2.default.createElement(
        'div',
        { style: { height: '95%', overflowY: 'auto' } },
        _react2.default.createElement(
          _Base.DraggableList,
          null,
          cardList
        ),
        editable && !addCardMode && _this.renderAddCardLink(),
        addCardMode && _this.renderNewCard()
      ));
    }, _this.renderHeader = function () {
      if (_this.props.customLaneHeader) {
        var customLaneElement = _react2.default.cloneElement(_this.props.customLaneHeader, (0, _extends3.default)({}, _this.props));
        return _react2.default.createElement(
          'span',
          null,
          customLaneElement
        );
      } else {
        var _this$props2 = _this.props,
            title = _this$props2.title,
            label = _this$props2.label,
            titleStyle = _this$props2.titleStyle,
            labelStyle = _this$props2.labelStyle;

        return _react2.default.createElement(
          _Base.Header,
          null,
          _react2.default.createElement(
            _Base.Title,
            { style: titleStyle },
            title
          ),
          label && _react2.default.createElement(
            _Base.RightContent,
            null,
            _react2.default.createElement(
              'span',
              { style: labelStyle },
              label
            )
          )
        );
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Lane, [{
    key: 'sortCards',
    value: function sortCards(cards, sortFunction) {
      if (!cards) return [];
      if (!sortFunction) return cards;
      return cards.concat().sort(function (card1, card2) {
        return sortFunction(card1, card2);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual2.default)(this.props.cards, nextProps.cards)) {
        this.setState({ cards: nextProps.cards, currentPage: nextProps.currentPage });
      }
      if (!nextProps.isOver) {
        this.setState({ placeholderIndex: -1 });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _isEqual2.default)(this.props.cards, nextProps.cards) || nextState !== this.state;
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;
      var _props = this.props,
          id = _props.id,
          onLaneClick = _props.onLaneClick,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['id', 'onLaneClick']);

      return _react2.default.createElement(
        _Base.Section,
        (0, _extends3.default)({}, otherProps, { key: id, innerRef: this.laneDidMount, onClick: function onClick() {
            return onLaneClick && onLaneClick(id);
          } }),
        this.renderHeader(),
        this.renderDragContainer(),
        loading && _react2.default.createElement(_Loader2.default, null)
      );
    }
  }]);
  return Lane;
}(_react.Component);

Lane.propTypes = {
  id: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.node,
  laneSortFunction: _propTypes2.default.func,
  style: _propTypes2.default.object,
  titleStyle: _propTypes2.default.object,
  labelStyle: _propTypes2.default.object,
  cards: _propTypes2.default.array,
  label: _propTypes2.default.string,
  droppable: _propTypes2.default.bool,
  onLaneScroll: _propTypes2.default.func,
  handleDragStart: _propTypes2.default.func,
  handleDragEnd: _propTypes2.default.func,
  onCardClick: _propTypes2.default.func,
  onCardDelete: _propTypes2.default.func,
  onCardAdd: _propTypes2.default.func,
  newCardTemplate: _propTypes2.default.node,
  addCardLink: _propTypes2.default.node,
  editable: _propTypes2.default.bool
};

Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onCardAdd: function onCardAdd() {}
};

var cardTarget = {
  canDrop: function canDrop(props) {
    return props.droppable;
  },
  drop: function drop(props, monitor, component) {
    var id = props.id;

    var draggedObj = monitor.getItem();
    if (id === draggedObj.laneId) {
      props.actions.updateCards({ laneId: id, cards: component.state.cards });
    }
    component.setState({ placeholderIndex: -1 });
    return {
      laneId: id
    };
  },
  hover: function hover(props, monitor, component) {
    var id = props.id;

    var draggedObj = monitor.getItem();
    if (id === draggedObj.laneId) {
      return;
    }
    var placeholderIndex = getPlaceholderIndex(monitor.getClientOffset().y, (0, _reactDom.findDOMNode)(component).scrollTop);

    if (component.state.shouldUpdate) {
      component.setState({ placeholderIndex: placeholderIndex, shouldUpdate: false });
      setTimeout(function () {
        return component.setState({ shouldUpdate: true });
      }, 50);
    }

    return monitor.isOver();

    function getPlaceholderIndex(y, scrollY) {
      // shift placeholder if y position more than card height / 2
      var yPos = y - OFFSET_HEIGHT + scrollY;
      var placeholderIndex = void 0;
      if (yPos < CARD_HEIGHT / 2) {
        placeholderIndex = -1; // place at the start
      } else {
        placeholderIndex = Math.floor((yPos - CARD_HEIGHT / 2) / (CARD_HEIGHT + CARD_MARGIN));
      }
      return placeholderIndex;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(laneActions, dispatch) };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)((0, _reactDnd.DropTarget)(_DragType.DragType.CARD, cardTarget, collect)(Lane));