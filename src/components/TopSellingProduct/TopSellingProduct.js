import React from 'react'
import RecentActivity from "./RecentActivity/RecentActivity"
import TopProduct from "./TopProduct/TopProduct"
import TopSales from "./TopSales/TopSales"

const TopSellingProduct = () => {
  return (
    <div className="row">
      <TopProduct />
      {/* <!-- end col--> */}

      <TopSales />
      {/* <!-- end col--> */}

      <RecentActivity />
      {/* <!-- end col --> */}

    </div>
  )
}

export default TopSellingProduct