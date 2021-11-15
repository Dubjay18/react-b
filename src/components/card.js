import React, { useState } from "react";
import { Button, Card, Row, Col, CloseButton, Modal } from "react-bootstrap";
import { Characters, ops } from "../data";
import { Form } from "react-bootstrap";
// import { Friendss } from "./../data";
import SideBarOne from "./characterSidebar";
import Select from "react-select";

const Cards = () => {
  const [fends, setFends] = React.useState([]);
  const [show, setShow] = useState(false);
  // const [plan, setPlan] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // setPlan(true);
  };
  // const handleplan = () => {
  //   setShow(true);
  //   // setPlan(false);
  // };
  const handleChange = (ops) => {
    setFends(ops);
  };
  const [item, setItem] = React.useState({});
  const [side, setSide] = React.useState(false);
  localStorage.setItem("chart", JSON.stringify(Characters));

  const [newName, setNewName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [image, setImage] = React.useState("");
  // let auth = JSON.parse(localStorage.getItem("chart"));

  let arr = JSON.parse(localStorage.getItem("chart"));
  const [ndata, setNdata] = useState(arr);
  function create() {
    console.log(fends);
    if (image !== "" && fends.length !== 0 && newName !== "") {
      ndata.push({
        name: newName,
        img_src: image,
        details: details,
        friends: fends,
      });
      console.log(ndata);
      localStorage.setItem("chart", JSON.stringify(arr));
      console.log(JSON.parse(localStorage.getItem("chart")));
      arr = JSON.parse(localStorage.getItem("chart"));
      setNdata(ndata);
      setShow(false);
    } else {
      alert("empty input");
    }
  }
  // const frnames = [];
  // function Fnames() {
  //   Friendss.map((e) => setFends(e.name));
  // }
  // Fnames();
  // console.log(fends);
  // function Sets() {
  //   if (item !== {}) {
  //     setSide(true);
  //   }
  // }
  // Sets();
  // function con(e) {
  //   // let sibling = currentNode.nextElementSibling;
  //   let t = e.target.closest(".yo");

  //   if (t === "" || undefined) {
  //     console.log("null");
  //   } else {
  //     if (t === null) {
  //       let pp = e.target.id;
  //       let p = Characters[pp].name;
  //       console.log(p);
  //       setKid(p);
  //     } else {
  //       let p = t.innerText;
  //       console.log(p);
  //       console.log(p[0]);
  //       setKid(p);
  //     }

  //   Name = Characters[t].name;
  //   setKid(true);
  //   console.log(Name);
  //   let bg = t.style.display;
  //   console.log(bg);
  //   }
  // }
  // function obj() {
  //   setItem(e);
  //   console.log(item);
  // }
  return (
    <div className="d-flex ">
      <style type="text/css">
        {`
    .btn-trans {
      background-color: transparent;
      font-weight: 600;
      transition: all .7s;
      
    }

    .btn-active {
      background-color: rgba(18, 28, 51, 0.05);
      font-weight: 600;
      transition: all .7s;
    }
    .btn-purple{
        background: rgba(18, 28, 51, 1);
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        transition: all .7s;
    }
    .btn-purple:hover{
      transform: scale(1.1);
      color: white!important;
    }
    .btn-trans:hover{
      transform: scale(1.1);
      color: white;
    }
    .btn-active:hover{
      transform: scale(1.1);
      color: black;
    }
   
    .btn{
      transition: all .7s;
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
      </style>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w rounded-prime"
        className="rounded-prime"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {plan === true ?  : <h1>Planets</h1>} */}
          <h1 className="font-weight-bold"> Characters</h1>

          {/* {plan === true ? <CharacterCreate /> : <PlanetCreate />} */}
          <Form className="p-5">
            <Form.Group className="mb-3">
              <Form.Label>
                <h4>Image</h4>
              </Form.Label>
              <Form.Control
                type="text"
                className="formInput  p-3"
                onChange={(e) => setImage(e.target.value)}
              />
              <p className="text-muted">
                Paste the URL of a JPG or PNG of max 20 kb
              </p>
            </Form.Group>
            <br />
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4>Name</h4>
              </Form.Label>
              <Form.Control
                type="text"
                className="formInput p-3"
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h4>Description</h4>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="formInput  p-3"
                onChange={(e) => setDetails(e.target.value)}
              />
            </Form.Group>
            <Form.Label>
              <h4>Friends</h4>
            </Form.Label>

            <Select
              defaultValue={[]}
              isMulti
              name="colors"
              options={ops}
              className="basic-multi-select formInput"
              classNamePrefix="select"
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="active" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="purple" onClick={create}>
            CREATE CHARACTER
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className={
          side === true
            ? "space-content mt-5 media-content"
            : "space-content mt-5 "
        }
      >
        <Row
          xs={1}
          md={2}
          lg={side === true ? 2 : 3}
          className="g-5 sit rounded-prime"
        >
          {ndata.map((e, ind) => (
            <Col id={ind} key={e.id}>
              <Card
                className="rounded-prime custom-shadow "
                onClick={() => setItem(e)}
              >
                <Button
                  variant="neWtrans"
                  id="wow"
                  onClick={() => setSide(true)}
                >
                  <Card.Img
                    id={ind}
                    variant="top"
                    src={e.img_src}
                    className="card-img"
                  />
                  <Card.Body id={ind} className="yo">
                    <Card.Title id={ind} className="wy">
                      {e.name}
                    </Card.Title>
                    <div>
                      <Card.Text id={ind}>{e.friends.length} friends</Card.Text>
                    </div>
                    {ind === ndata.length - 1 ? (
                      <div className="position-absolute plus">
                        <Button
                          className="font-plus px-4 py-3"
                          onClick={handleShow}
                          variant="circle"
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      ""
                    )}
                  </Card.Body>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {side === true ? (
        <div className=" ms-md-4 mt-2 rounded-prime bg-white shadow-lg ">
          {" "}
          <div className="d-flex justify-content-end align-items-end me-5 mt-4">
            <Button variant="gray" onClick={() => setSide(false)}>
              <CloseButton onClick={() => setSide(false)} />
            </Button>
          </div>
          <SideBarOne info={item.name} friend={item.friends} d={details} />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;
