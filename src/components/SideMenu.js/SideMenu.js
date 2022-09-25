/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { sideMenu } from "../../config/sidemenuList";
import SidebarList from "./SideBarList/SidebarList";

const SideMenu = () => {
  return (
    <ul className="side-nav">

      <li className="side-nav-title side-nav-item">Navigation</li>

      {
        sideMenu.map((item, idx) => {
          return <SidebarList item={item} key={idx} idx={idx} />
        })
      }

      {/* <li className="side-nav-title side-nav-item">Coupon</li>

      <li className="side-nav-item">
        <a href="apps-calendar.html" className="side-nav-link">
          <i className="uil-calender"></i>
          <span> Delivery Zone </span>
        </a>
      </li>

      <li className="side-nav-item">
        <a href="apps-chat.html" className="side-nav-link">
          <i className="uil-comments-alt"></i>
          <span> Chat </span>
        </a>
      </li>

      <li className="side-nav-item">
        <a onClick={() => setShow(!showClass)} data-bs-toggle="collapse" href="#sidebarCrm" aria-expanded={showClass} aria-controls="sidebarCrm" className={`side-nav-link ${showClass ? "collapsed" : ""}`}>
          <i className="uil uil-tachometer-fast"></i>
          <span className="badge bg-danger text-white float-end">New</span>
          <span> Orders </span>
        </a>
        <div className={`collapse ${showClass ? "show" : ""}`} id="sidebarCrm">
          <ul className="side-nav-second-level">
            <li>
              <a href="crm-projects.html">List Orders</a>
            </li>
            <li>
              <a href="crm-orders-list.html">Orders Status</a>
            </li>
          </ul>
        </div>
      </li>

      <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
          <i className="uil-store"></i>
          <span> Ecommerce </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarEcommerce">
          <ul className="side-nav-second-level">
            <li>
              <a href="apps-ecommerce-products.html">Products</a>
            </li>
            <li>
              <a href="apps-ecommerce-products-details.html">Products Details</a>
            </li>
            <li>
              <a href="apps-ecommerce-orders.html">Orders</a>
            </li>
            <li>
              <a href="apps-ecommerce-orders-details.html">Order Details</a>
            </li>
            <li>
              <a href="apps-ecommerce-customers.html">Customers</a>
            </li>
            <li>
              <a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
            </li>
            <li>
              <a href="apps-ecommerce-checkout.html">Checkout</a>
            </li>
            <li>
              <a href="apps-ecommerce-sellers.html">Sellers</a>
            </li>
          </ul>
        </div>
      </li>

      <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
          <i className="uil-envelope"></i>
          <span> Email </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarEmail">
          <ul className="side-nav-second-level">
            <li>
              <a href="apps-email-inbox.html">Inbox</a>
            </li>
            <li>
              <a href="apps-email-read.html">Read Email</a>
            </li>
          </ul>
        </div>
      </li>

      <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" className="side-nav-link">
          <i className="uil-briefcase"></i>
          <span> Projects </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarProjects">
          <ul className="side-nav-second-level">
            <li>
              <a href="apps-projects-list.html">List</a>
            </li>
            <li>
              <a href="apps-projects-details.html">Details</a>
            </li>
            <li>
              <a href="apps-projects-gantt.html">Gantt <span className="badge rounded-pill bg-light text-dark font-10 float-end">New</span></a>
            </li>
            <li>
              <a href="apps-projects-add.html">Create Project</a>
            </li>
          </ul>
        </div>
      </li> */}


      {/* <li className="side-nav-item">
        <a href="apps-file-manager.html" className="side-nav-link">
          <i className="uil-folder-plus"></i>
          <span> File Manager </span>
        </a>
      </li> */}


      {/* <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" className="side-nav-link">
          <i className="uil-copy-alt"></i>
          <span> Pages </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarPages">
          <ul className="side-nav-second-level">
            <li>
              <a href="pages-profile.html">Profile</a>
            </li>
            <li>
              <a href="pages-profile-2.html">Profile 2</a>
            </li>
            <li>
              <a href="pages-invoice.html">Invoice</a>
            </li>
            <li>
              <a href="pages-faq.html">FAQ</a>
            </li>
            <li>
              <a href="pages-pricing.html">Pricing</a>
            </li>
            <li>
              <a href="pages-maintenance.html">Maintenance</a>
            </li>
            <li className="side-nav-item">
              <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth">
                <span> Authentication </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarPagesAuth">
                <ul className="side-nav-third-level">
                  <li>
                    <a href="pages-login.html">Login</a>
                  </li>
                  <li>
                    <a href="pages-login-2.html">Login 2</a>
                  </li>
                  <li>
                    <a href="pages-register.html">Register</a>
                  </li>
                  <li>
                    <a href="pages-register-2.html">Register 2</a>
                  </li>
                  <li>
                    <a href="pages-logout.html">Logout</a>
                  </li>
                  <li>
                    <a href="pages-logout-2.html">Logout 2</a>
                  </li>
                  <li>
                    <a href="pages-recoverpw.html">Recover Password</a>
                  </li>
                  <li>
                    <a href="pages-recoverpw-2.html">Recover Password 2</a>
                  </li>
                  <li>
                    <a href="pages-lock-screen.html">Lock Screen</a>
                  </li>
                  <li>
                    <a href="pages-lock-screen-2.html">Lock Screen 2</a>
                  </li>
                  <li>
                    <a href="pages-confirm-mail.html">Confirm Mail</a>
                  </li>
                  <li>
                    <a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a data-bs-toggle="collapse" href="#sidebarPagesError" aria-expanded="false" aria-controls="sidebarPagesError">
                <span> Error </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarPagesError">
                <ul className="side-nav-third-level">
                  <li>
                    <a href="pages-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="pages-404-alt.html">Error 404-alt</a>
                  </li>
                  <li>
                    <a href="pages-500.html">Error 500</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="pages-starter.html">Starter Page</a>
            </li>
            <li>
              <a href="pages-preloader.html">With Preloader</a>
            </li>
            <li>
              <a href="pages-timeline.html">Timeline</a>
            </li>
          </ul>
        </div>
      </li> */}

      <li className="side-nav-item">
        <a href="landing.html" target="_blank" className="side-nav-link">
          <i className="uil-globe"></i>
          <span className="badge bg-secondary text-light float-end">New</span>
          <span> Landing </span>
        </a>
      </li>

      {/* <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarLayouts" aria-expanded="false" aria-controls="sidebarLayouts" className="side-nav-link">
          <i className="uil-window"></i>
          <span> Layouts </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarLayouts">
          <ul className="side-nav-second-level">
            <li>
              <a href="layouts-horizontal.html" target="_blank">Horizontal</a>
            </li>
            <li>
              <a href="layouts-detached.html" target="_blank">Detached</a>
            </li>
            <li>
              <a href="layouts-full.html" target="_blank">Full View</a>
            </li>
            <li>
              <a href="layouts-hover.html" target="_blank">Hover Menu</a>
            </li>
            <li>
              <a href="layouts-compact.html" target="_blank">Compact</a>
            </li>
            <li>
              <a href="layouts-icon-view.html" target="_blank">Icon View</a>
            </li>
          </ul>
        </div>
      </li> */}

      {/* <li className="side-nav-title side-nav-item mt-1">Components</li> */}

      {/* <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" className="side-nav-link">
          <i className="uil-box"></i>
          <span> Base UI </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarBaseUI">
          <ul className="side-nav-second-level">
            <li>
              <a href="ui-accordions.html">Accordions & Collapse</a>
            </li>
            <li>
              <a href="ui-alerts.html">Alerts</a>
            </li>
            <li>
              <a href="ui-avatars.html">Avatars</a>
            </li>
            <li>
              <a href="ui-badges.html">Badges</a>
            </li>
            <li>
              <a href="ui-breadcrumb.html">Breadcrumb</a>
            </li>
            <li>
              <a href="ui-buttons.html">Buttons</a>
            </li>
            <li>
              <a href="ui-cards.html">Cards</a>
            </li>
            <li>
              <a href="ui-carousel.html">Carousel</a>
            </li>
            <li>
              <a href="ui-dropdowns.html">Dropdowns</a>
            </li>
            <li>
              <a href="ui-embed-video.html">Embed Video</a>
            </li>
            <li>
              <a href="ui-grid.html">Grid</a>
            </li>
            <li>
              <a href="ui-list-group.html">List Group</a>
            </li>
            <li>
              <a href="ui-modals.html">Modals</a>
            </li>
            <li>
              <a href="ui-notifications.html">Notifications</a>
            </li>
            <li>
              <a href="ui-offcanvas.html">Offcanvas</a>
            </li>
            <li>
              <a href="ui-placeholders.html">Placeholders</a>
            </li>
            <li>
              <a href="ui-pagination.html">Pagination</a>
            </li>
            <li>
              <a href="ui-popovers.html">Popovers</a>
            </li>
            <li>
              <a href="ui-progress.html">Progress</a>
            </li>
            <li>
              <a href="ui-ribbons.html">Ribbons</a>
            </li>
            <li>
              <a href="ui-spinners.html">Spinners</a>
            </li>
            <li>
              <a href="ui-tabs.html">Tabs</a>
            </li>
            <li>
              <a href="ui-tooltips.html">Tooltips</a>
            </li>
            <li>
              <a href="ui-typography.html">Typography</a>
            </li>
            <li>
              <a href="ui-utilities.html">Utilities</a>
            </li>
          </ul>
        </div>
      </li> */}

      {/* <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" className="side-nav-link">
          <i className="uil-package"></i>
          <span> Extended UI </span>
          <span className="menu-arrow"></span>
        </a>
        <div className="collapse" id="sidebarExtendedUI">
          <ul className="side-nav-second-level">
            <li>
              <a href="extended-dragula.html">Dragula</a>
            </li>
            <li>
              <a href="extended-range-slider.html">Range Slider</a>
            </li>
            <li>
              <a href="extended-ratings.html">Ratings</a>
            </li>
            <li>
              <a href="extended-scrollbar.html">Scrollbar</a>
            </li>
            <li>
              <a href="extended-scrollspy.html">Scrollspy</a>
            </li>
            <li>
              <a href="extended-treeview.html">Treeview</a>
            </li>
          </ul>
        </div>
      </li> */}

    </ul>
  )
}

export default SideMenu