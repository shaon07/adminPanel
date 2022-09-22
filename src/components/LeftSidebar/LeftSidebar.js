/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import SideMenu from "../SideMenu.js/SideMenu";
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div class="leftside-menu">

      {/* <!-- Logo Light --> */}
      <a href="index.html" class="logo logo-light">
        <span class="logo-lg">
          <img src={require('../../assets/images/logo.png')} alt="logo" height="22" />
        </span>
        <span class="logo-sm">
          <img src="images/logo-sm.png" alt="small logo" height="22" />
        </span>
      </a>

      {/* <!-- Logo Dark --> */}
      <a href="index.html" class="logo logo-dark">
        <span class="logo-lg">
          <img src="images/logo-dark.png" alt="dark logo" height="22" />
        </span>
        <span class="logo-sm">
          <img src="images/logo-dark-sm.png" alt="small logo" height="22" />
        </span>
      </a>

      {/* <!-- Sidebar Hover Menu Toggle Button --> */}
      <button type="button" class="btn button-sm-hover p-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
        <i class="ri-checkbox-blank-circle-line align-middle"></i>
      </button>

      {/* <!-- Sidebar -left --> */}
      <div class="h-100" id="leftside-menu-container" data-simplebar>
        {/* <!-- Leftbar User --> */}
        <div class="leftbar-user">
          <a href="pages-profile.html">
            <img src={require('../../assets/images/avatar-1.jpg')} alt="user-image" height="42" class="rounded-circle shadow-sm" />
            <span class="leftbar-user-name">Dominic Keller</span>
          </a>
        </div>

        {/* <!--- Sidemenu --> */}
        <SideMenu />
        {/* <!--- End Sidemenu --> */}

        {/* <!-- Help Box --> */}

        <div class="clearfix"></div>
      </div>
    </div>
  )
}

export default LeftSidebar