import React from "react";
import { Button } from "react-bootstrap";
// import srcone from "../Strapi assets/characters/character-1.png";
// import { Characters, planets } from "./../data";

const SideBarTwo = ({ info, d, data, chart }) => {
  let pchar = [];

  for (let i = 0; i < data.length; i++) {
    const el = chart;
    // let nam = {el.char === undefined ? 0 : el.char.length};
    let nam = 0;
    if (el === undefined) {
      nam = 0;
    } else {
      nam = el.length;
    }

    pchar.push(nam);
    console.log(nam);
  }
  // function p() {
  //   if (chart === undefined) {
  //     data[data.length - 1].push("ssss");
  //   }
  // }

  const population = pchar.reduce((acc, a) => acc + a, 0);
  console.log(population);
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
    .btn-neWtrans {
        background-color: transparent;
        
        padding:0px;
      }
      .btn-neWtrans:focus,.btn-neWtrans:active:focus{
          outline:100px!important;
      }
      .btn-gray{
        background-color: #e0d5d5;
        font-weight: 600;
        
      }
   
    `}
  </style>;
  return (
    <div className="p-lg-4 p-3 h">
      <h1>{info}</h1>
      <p className="text-muted">
        {info} {d}
      </p>
      <div className="d-flex w-50 justify-content-between lex">
        <div>
          <p>Population</p>
          <h4>{population}</h4>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <h3 className="text-muted">Characters</h3>
        <Button variant="gray">+</Button>
      </div>
      <br />
      <div className="flex-col scroll  h">
        {chart === undefined
          ? ""
          : chart.map((e) => (
              <div className="d-flex lex mb-3">
                <img
                  src={e === undefined ? "" : e.img_src}
                  alt={e === undefined ? "" : "elea"}
                  height="100px"
                  className="rounded-prime"
                />
                <div className="ms-3">
                  <h4>{e === undefined ? "none " : e.name}</h4>
                  <p className="text-muted">
                    {e === undefined ? "" : e.friends.length}{" "}
                    {e === undefined ? "" : "friends"}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default SideBarTwo;
