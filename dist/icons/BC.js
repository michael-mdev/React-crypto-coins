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

var Bc = function Bc(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.777 226.777',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M127.593 100.42c7.294-9.483 5.002-27.329-3.829-33.426-8.832-6.097-18.133-3.047-19.931-1.329-1.798 1.72-1.719 41.736-1.719 41.736s18.184 2.502 25.479-6.981zm1.353 17.039c-6.826-2.97-26.833-2.188-26.833-2.188s-.311 10.108.416 29.023c.731 18.913 7.192 18.809 13.913 19.071 6.724.261 19.541-.209 23.761-16.519 4.22-16.309-4.429-26.418-11.257-29.387z' }),
    _react2.default.createElement('path', { d: 'M113.45.122C50.861.122.122 50.861.122 113.45S50.861 226.777 113.45 226.777s113.327-50.738 113.327-113.327S176.039.122 113.45.122zm46.032 81.566c.312 18.914-16.18 24.229-16.18 24.229s6.722-6.496 6.409-23.134c-.313-16.64-12.817-24.855-12.817-24.855s22.276 4.846 22.588 23.76zm-74.146 88.865l-22.823 1.095v-2.084s13.965-1.408 13.965-25.896v-62.58c0-20.737-13.965-24.334-13.965-24.334V54.88l22.823 1.093v114.58zm36.473 1.172c-9.926.079-28.347-1.276-28.347-1.276V56.131c12.142-.157 16.388-1.798 26.392-.392 10.005 1.405 18.603 11.177 20.947 20.947 2.345 9.769-.155 19.071-3.362 24.15-3.203 5.081-10.238 8.599-10.238 8.599s10.63 3.595 14.383 6.72c3.751 3.127 11.02 11.646 8.206 30.17-2.814 18.523-18.055 25.323-27.981 25.4zm26.38-4.219s10.823-9.224 10.347-27.925c-.478-18.703-10.347-27.49-10.347-27.49s20.358 5.003 20.592 27.278c.235 22.275-20.592 28.137-20.592 28.137z' })
  );
};

Bc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bc;