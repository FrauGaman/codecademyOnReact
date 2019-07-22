import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import MultiSelector from '../Multiselector';

class AllCoursesFormModalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date(),
      importance: '',
      title: '',
      descr: '',
      icon: '',
      borderColor: '#',
      theme: [1],
      language: [],
    };
  }

  changeState = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [ name ]: value });
    console.log(this.state);
  };

  changeMultiSelectState = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // let dataSelectArray=[];
    // switch (dataSelectArray) {
    //   case this.props.themeList:
    //     this.props.themeList.map(item =>{
    //       if (event.target.value === item.name) {
    //         value = [...this.state.theme, item.id];
    //         console.log(this.state);
    //       }
    //     });
    }

    this.setState({ [ name ]: value });
  };

  onSubmit = () => {
    let stateArr =[];
    stateArr.push(this.state);
    this.props.createdata(stateArr);
    this.setState({
      id: +new Date(),
      importance: '',
      title: '',
      descr: '',
      icon: '',
      borderColor: '#',
      theme: [],
      language: [],
    });
    this.props.onHide();
  };

  render() {
    let { importance, title, descr, icon, borderColor, theme, language } = this.state;
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
              <Form.Control type="text" placeholder="Your title" name='title' value={title} onChange={this.changeState} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" name='descr' value={descr} onChange={this.changeState} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Importance</Form.Label>
              <Form.Control as="select" name="importance" value={importance} onChange={this.changeState}>
                <option>Course</option>
                <option>Exclusive Course</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Border color</Form.Label>
              <Form.Control type="text" placeholder="#000" name='borderColor' value={borderColor} onChange={this.changeState} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Theme</Form.Label>
              <MultiSelector dataArr={this.props.themeList} name={'theme'} value={theme} onChange={this.changeMultiSelectState} />
            </Form.Group>
            {/*<Form.Group controlId="exampleForm.ControlSelect2">*/}
            {/*  <Form.Label>Language</Form.Label>*/}
            {/*  <Form.Control as="select" multiple name='language' value={language} onChange={this.changeState}>*/}
            {/*    {this.props.languageList.map(item =>*/}
            {/*      <option key={item.id}>{item.name}</option>*/}
            {/*    )}*/}
            {/*  </Form.Control>*/}
            {/*</Form.Group>*/}
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

export default AllCoursesFormModalCreate;
