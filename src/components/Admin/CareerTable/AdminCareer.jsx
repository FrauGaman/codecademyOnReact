import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import CareerFormModal from '../CreateForms/CareerFormModal';

function AdminCareer() {
  const [modalShow, setModalShow] = useState(false);
  const [careerStatus, setCareerStatus] = useState([]);
  const addData = (res) => {
    setCareerStatus(res);
  };

  useEffect(() => {
    getData(PATH.CAREERPATH, addData);
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
        <CareerFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          tableData={careerStatus}
        />
      </ButtonToolbar>

      <CareerTableTemplate tableData={careerStatus} />
    </React.Fragment>

  );
}

export default AdminCareer;
