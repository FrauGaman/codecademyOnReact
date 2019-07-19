import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddCareerData, RemoveCareerData } from '../../../actions/actionCareerData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import CareerFormModal from './CareerFormModal';

function AdminCareer({ careerStatus, getCareerData, removeData }) {
  const [modalShow, setModalShow] = useState(false);
  // const [createNewCareer, setNewCareer] = useState({
  //   id: '',
  //   img: '',
  //   bgColor: '',
  //   title: '',
  //   descr: '',
  //   theme: [],
  //   language: [],
  //   knowledge: [],
  // });
  useEffect(() => {
    getCareerData();
  }, []);

  // const setCareerState = () => {
  //   setnewCareer
  // }

  return (
    <React.Fragment>
      <ButtonToolbar>
        <AdminBtn
          className={'create__btn'}
          innerBtn={'Create'}
          position={{ span: 2, offset: 10 }}
          variant="primary"
          onClick={() => setModalShow(true)}
        />
        <CareerFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={careerStatus}
        />
      </ButtonToolbar>

      <CareerTableTemplate removeData={removeData} tableData={careerStatus} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  careerStatus: state.careerTasks,
});

const mapStateToDispatch = dispatch => ({
  getCareerData: () => {
    getData(PATH.CAREERPATH, (res) => dispatch(AddCareerData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveCareerData(id));
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminCareer);
