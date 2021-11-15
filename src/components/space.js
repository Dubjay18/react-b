import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoadPage from "../load";
import Cards from "./card";
import Planet from "./card2";
// import CharacterCreate from "./createCharacter";
// import PlanetCreate from "./createPlanet";
// import Select from "react-select";

const Space = () => {
  const [grid, setGrid] = useState(false);
  const [page, setPage] = useState(true);
  const real = () => setPage(false);
  setTimeout(() => {
    real();
  }, 1000);

  return (
    <>
      <style type="text/css">
        {`
    .btn-trans {
      background-color: transparent;
      font-weight: 600;
      
    }

    .btn-active {
      background-color: rgba(18, 28, 51, 0.05);
      font-weight: 600;
    }
    .btn-purple{
        background: rgba(18, 28, 51, 1);
        color: white;
        text-transform: uppercase;
        font-weight: 600;
    }
   
    `}
      </style>

      <div className="p-5 space position-relative">
        <h1 className="font-weight-bold  d-flex">Spacious</h1>
        {page === true ? (
          <LoadPage />
        ) : (
          <>
            <div className="btns d-flex">
              <Button
                className="planetBtn"
                variant={grid === false ? "active" : "trans"}
                size=""
                onClick={() => setGrid(false)}
                active
              >
                PLANETS
              </Button>{" "}
              <Button
                variant={grid === true ? "active" : "trans"}
                size=""
                active
                className="ms-4"
                onClick={() => setGrid(true)}
              >
                CHARCTERS
              </Button>
              <Form.Select className="ms-auto" variant="gray">
                <option>Planet: ALL</option>
              </Form.Select>
            </div>

            <div className="h-50">
              {grid === true ? <Cards /> : <Planet />}
              {/* <Cards /> */}
              {/* <Planet /> */}
              {/* <div className="d-flex justify-content-center align-items-center ">
            <div>
              <div className="d-flex justify-content-center align-items-center mb-4">
                <svg
                  width="213"
                  height="128"
                  viewBox="0 0 213 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="106" cy="64" r="64" fill="#121C33" />
                  <path
                    d="M109.385 85.7266C136.65 80.9189 161.068 74.7911 178.514 68.7531C187.222 65.7393 194.282 62.7182 199.104 59.8525C201.505 58.4255 203.461 56.9742 204.786 55.5013C206.081 54.0615 207.059 52.2706 206.71 50.2879C206.36 48.3052 204.829 46.9568 203.119 46.0469C201.37 45.116 199.036 44.421 196.291 43.9014C190.78 42.8579 183.113 42.4334 173.899 42.5797C155.44 42.8728 130.399 45.4658 103.133 50.2735C75.8678 55.0812 51.4503 61.209 34.004 67.247C25.296 70.2607 18.2367 73.2819 13.4143 76.1476C11.0131 77.5745 9.05762 79.0259 7.73241 80.4988C6.43702 81.9386 5.45915 83.7294 5.80876 85.7121C6.15836 87.6949 7.68976 89.0432 9.39947 89.9531C11.1485 90.884 13.4825 91.579 16.2269 92.0986C21.7386 93.1421 29.4055 93.5667 38.6191 93.4204C57.0783 93.1273 82.1191 90.5342 109.385 85.7266Z"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M170 64C153.5 56 138.846 72.5 103.5 72.5C68.1538 72.5 42 99.3462 42 64C42 28.6538 70.6538 0 106 0C141.346 0 170 28.6538 170 64Z"
                    fill="#121C33"
                  />
                  <path
                    d="M109.385 81.7266C136.65 76.9189 161.068 70.7911 178.514 64.7531C187.222 61.7393 194.282 58.7182 199.104 55.8525C201.505 54.4255 203.461 52.9742 204.786 51.5013C206.081 50.0615 207.059 48.2706 206.71 46.2879C206.36 44.3052 204.829 42.9568 203.119 42.0469C201.37 41.116 199.036 40.421 196.291 39.9014C190.78 38.8579 183.113 38.4334 173.899 38.5797C155.44 38.8728 130.399 41.4658 103.133 46.2735C75.8678 51.0812 51.4503 57.209 34.004 63.247C25.296 66.2607 18.2367 69.2819 13.4143 72.1476C11.0131 73.5745 9.05762 75.0259 7.73241 76.4988C6.43702 77.9386 5.45915 79.7294 5.80876 81.7121C6.15836 83.6949 7.68976 85.0432 9.39947 85.9531C11.1485 86.884 13.4825 87.579 16.2269 88.0986C21.7386 89.1421 29.4055 89.5667 38.6191 89.4204C57.0783 89.1273 82.1191 86.5342 109.385 81.7266Z"
                    stroke="#121C33"
                    stroke-width="4"
                  />
                  <ellipse
                    opacity="0.1"
                    cx="135.5"
                    cy="32.5"
                    rx="13.5"
                    ry="12.5"
                    fill="white"
                  />
                  <ellipse
                    opacity="0.1"
                    cx="113.5"
                    cy="15"
                    rx="7.5"
                    ry="7"
                    fill="white"
                  />
                </svg>
              </div>
              <h2>Space doesn’t have to be so empty.</h2>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button variant="purple">create planet</Button>
              </div>
            </div>
</div>*/}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Space;
