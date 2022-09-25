/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */


import React from 'react'
import DashBoardTitle from "../../components/DashboardTitle/DashBoardTitle"
import LastMonthHistory from '../../components/LastMonthHistory/LastMonthHistory'
import Performance from "../../components/Performance/Performance"
import ProductStock from "../../components/ProductStock/ProductStock"
import TopSellingProduct from '../../components/TopSellingProduct/TopSellingProduct'


const HomeScreen = () => {
  return (
    <div className="content-page">
      <div className="content">

        {/* <!-- Start Content--> */}
        <div className="container-fluid">

          <DashBoardTitle />

          <div className="row">
            <LastMonthHistory />
            {/* <!-- end col --> */}

            <ProductStock />
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}

          <Performance />
          {/* <!-- end row --> */}

          <TopSellingProduct />
          {/* <!-- end row --> */}

        </div>
        {/* <!-- container --> */}

      </div>
      {/* <!-- content --> */}


    </div>
  )
}

export default HomeScreen