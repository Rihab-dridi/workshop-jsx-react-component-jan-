import React from "react";
import { Form } from "react-bootstrap";
export default function select() {
  return (
    <div>
      <Form.Select aria-label="Default select example" className="select" >
        <option>Open this select menu</option>
        <option value="1">workshop</option>
        <option value="2">checkpoint </option>
        <option value="3">one to one </option>
      </Form.Select>
    </div>
  );
}
