import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

class KnowledgeFormModalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date(),
      know: '',
    };
  };

  changeState = (event) => {
    this.setState({ know: event.target.value });
  };

  onSubmit = () => {
    let stateArr =[];
    stateArr.push(this.state);
    this.props.createdata(stateArr);
    this.setState({
      id: +new Date(),
      know: '',
    });
    this.props.onHide();
  };

  render() {
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
              <Form.Label>Knowledge</Form.Label>
              <Form.Control
                type="text"
                placeholder="item"
                name="knowledge"
                value={this.state.know}
                onChange={this.changeState}
              />
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

export default KnowledgeFormModalCreate;
