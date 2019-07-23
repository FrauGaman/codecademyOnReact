import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import MultiSelector from '../Multiselector';

class CareerFormModalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date(),
      img: '',
      bgColor: '#',
      title: '',
      descr: '',
      theme: [1],
      language: [],
      knowledge: [],
    };
  }

  changeState = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [ name ]: value });
  };

  changeMultiSelectState = (event, someArr, stateField) => {
    let name = event.target.name;
    let value;
    someArr.map(item =>
      event.target.value === item.name ?
        value = [...stateField, item.id]
        : ''
    );
    value = [...new Set(value)];
    this.setState({ [ name ]: value });
  };

  changeKnowledgeState = (event, stateField) => {
    let name = event.target.name;
    let value = [...stateField, event.target.value];
    value = [...new Set(value)];
    this.setState({ [ name ]: value });
  };

  onSubmit = () => {
    let stateArr =[];
    stateArr.push(this.state);
    this.props.createdata(stateArr);
    this.setState({
      id: +new Date(),
      img: '',
      bgColor: '#',
      title: '',
      descr: '',
      theme: [1],
      language: [],
      knowledge: [],
    });
    this.props.onHide();
  };

  render() {
    let { title, descr, img, bgColor, theme, language, knowledge } = this.state;
    console.log(this.state);

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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={title}
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
                value={descr}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Img</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image"
                name="img"
                value={img}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Bg color</Form.Label>
              <Form.Control
                type="text"
                placeholder="#000"
                name="bgColor"
                value={bgColor}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Theme</Form.Label>
              <MultiSelector
                dataArr={this.props.themeList}
                name={'theme'}
                value={theme}
                onChange={(event) => this.changeMultiSelectState(event, this.props.themeList, this.state.theme)} />
          </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Language</Form.Label>
              <MultiSelector
                dataArr={this.props.languageList}
                name={'language'}
                value={language}
                onChange={(event) => this.changeMultiSelectState(event, this.props.languageList, this.state.language)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Knowledge</Form.Label>
              <MultiSelector
                dataArr={this.props.knowledgeList}
                name={'knowledge'}
                value={knowledge}
                onChange={(event) => this.changeKnowledgeState(event, this.state.knowledge)} />
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

export default CareerFormModalCreate;
