import React from 'react'
import Header from '../../components/header'
import Breadcrumb from '../../components/Breadcrumb'
import ListItem from '../../components/ListItem'

const Gallery = () => {
  const location = document.location.pathname.slice(1)
  return (
    <div>
      <Header />
      <Breadcrumb
        pageName="Gallery"
        pageSummary="This is Gallery"
        location={location}
      />
      <div className="content">
        <section className="sec-100px gallery bg-white">
          <div className="container">
            <ListItem />
            <ul className="pagination">
              <li><a href="#.">1</a></li>
              <li><a href="#.">2</a></li>
              <li><a href="#.">3</a></li>
              <li><a href="#.">4</a></li>
              <li><a href="#.">Next</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gallery
