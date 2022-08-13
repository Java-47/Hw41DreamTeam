import React from 'react'

const NavItem = ({ itemTitle, changePage }) => {
  return (
    <li
      onClick={() => window.location.hash = `#/${itemTitle.route}`}
      className="nav-item btn btn-danger mx-1">
      {itemTitle.title}
      {/* <a href={`#/${itemTitle.route}`}></a> */}     
    </li>
  )
}

export default NavItem