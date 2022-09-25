import React from 'react'

const DashBoardTitle = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box">
          <div className="page-title-right">
            <form className="d-flex">
              <div className="input-group">
                <input type="text" className="form-control form-control-light" id="dash-daterange" />
                <span className="input-group-text bg-primary border-primary text-white">
                  <i className="mdi mdi-calendar-range font-13"></i>
                </span>
              </div>
              <a href="/" className="btn btn-primary ms-2">
                <i className="mdi mdi-autorenew"></i>
              </a>
              <a href="/" className="btn btn-primary ms-1">
                <i className="mdi mdi-filter-variant"></i>
              </a>
            </form>
          </div>
          <h4 className="page-title">Dashboard</h4>
        </div>
      </div>
    </div>
  )
}

export default DashBoardTitle