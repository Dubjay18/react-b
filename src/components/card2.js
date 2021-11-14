import React, { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  CloseButton,
  Modal,
  Form,
} from "react-bootstrap";
import { Characters, planets } from "../data";
import SideBarTwo from "./planetSidebar";
const Planet = () => {
  const [show, setShow] = useState(false);
  // const [plan, setPlan] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // setPlan(true);
  };
  const [itemt, setItemt] = React.useState({});
  const [sidet, setSidet] = React.useState(false);
  localStorage.setItem("plane", JSON.stringify(planets));
  const [pname, setPname] = React.useState("");
  // const [details, setDetails] = React.useState("");
  const [svg, setSvg] = React.useState("");
  let plain = JSON.parse(localStorage.getItem("plane"));
  const [data, setData] = useState(plain);
  function create() {
    data.push({
      name: pname,
      svg_src: svg,
      // details: details,
    });
    console.log(data);
    localStorage.setItem("plane", JSON.stringify(plain));
    console.log(JSON.parse(localStorage.getItem("plane")));
    plain = JSON.parse(localStorage.getItem("plane"));
    setData(data);
    setShow(false);
  }

  return (
    <div className="d-flex">
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
      </style>{" "}
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
          <h1 className=""> Planets</h1>
          <Form className="p-5">
            <Form.Group className="mb-3">
              <Form.Label>
                <h4>Image</h4>
              </Form.Label>
              <Form.Control
                type="text"
                className="formInput  p-3"
                onChange={(e) => setSvg(e.target.value)}
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
                onChange={(e) => setPname(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h4>Description</h4>
              </Form.Label>
              <Form.Control as="textarea" rows={3} className="formInput  p-3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="active" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="purple" onClick={create}>
            CREATE PLANET
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className={
          sidet === true
            ? "space-content mt-5 media-content"
            : "space-content mt-5 "
        }
      >
        <Row xs={1} lg={3} className="g-5 rounded-prime">
          {data.map((e, ind) => (
            <Col id={ind}>
              <Card
                className="rounded-prime custom-shadow"
                onClick={() => setItemt(e)}
              >
                <Button
                  variant="neWtrans"
                  id="wow"
                  onClick={() => setSidet(true)}
                >
                  <Card.Img
                    variant="top"
                    src={e.svg_src}
                    className="card-img"
                    id={ind}
                  />
                  <Card.Body id={ind}>
                    <Card.Title id={ind}>{e.name}</Card.Title>
                    <Card.Text id={ind}>pop: {Characters.length}</Card.Text>
                    {ind === planets.length - 1 ? (
                      <div
                        className="position-absolute plus"
                        onClick={handleShow}
                      >
                        <Button variant="circle">+</Button>
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
      {sidet === true ? (
        <div className=" ms-4 rounded-prime bg-white shadow-lg h-50 sidebar-media">
          {" "}
          <div className="d-flex justify-content-end align-items-end me-5 mt-4">
            <Button variant="gray" onClick={() => setSidet(false)}>
              <CloseButton variant="gray" onClick={() => setSidet(false)} />
            </Button>
          </div>
          <SideBarTwo info={itemt.name} />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Planet;
