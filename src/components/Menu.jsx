import React from 'react';
import "./Menu.css"

const Menu = ({display}) => {
  return (
    
        <ul style={{display}} className='menu-list'>
            <li style={{marginTop:0}}><strong>Sign up</strong></li>
            <li style={{borderBottom:"2px solid #ddd",paddingBottom:"22px"}}>Log in</li>
            <li>Host your Home</li>
            <li>Host an experience</li>
            <li style={{marginBottom:"100px"}}>Help</li>
        </ul>
    
  )
}

export default Menu