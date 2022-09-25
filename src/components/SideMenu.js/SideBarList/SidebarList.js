/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleUp } from 'react-icons/fa';
import './SidebarList.css';

const SidebarList = ({ item, idx }) => {
  const [showClass, setShow] = useState(false);
  return (
    <li className="side-nav-item" key={idx}>
      <a onClick={() => setShow(!showClass)} data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded={showClass} aria-controls="sidebarDashboards" className={`side-nav-link ${showClass ? "collapsed" : ""}`}>
        {
          item.icon
        }
        <span className=" float-end">
          {
            item.childList.length === 0 ? null :
              showClass ? <FaChevronCircleUp /> : <FaChevronCircleRight />
          }
        </span>
        <span className="categoryHeading"> {item.heading} </span>
      </a>
      <div className={`collapse ${showClass ? "show" : ""}`} id="sidebarDashboards">
        <ul className="side-nav-second-level">
          {
            item.childList.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </li>
  )
}


export default SidebarList