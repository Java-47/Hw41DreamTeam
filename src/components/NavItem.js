import React from 'react';
import { changePageContext } from '../utils/constants';
const NavItem = ({itemTitle}) => {
  
  return (
    <changePageContext.Consumer>
      {({changePage}) => (
    <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
      )}
    </changePageContext.Consumer>
      
  )
}

export default NavItem