import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class ThemeFormModelCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date(),
      name: '',
      descr: '',
      link: '/',
    };
  }

  changeState = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [ name ]: value });
  };

  onSubmit = () => {
    let stateArr =[];
    stateArr.push(this.state);
    this.props.createdata(stateArr);
    this.setState({
      id: +new Date(),
      name: '',
      descr: '',
      link: '/',
    });
    this.props.onHide();
  };

  render() {
    let { name, descr, link } = this.state;
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your title" name='name' value={name} onChange={this.changeState} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" name='descr' value={descr} onChange={this.changeState} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" placeholder="Your title" name='link' value={link} onChange={this.changeState} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
          <Button variant="primary" onClick={this.onSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default ThemeFormModelCreate;
