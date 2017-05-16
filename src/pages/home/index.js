import React from 'react'
import Header from '../../components/header'
import Breadcrumb from '../../components/Breadcrumb'

const Home = () => {
  const location = document.location.pathname.slice(1)
  return (
    <div>
      <Header />
      <Breadcrumb
        pageName="Home"
        pageSummary="This is Homepage"
        location={location}
      />
    </div>
  )
}

export default Home
