import React from "react";
import Load_svg from "./Strapi assets/assets/planet-loader.svg";
const LoadPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
      <div className="rounded-prime shadow-lg p-5  mt-5 ">
        <img src={Load_svg} alt="load" />
      </div>
    </div>
  );
};
export default LoadPage;
