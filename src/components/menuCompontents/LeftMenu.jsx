import React from 'react'
import '../../styles/Menu/LeftMenu.css'





class LeftMenu extends React.Component {
    render() {
      return(
        <nav className="left-menu">
            <ul className="inbox-list">
            <li className="item active">
                <span className="label">Inbox</span>
                <span className="count">3</span>
            </li>
            <li className="item">
                <span className="label">Starred</span>
                <span className="count">2</span>
            </li>

            <li className="item toggle">
                <label htmlFor="hide-read">Hide read</label>
                <input id="hide-read" type="checkbox" defaultChecked={false} />
            </li>
            </ul>
        </nav>
        ) 
      
      }
    }

    export default LeftMenu;