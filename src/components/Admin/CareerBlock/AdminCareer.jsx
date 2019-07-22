import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddCareerData, RemoveCareerData } from '../../../actions/actionCareerData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import CareerFormModalCreate from './CareerFormModalCreate';

function AdminCareer({ careerStatus, getCareerData, removeData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getCareerData();
  }, []);


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
        <CareerFormModalCreate
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
