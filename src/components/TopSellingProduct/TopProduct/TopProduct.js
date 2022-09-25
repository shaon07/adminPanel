import React from 'react';
import styles from './TopProduct.module.css';

const TopProduct = () => {
  return (
    <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
      <div className={`card ${styles.TopProductWrapper}`}>
        <div className="d-flex card-header justify-content-between align-items-center">
          <h4 className="header-title">Top Selling Products</h4>
          <a href="/" className="btn btn-sm btn-light">Export <i className="mdi mdi-download ms-1"></i></a>
        </div>

        <div className="card-body pt-0">
          <div className="table-responsive">
            <table className="table table-centered table-nowrap table-hover mb-0">
              <tbody>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">ASOS Ridley High Waist</h5>
                    <span className="text-muted font-13">07 April 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$79.49</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">82</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$6,518.18</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Marco Lightweight Shirt</h5>
                    <span className="text-muted font-13">25 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$128.50</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">37</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Half Sleeve Shirt</h5>
                    <span className="text-muted font-13">17 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$39.99</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">64</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$2,559.36</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Lightweight Jacket</h5>
                    <span className="text-muted font-13">12 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$20.00</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">184</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
                    <span className="text-muted font-13">05 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">69</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
                    <span className="text-muted font-13">05 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">69</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
                    <span className="text-muted font-13">05 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">69</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          {/* <!-- end table-responsive--> */}
        </div>
        {/* <!-- end card-body--> */}
      </div>
      {/* <!-- end card--> */}
    </div>
  )
}

export default TopProduct