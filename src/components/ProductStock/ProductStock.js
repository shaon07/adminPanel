/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BiChevronDownCircle } from 'react-icons/bi';
import styles from './ProductStock.module.css';

const ProductStock = () => {
  const [show, setShow] = useState(false);
  const handleBlur = (e) => {
    // firefox onBlur issue workaround
    if (e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
      return;
    }

    if (show) {
      setTimeout(() => {
        setShow(false)
      }, 200);
    }
  }
  return (
    <div className="col-xl-7 col-lg-6">
      <div className="card card-h-100">
        <div className="d-flex card-header justify-content-between align-items-center">
          <h4 className="header-title">Product Stocks</h4>
          <div className="dropdown" onBlur={handleBlur} onClick={() => setShow(!show)}>
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded={show}>
              <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className={`dropdown-menu dropdown-menu-end ${show ? styles.showDropMenu : ""}`}>
              {/* <!-- item--> */}
              <a href="/" className="dropdown-item" onClick={() => console.log("he")}>Sales Report</a>
              {/* <!-- item--> */}
              <a href="/" className="dropdown-item">Export Report</a>
              {/* <!-- item--> */}
              <a href="/" className="dropdown-item">Profit</a>
              {/* <!-- item--> */}
              <a href="/" className="dropdown-item">Action</a>
            </div>
          </div>
        </div>

        {/* name stock and variantion section */}
        <div className={`${styles.category} subHeadingStyle d-flex justify-content-between px-3 `}>
          <div className="nameSec">
            <p>Name <span> <BiChevronDownCircle /> </span></p>
          </div>
          <div className="stocks d-flex justify-content-between gap-4">
            <div className="variantions">
              <p>Variantion</p>
            </div>
            <div className="Stocks">
              <p>Current Stocks <BiChevronDownCircle /></p>
            </div>
          </div>
        </div>


        <div className={`${styles.productTitleWrapper} hide-scrollbar`}>
          <div className={`${styles.productTitle} d-flex justify-content-between px-3`}>
            <div className="productName col-6">
              <p>Vivo X80 Pro</p>
            </div>

            <div className="productSpecs col-5 d-flex justify-content-center gap-4">
              <div className="productVariation">
                <p>Red, Blue, Ocean</p>
              </div>

              <div className="productStock">
                <p>90</p>
              </div>
            </div>
          </div>
          <div className={`${styles.productTitle} d-flex justify-content-between px-3`}>
            <div className="productName col-6">
              <p>Vivo X80 Pro</p>
            </div>

            <div className="productSpecs col-5 d-flex justify-content-center gap-4">
              <div className="productVariation">
                <p>Red, Blue, Ocean</p>
              </div>

              <div className="productStock">
                <p>90</p>
              </div>
            </div>
          </div>
          <div className={`${styles.productTitle} d-flex justify-content-between px-3`}>
            <div className="productName col-6">
              <p>Vivo X80 Pro</p>
            </div>

            <div className="productSpecs col-5 d-flex justify-content-center gap-4">
              <div className="productVariation">
                <p>Red, Blue, Ocean</p>
              </div>

              <div className="productStock">
                <p>90</p>
              </div>
            </div>
          </div>
        </div>


        <div className={`${styles.fullReport} d-flex justify-content-end px-3 py-2`}>
          <h5>Full Report</h5>
        </div>
        {/* <!-- end card-body--> */}
      </div>
      {/* <!-- end card--> */}

    </div>
  )
}

export default ProductStock