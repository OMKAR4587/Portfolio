import React from 'react'
import '../../Stylesheet/sidebar.css'

const Navlinks = ({linkName}) => {
  return (
    <div className="navlink">
        <a className='navigation-links' href="">{linkName}</a>
        <div className="dash"></div>
    </div>
  )
}

export default Navlinks