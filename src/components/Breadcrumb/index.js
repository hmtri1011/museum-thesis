import React from 'react'

const Breadcrumb = props => {
  const { location, pageName, pageSummary } = props
  const isAdmin = location === 'admin'
  const isNested = location !== '' && !isAdmin
  return (
    <div>
      <section
        className="sub-bnr sub-contact"
        data-stellar-background-ratio="0.3"
      >
        <div className="overlay-gr">
          <div className="container">
            <h2>{pageName}</h2>
            <p>
              {pageSummary}
            </p>
          </div>
        </div>
      </section>

      <ol className="breadcrumb">
        {!isAdmin
          ? <li><a href="#.">Home</a></li>
          : <li><a href="#.">Admin</a></li>}
        {isNested && <li className="active">{props.location}</li>}
      </ol>
    </div>
  )
}

export default Breadcrumb
