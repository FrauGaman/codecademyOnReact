import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import MultiSelector from '../Multiselector';

class SkillFormModalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date(),
      img: '',
      bgColor: '#',
      title: '',
      descr: '',
      period: '',
      theme: [1],
      language: [],
    };
  }

  changeState = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [ name ]: value });
  };

  changeMultiSelectState = (event, someArr, stateField) => {
    let name = event.target.name;
    let value = event.target.value;
    someArr.map(item =>
      event.target.value === item.name ?
        value = [...stateField, item.id]
        : ''
    );
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
      period: '',
      theme: [1],
      language: [],
    });
    this.props.onHide();
  };

  render() {
    let { img, title, descr, bgColor, period, theme, language } = this.state;
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
                name='title'
                value={title}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Description"
                name='descr'
                value={descr}
                onChange={this.changeState}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Img</Form.Label>
              <Form.Control
                type="text"
                placeholder="Icon"
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
                onChange={(event) => this.changeMultiSelectState(event, this.props.themeList, this.state.theme)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Language</Form.Label>
              <MultiSelector
                dataArr={this.props.languageList}
                name={'language'}
                value={language}
                onChange={(event) => this.changeMultiSelectState(event, this.props.languageList, this.state.language)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Period</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course duration"
                name="period"
                value={period}
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

export default SkillFormModalCreate;
