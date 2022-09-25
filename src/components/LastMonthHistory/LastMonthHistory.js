import React from 'react';
import { LastMonthHistoryData } from "../../config/lastMonthHistory";

const LastMonthHistory = () => {
  return (
    <div className="col-xl-5 col-lg-6">

      <div className="row">
        {
          LastMonthHistoryData.map(({ title, userCount, staticPoint, statics }, idx) => {
            return (
              <div className="col-6" key={idx}>
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-account-multiple widget-icon"></i>
                    </div>
                    <h5 className="text-muted fw-normal mt-0" title="Number of Customers">{title}</h5>
                    <h3 className="mt-3 mb-3">{userCount}</h3>
                    <p className="mb-0 text-muted">
                      <span className={`text-${statics === "up" ? "success" : "danger"} me-2`}><i className={`mdi mdi-arrow-${statics}-bold`}></i>{staticPoint}</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default LastMonthHistory