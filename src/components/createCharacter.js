// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Friendss } from "./../data";
import { Button, Modal } from "react-bootstrap";

const CharacterCreate = () => {
  const [newName, setNewName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [image, setImage] = React.useState("");
  let auth = JSON.parse(localStorage.getItem("chart"));
  function create() {
    auth.push({
      name: newName,
      img_src: image,
    });
    localStorage.setItem("chart", JSON.stringify(auth));
    console.log(JSON.parse(localStorage.getItem("chart")));
  }
  return (
    <div>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
        <Form.Select aria-label="Default select example" className="formInput">
          <option> </option>
          {Friendss.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}
        </Form.Select>
        <Button variant="primary" onClick={create}></Button>
      </Form>
    </div>
  );
};
export default CharacterCreate;
