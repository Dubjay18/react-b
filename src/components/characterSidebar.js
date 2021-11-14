import React from "react";

// import { Friendss } from "./../data";
const SideBarOne = ({ info, friend, d }) => {
  return (
    <div className="p-lg-4 p-3 h">
      <h1>{info}</h1>
      <p className="text-muted">
        {info} {d}
      </p>
      <div className="d-flex w-50 justify-content-between lex">
        <div>
          <p>Planet</p>
          <h4>Alpha</h4>
        </div>
        <div>
          <p>Friends</p>
          <h4>{friend.length}</h4>
        </div>
      </div>
      <br />
      <h3 className="text-muted">FREINDS</h3>
      <br />
      <div className="flex-col scroll h">
        {friend.map((e) => (
          <div className="d-flex lex mb-3">
            <img
              src={e.img_src}
              alt="elea"
              height="100px"
              className="rounded-prime"
            />
            <div className="ms-3">
              <h4>{e.name}</h4>
              <p className="text-muted">{e.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideBarOne;
