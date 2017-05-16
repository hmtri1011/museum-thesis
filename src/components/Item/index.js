import React from 'react'
//import Transform from '../Transform'
//import styles from './item.css'
//import path from 'path'
//const url = 'http:///localhost:6060/uploads/dc55305c490c9d993faa5a9cbf678c8b'
import config from '../../config'

{
  /*<div>
      <Transform
        src={path.resolve(__dirname, `loader.html?urlLoader=${urlEncoded}`)}
        width="30%"
        height="30%"
        left={props.left}
      />
    </div>*/
}

const Item = props => {
  //const urlEncoded = encodeURIComponent(url)
  const { category, summary, name, image } = props
  return (
    <div className="inn-sec">
      {' '}<span className="tag">{category}</span>

      <div className="hover-info">
        <div className="position-center-center">
          {' '}
          <a
            href="images/img-2.jpg"
            data-rel="prettyPhoto"
            className="prettyPhoto lightzoom zoom"
          >
            <i className="ion-image" />
          </a>
          {' '}
        </div>
      </div>
      <img
        className="img-responsive"
        src={`${config.hostAPI}/${image}`}
        alt=""
      />
      <div className="detail">
        {' '}<a href="#.">{name}</a>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Item
