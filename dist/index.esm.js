function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { compose, space, layout, color, flexbox } from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
/** @jsx jsx */

import { jsx } from '@styled-system/jsx';
var propTypes = {
  mp4: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ogg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  webm: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  m3u8: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  vime0: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  imageVideo: PropTypes.string,
  objectFit: PropTypes.string,
  justifyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alignItems: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
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
var Wrapper = styled('div', {
  shouldForwardProp: shouldForwardProp
})({
  display: "flex"
}, compose(space, layout, color, flexbox));
var Video = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
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

  return jsx(React.Fragment, null, (mp4 || ogg || webm || m3u8 || vimeo) && jsx(Wrapper, _extends({
    ref: ref
  }, props, {
    css: css({
      objectFit: objectFit
    })
  }), (mp4 || ogg || webm || m3u8) && jsx("video", {
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
    css: css(_extends({
      objectFit: objectFit
    }, props))
  }, mp4 && jsx("source", {
    src: mp4,
    type: "video/mp4"
  }), ogg && jsx("source", {
    src: ogg,
    type: "video/ogg"
  }), webm && jsx("source", {
    src: webm,
    type: "video/webm"
  }), m3u8 && jsx("source", {
    src: m3u8,
    type: "application/x-mpegURL"
  })), vimeo && jsx("iframe", {
    margin: 0,
    src: vimeo + "?autoplay=1&loop=1&muted=1&autopause=0",
    width: "100%",
    height: "auto",
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    css: css(_extends({}, props))
  })));
});
Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
export default Video;
