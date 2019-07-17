import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import SkillTableTemplate from './SkillTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import SkillFormModal from '../CreateForms/SkillFormModal';

function AdminSkill() {
  const [modalShow, setModalShow] = useState(false);
  const [skillStatus, setSkillStatus] = useState([]);
  const addData = (res) => {
    setSkillStatus(res);
  };

  useEffect(() => {
    getData(PATH.SKILLPATH, addData);
  }, []);

  return (
    <React.Fragment>
      <ButtonToolbar>
        <AdminBtn
          className={'create__btn'}
          innerBtn={'Create'}
          position={{ span: 2, offset: 10 }}
          variant="primary"
          onClick={() => setModalShow(true)} />
        <SkillFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          tableData={skillStatus} />
      </ButtonToolbar>

      <SkillTableTemplate tableData={skillStatus} />
    </React.Fragment>
  );
}

export default AdminSkill;
