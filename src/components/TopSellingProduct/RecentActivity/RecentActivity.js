import React from 'react';
import styles from './RecentActivity.module.css';

const RecentActivity = () => {
  return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
      <div className={`card ${styles.ActivityWrapper}`}>
        <div className="d-flex card-header justify-content-between align-items-center">
          <h4 className="header-title">Recent Activity</h4>
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

        <div className="card-body py-0 mb-3" data-simplebar style={{ maxHeight: "403px" }}>
          <div className="timeline-alt py-0">
            <div className="timeline-item">
              <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-info fw-bold mb-1 d-block">You sold an item</a>
                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">5 minutes ago</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-primary fw-bold mb-1 d-block">Product on the Bootstrap Market</a>
                <small>Dave Gamache added
                  <span className="fw-bold">Admin Dashboard</span>
                </small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">30 minutes ago</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-info fw-bold mb-1 d-block">Robert Delaney</a>
                <small>Send you message
                  <span className="fw-bold">"Are you there?"</span>
                </small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">2 hours ago</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-primary fw-bold mb-1 d-block">Audrey Tobey</a>
                <small>Uploaded a photo
                  <span className="fw-bold">"Error.jpg"</span>
                </small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">14 hours ago</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-info fw-bold mb-1 d-block">You sold an item</a>
                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">16 hours ago</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-primary fw-bold mb-1 d-block">Product on the Bootstrap Market</a>
                <small>Dave Gamache added
                  <span className="fw-bold">Admin Dashboard</span>
                </small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">22 hours ago</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
              <div className="timeline-item-info">
                <a href="/" className="text-info fw-bold mb-1 d-block">Robert Delaney</a>
                <small>Send you message
                  <span className="fw-bold">"Are you there?"</span>
                </small>
                <p className="mb-0 pb-2">
                  <small className="text-muted">2 days ago</small>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- end timeline --> */}
        </div>
        {/* <!-- end slimscroll --> */}
      </div>
      {/* <!-- end card--> */}
    </div>
  )
}

export default RecentActivity