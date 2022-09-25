import React from 'react'

const TopSales = () => {
  return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
      <div className="card">
        <div className="d-flex card-header justify-content-between align-items-center">
          <h4 className="header-title">Total Sales</h4>
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
          <div id="average-sales" className="apex-charts mb-4 mt-2" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"></div>


          <div className="chart-widget-list">
            <p>
              <i className="mdi mdi-square text-primary"></i> Direct
              <span className="float-end">$300.56</span>
            </p>
            <p>
              <i className="mdi mdi-square text-danger"></i> Affilliate
              <span className="float-end">$135.18</span>
            </p>
            <p>
              <i className="mdi mdi-square text-success"></i> Sponsored
              <span className="float-end">$48.96</span>
            </p>
            <p className="mb-0">
              <i className="mdi mdi-square text-warning"></i> E-mail
              <span className="float-end">$154.02</span>
            </p>
          </div>
        </div>
        {/* <!-- end card-body--> */}
      </div>
      {/* <!-- end card--> */}
    </div>
  )
}

export default TopSales