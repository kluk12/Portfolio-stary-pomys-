import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "./Contact.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Example extends React.Component {
  render() {
    return (
      <div className="contener--margiin">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>

          <Col sm={10} md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>

          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
