import React from 'react'
import '../../Stylesheet/sidebar.css'
// import { Link } from 'react-router-dom'

const Navlinks = ({linkName,path}) => {
  return (
    <div to={path} className="navlink">
        <a className='navigation-links' href="">{linkName}</a>
        <div className="dash"></div>
    </div>
  )
}

export default Navlinks