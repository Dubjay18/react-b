import React from "react";
import { Form } from "react-bootstrap";
// import { Friendss } from "./../data";

const PlanetCreate = () => {
  return (
    <div>
      <Form className="p-5">
        <Form.Group className="mb-3">
          <Form.Label>
            <h4>Image</h4>
          </Form.Label>
          <Form.Control type="text" className="formInput  p-3" />
          <p className="text-muted">
            Paste the URL of a JPG or PNG of max 20 kb
          </p>
        </Form.Group>
        <br />

        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>
            <h4>Name</h4>
          </Form.Label>
          <Form.Control type="text" className="formInput p-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h4>Description</h4>
          </Form.Label>
          <Form.Control as="textarea" rows={3} className="formInput  p-3" />
        </Form.Group>
      </Form>
    </div>
  );
};
export default PlanetCreate;
