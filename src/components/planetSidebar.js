import React from "react";
import { Button } from "react-bootstrap";
// import srcone from "../Strapi assets/characters/character-1.png";
import { planets } from "./../data";

const SideBarTwo = ({ info }) => {
  let pchar = [];
  console.log(planets[0].char[0].name);

  for (let i = 0; i < planets.length; i++) {
    const el = planets[i];
    let nam = el.char.length;

    console.log(el.char.length);
    pchar.push(nam);
  }

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
        {info} is the place to be if you like everything related to planets. I
        know it’s a bit meta, but come see by yourself.
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
        {planets.map((e, i) => (
          <div className="d-flex lex mb-3">
            <img
              src={e.char[i].img_src}
              alt="elea"
              height="100px"
              className="rounded-prime"
            />
            <div className="ms-3">
              <h4>{e.char[i].name}</h4>
              <p className="text-muted">{e.char[i].friends.length} friends</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideBarTwo;
