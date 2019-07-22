import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

class CareerFormModalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date(),
      img: '',
      bgColor: '#',
      title: '',
      descr: '',
      theme: [],
      language: [],
      knowledge: [],
    };
  }

  changeState = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                rows="3"
                name="descr"
                value={this.state.descr}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Img</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image"
                name="img"
                value={this.state.img}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Bg color</Form.Label>
              <Form.Control
                type="text"
                placeholder="#000"
                name="bgColor"
                value={this.state.bgColor}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Theme</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Language</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Knowledge</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }


}

export default CareerFormModalCreate;
