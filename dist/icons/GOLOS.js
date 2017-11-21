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

var Golos = function Golos(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M85.102 92.093c15.794-2.007 32.953-9.462 42.787-30.392C138.532 39.05 119.848 3.211 93.43.344c-26.42-2.867-51.403 12.329-54.272 40.14-2.298 22.249 9.763 34.692 16.08 38.133L32.266 94.1c12.347 0 40.201-.402 52.836-2.007zm5.852-80.603c11.022 1.189 18.397 7.874 21.896 11.045.314.284.597.54.848.761l-4.939 5.59-.88-.785-.004-.003c-3.546-3.182-9.228-8.278-17.723-9.195-10.408-1.28-17.702 2.613-22.097 5.229h-.001l-3.819-6.404c4.602-2.736 14.154-7.438 26.719-6.238z' }),
    _react2.default.createElement('path', { d: 'M203.411 137.107c-12.865-7.341-44.222 0-58.293 4.587 5.073-8.792 16.425-31.481 21.25-51.896 5.672-24.001 11.852-34.813 17.585-44.84l.014-.026 1.066-1.866c4.659-8.198 21.659-17.945 29.109-22.219l.352-.202.402-.23c-.616-.034-1.276-.073-1.976-.113-10.998-.638-31.463-1.824-42.533 3.554-8.013 3.893-17.496 19.036-27.71 35.349l-.002.004c-3.329 5.316-6.734 10.755-10.192 15.97-14.071 21.216-37.044 30.104-62.026 34.118-19.986 3.212-49.295-6.69-61.451-12.042.766 4.492 7.179 16.688 26.706 29.532 17.652 11.612 32.45 14.226 39.29 15.434 2.618.463 4.07.72 4.07 1.195 0 18.932-8.614 50.749-31.874 59.924-18.653 7.357-32.176-1.511-36.62-4.425-1.098-.72-1.642-1.077-1.572-.736 3.158 15.482 11.774 20.931 24.695 25.805 12.922 4.874 36.756 5.16 63.175-9.176 7.861-4.266 16.841-10.186 26.32-16.436l.002-.001c22.374-14.751 47.524-31.334 67.291-32.304 14.055-.69 20.154 16.895 22.317 23.131v.002c.533 1.534.826 2.381.941 2.098 7.467-18.352 5.744-45.016-10.336-54.191z' })
  );
};

Golos.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Golos.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Golos;