import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { compose, space, layout, color, flexbox } from 'styled-system'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
/** @jsx jsx */
import { jsx } from '@styled-system/jsx'

const propTypes = {
  mp4: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ogg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  webm: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  m3u8: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  vime0: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  imageVideo: PropTypes.string,
  objectFit: PropTypes.string,
  justifyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alignItems: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

const defaultProps = {
  mp4: ``,
  ogg: ``,
  webm: ``,
  m3u8: ``,
  vimeo: ``,
  imageVideo: ``,
  justifyContent: `center`,
  alignItems: `center`,
  controls: false,
}

const Wrapper = styled('div', {
  shouldForwardProp,
})(
  {
    display: `flex`,
  },
  compose(space, layout, color, flexbox)
)

const Video = React.forwardRef(
  (
    {
      mp4,
      ogg,
      webm,
      m3u8,
      vimeo,
      imageVideo,
      objectFit,
      justifyContent,
      alignItems,
      controls,
      ...props
    },
    ref
  ) => (
    <>
      {(mp4 || ogg || webm || m3u8 || vimeo) && (
        <Wrapper
          ref={ref}
          {...props}
          css={css({
            objectFit: objectFit,
          })}
        >
          {(mp4 || ogg || webm || m3u8) && (
            <video
              mp4={mp4}
              ogg={ogg}
              webm={webm}
              m3u8={m3u8}
              preload="true"
              autoPlay
              muted
              loop
              playsInline
              controls={controls}
              poster={imageVideo}
              width="100%"
              css={css({
                objectFit: objectFit,
                ...props,
              })}
            >
              {mp4 && <source src={mp4} type="video/mp4" />}
              {ogg && <source src={ogg} type="video/ogg" />}
              {webm && <source src={webm} type="video/webm" />}
              {m3u8 && <source src={m3u8} type="application/x-mpegURL" />}
            </video>
          )}
          {vimeo && (
            <iframe
              margin={0}
              src={`${vimeo}?autoplay=1&loop=1&muted=1&autopause=0`}
              width="100%"
              height="auto"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              css={css({
                ...props,
              })}
            />
          )}
        </Wrapper>
      )}
    </>
  )
)

Video.propTypes = propTypes
Video.defaultProps = defaultProps

export default Video
