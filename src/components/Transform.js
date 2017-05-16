import React from 'react'
import PropTypes from 'prop-types'

const ReactFrame = props => {
  return React.createElement('iframe', {
    frameBorder: '0',
    src: props.src,
    target: '_parent',
    allowFullScreen: props.allowFullScreen || false,
    style: Object.assign(
      {},
      {
        position: props.position || 'absolute',
        display: props.display || 'block',
        height: props.height || '100%',
        width: props.width || '100%'
      },
      props.styles || {}
    ),
    height: props.height || '100%',
    width: props.width || '100%'
  })
}

ReactFrame.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  position: PropTypes.string,
  display: PropTypes.string,
  height: PropTypes.string,
  styles: PropTypes.object,
  allowFullScreen: PropTypes.bool
}

export default ReactFrame
