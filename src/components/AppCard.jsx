import React from "react";

const AppCard = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ "max-width": "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1638277278508-67b8ca3093bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.itemTitle}</h5>
              <p className="card-text">{props.itemBody}</p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated {Math.round(Math.random() * 60) + 1} mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
