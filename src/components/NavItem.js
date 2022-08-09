import React from 'react';
import { ChangePageContext } from '../utils/constants';
const NavItem = ({itemTitle}) => {
  
  return (
    <ChangePageContext.Consumer>
      {({changePage}) => (
    <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
      )}
    </ChangePageContext.Consumer>
      
  )
}

export default NavItem