"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

var _css = _interopRequireDefault(require("@styled-system/css"));

var _shouldForwardProp = _interopRequireDefault(require("@styled-system/should-forward-prop"));

var _jsx = require("@styled-system/jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  mp4: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  ogg: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  webm: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  m3u8: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  vime0: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  imageVideo: _propTypes["default"].string,
  objectFit: _propTypes["default"].string,
  justifyContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  alignItems: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array])
};
var defaultProps = {
  mp4: "",
  ogg: "",
  webm: "",
  m3u8: "",
  vimeo: "",
  imageVideo: "",
  justifyContent: "center",
  alignItems: "center",
  controls: false
};
var Wrapper = (0, _styled["default"])('div', {
  shouldForwardProp: _shouldForwardProp["default"]
})({
  display: "flex"
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.color, _styledSystem.flexbox));

var Video = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var mp4 = _ref.mp4,
      ogg = _ref.ogg,
      webm = _ref.webm,
      m3u8 = _ref.m3u8,
      vimeo = _ref.vimeo,
      imageVideo = _ref.imageVideo,
      objectFit = _ref.objectFit,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      controls = _ref.controls,
      props = _objectWithoutPropertiesLoose(_ref, ["mp4", "ogg", "webm", "m3u8", "vimeo", "imageVideo", "objectFit", "justifyContent", "alignItems", "controls"]);

  return (0, _jsx.jsx)(_react["default"].Fragment, null, (mp4 || ogg || webm || m3u8 || vimeo) && (0, _jsx.jsx)(Wrapper, _extends({
    ref: ref
  }, props, {
    css: (0, _css["default"])({
      objectFit: objectFit
    })
  }), (mp4 || ogg || webm || m3u8) && (0, _jsx.jsx)("video", {
    mp4: mp4,
    ogg: ogg,
    webm: webm,
    m3u8: m3u8,
    preload: "true",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    controls: true,
    poster: imageVideo,
    width: "100%",
    css: (0, _css["default"])(_extends({
      objectFit: objectFit
    }, props))
  }, mp4 && (0, _jsx.jsx)("source", {
    src: mp4,
    type: "video/mp4"
  }), ogg && (0, _jsx.jsx)("source", {
    src: ogg,
    type: "video/ogg"
  }), webm && (0, _jsx.jsx)("source", {
    src: webm,
    type: "video/webm"
  }), m3u8 && (0, _jsx.jsx)("source", {
    src: m3u8,
    type: "application/x-mpegURL"
  })), vimeo && (0, _jsx.jsx)("iframe", {
    margin: 0,
    src: vimeo + "?autoplay=1&loop=1&muted=1&autopause=0",
    width: "100%",
    height: "auto",
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    css: (0, _css["default"])(_extends({}, props))
  })));
});

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
var _default = Video;
exports["default"] = _default;