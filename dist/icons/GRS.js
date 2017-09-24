'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Grs = function Grs(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', {
      className: 'st0',
      d: 'M114.7 149.8c6.7 0 12.3-2.5 16.6-7.6 4.3-5.1 6.5-13 6.5-23.8 0-14.1-3.1-25.1-9.2-33.1-4.5-5.9-10.3-8.8-17.4-8.8-6.6 0-12.1 2.6-16.5 7.8-4.4 5.2-6.7 13.3-6.7 24.1 0 14 3 24.9 9 32.6 4.7 5.9 10.6 8.8 17.7 8.8zm45.5 52.3c-4.6-2-13.7-3.1-27.4-3.5-20-.5-35.3-1.6-46-3.1-4.2 4.5-7.3 8.7-9.4 12.6-2.1 3.9-3.2 7.5-3.2 10.8v.6l.1.3c12.2 4.5 25.4 7 39.2 7 19.3 0 37.5-4.8 53.5-13.4v-.2c0-.4.1-.9.1-1.3-.2-4.6-2.4-7.9-6.9-9.8z'
    }),
    _react2.default.createElement('path', {
      className: 'st0',
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4c0 44 25 82.1 61.7 100.9l.4-.6c1.1-1.5 2.3-3.1 3.7-4.9.6-.8 5.1-5.6 13.6-14.4-4.6-2.7-7.9-5.2-9.8-7.4-1.9-2.2-2.9-4.6-2.9-7.4 0-3.1 1.3-6.7 3.8-10.9S78.9 158.6 88 151c-7.4-3.6-13.2-8.7-17.2-15.2s-6-13.7-6-21.6c0-12.1 4.5-22.4 13.6-31.1 9.1-8.7 20.7-13 34.9-13 11.3 0 21.2 2.7 29.6 8.1 7.5-7.4 13.1-13.6 16.8-18.7 4.9-6.9 7.3-13.2 7.3-18.9 0-4.4-1.3-7.9-4-10.8-2.7-2.8-5.9-4.2-9.6-4.2-3.4 0-6.4 1-9.1 3-2.7 2-4.7 4.9-6 8.7h-1.9c.8-6.3 3-11.1 6.5-14.4 3.5-3.3 7.9-5 13.1-5 5.6 0 10.2 1.8 14 5.4 3.7 3.6 5.6 7.8 5.6 12.7 0 3.5-.8 7-2.4 10.5-2.5 5.5-6.6 11.3-12.2 17.4-8.4 9.2-13.7 14.7-15.8 16.6h18c3.7 0 6.2-.1 7.7-.4 1.5-.3 2.8-.8 4-1.6 1.2-.8 2.2-2 3.1-3.5h1.9l-6.7 17.3h-18.7c4.3 6.2 6.4 13.8 6.4 23 0 11.4-4.3 21.1-13 29.1-8.7 8.1-20.4 12.1-35 12.1-6 0-12.2-.9-18.5-2.7-3.9 3.4-6.5 6.3-7.9 8.8-1.4 2.5-2.1 4.7-2.1 6.5 0 1.5.7 3 2.2 4.4 1.5 1.4 4.3 2.4 8.6 3.1 2.5.4 8.7.7 18.6.9 18.3.4 30.1 1.1 35.5 1.9 8.2 1.2 14.8 4.2 19.8 9.2 4.9 5 7.4 11.1 7.4 18.4v.8c30.2-20.4 50.1-54.9 50.1-94.1C226.8 50.8 176 0 113.4 0z'
    })
  );
};

Grs.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Grs.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Grs;