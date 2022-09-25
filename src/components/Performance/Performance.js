import React from 'react';
import { performanceData } from "../../config/PerformanceData";
import styles from './Performance.module.css';

const performanceList = [
  {
    title: "Brand",
  }
  ,
  {
    title: "Bundle",
  }
  ,
  {
    title: "Category",
  }
  ,
  {
    title: "Coupon",
  }
  ,
  {
    title: "Page",
  }
  ,
  {
    title: "Product",
  }
  ,
]

const Performance = () => {


  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="d-flex card-header justify-content-between align-items-center">
            <h4 className="header-title">Performance</h4>
            <div className="dropdown">
              <a href="/" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-dots-vertical"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                {/* {
                  performanceList.map((item, idx) => {
                    return (
                      <span className="dropdown-item" key={idx}>{item}</span>
                    )
                  })
                } */}
              </div>
            </div>
          </div>

          <div className={`${styles.performanceDetail}`}>
            <div className="performanceHeading subHeadingStyle px-3 d-flex justify-content-between ">
              <div className="performanceName col-7">
                <p>Name</p>
              </div>
              <div className="performanceInfo d-flex justify-content-evenly col-5">
                <div className="performanceView">
                  <p>View</p>
                </div>
                <div className="performanceDuration">
                  <p>Durations</p>
                </div>
              </div>
            </div>
          </div>


          {
            performanceData.map(({ title, views, duration }, idx) => {
              return (
                <div className={`productListItem`} key={idx}>
                  <div className="performanceListItem px-3 d-flex justify-content-between ">
                    <div className="performanceName col-7">
                      <p>{title}</p>
                    </div>
                    <div className="performanceInfo d-flex justify-content-evenly col-5">
                      <div className="performanceView">
                        <p>{views}</p>
                      </div>
                      <div className="performanceDuration">
                        <p>{duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>


      {/* Location by revenue section */}

      <div className="col-lg-4">
        <div className="card">
          <div className="d-flex card-header justify-content-between align-items-center">
            <h4 className="header-title">Revenue By Location</h4>
            <div className="dropdown">
              <a href="/" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-dots-vertical"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                {/* <!-- item--> */}
                <a href="/" className="dropdown-item">Sales Report</a>
                {/* <!-- item--> */}
                <a href="/" className="dropdown-item">Export Report</a>
                {/* <!-- item--> */}
                <a href="/" className="dropdown-item">Profit</a>
                {/* <!-- item--> */}
                <a href="/" className="dropdown-item">Action</a>
              </div>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="mb-4 mt-3">
              <div id="world-map-markers" style={{ height: "217px" }}></div>
            </div>

            <h5 className="mb-1 mt-0 fw-normal">New York</h5>
            <div className="progress-w-percent">
              <span className="progress-value fw-bold">72k </span>
              <div className="progress progress-sm">
                <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
            <div className="progress-w-percent">
              <span className="progress-value fw-bold">39k </span>
              <div className="progress progress-sm">
                <div className="progress-bar" role="progressbar" style={{ width: "39%" }} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
            <div className="progress-w-percent">
              <span className="progress-value fw-bold">25k </span>
              <div className="progress progress-sm">
                <div className="progress-bar" role="progressbar" style={{ width: "39%" }} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
            <div className="progress-w-percent mb-0">
              <span className="progress-value fw-bold">61k </span>
              <div className="progress progress-sm">
                <div className="progress-bar" role="progressbar" style={{ width: "61%" }} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          {/* <!-- end card-body--> */}
        </div>
        {/* <!-- end card--> */}
      </div>
      {/* <!-- end col--> */}
    </div>
  )
}

export default Performance