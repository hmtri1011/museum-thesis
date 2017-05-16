import React from 'react'
import Transform from '../Transform'
import path from 'path'

const PreviewModel = props => {
  const { id, url } = props
  return (
    <div className="modal fade" tabIndex="-1" role="dialog" id={id}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h5 className="modal-title">Preview</h5>
          </div>
          <div className="modal-body">
            <Transform
              src={path.resolve(
                __dirname,
                `loader.html?urlLoader=${encodeURIComponent(url)}`
              )}
              position="relative"
              display="flex"
              height="450px"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewModel
