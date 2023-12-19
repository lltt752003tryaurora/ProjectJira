import React from "react";
import Background from "../../../asset/img/rainBg.jpg";

const MainBoard = () => {
  return (
    <div
      className="main space-y-3 rounded-3xl"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="text-2xl font-bold text-white pt-5 pb-3">Cyber Board</div>
      <div className="info flex items-center">
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          <div className="avatar">
            <img src={require("../../../asset/img/download (1).jfif")} alt="" />
          </div>
          <div className="avatar">
            <img src={require("../../../asset/img/download (2).jfif")} alt="" />
          </div>
          <div className="avatar">
            <img src={require("../../../asset/img/download (3).jfif")} alt="" />
          </div>
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
      <div className="content grid grid-cols-4 gap-4 py-5">
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">BACKLOG 3</div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item cursor-pointer"
              data-toggle="modal"
              data-target="#infoModal"
            >
              <p>
                Each issue has a single reporter but can have multiple assignees
              </p>
              <div className="block flex">
                <div className="block-left">
                  <i className="fa fa-bookmark" />
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="block-right">
                  <div className="avatar-group flex">
                    <div className="avatar">
                      <img
                        src={require("../../../asset/img/download (1).jfif")}
                        alt=""
                      />
                    </div>
                    <div className="avatar">
                      <img
                        src={require("../../../asset/img/download (2).jfif")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <p>
                Each issue has a single reporter but can have multiple assignees
              </p>
              <div className="block flex">
                <div className="block-left">
                  <i className="fa fa-check-square" />
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="block-right">
                  <div className="avatar-group" style={{ display: "flex" }}>
                    <div className="avatar">
                      <img
                        src={require("../../../asset/img/download (1).jfif")}
                        alt=""
                      />
                    </div>
                    <div className="avatar">
                      <img
                        src={require("../../../asset/img/download (2).jfif")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">SELECTED FOR DEVELOPMENT 2</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">IN PROGRESS 2</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">DONE 3</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
