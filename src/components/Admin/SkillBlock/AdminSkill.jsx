import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AddSkillData, RemoveSkillData } from '../../../actions/actionSkillData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import SkillTableTemplate from './SkillTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import SkillFormModalCreate from './SkillFormModalCreate';

function AdminSkill({ skillStatus, getSkillsData, removeData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getSkillsData();
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
        <SkillFormModalCreate
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={skillStatus} />
      </ButtonToolbar>

      <SkillTableTemplate tableData={skillStatus} removeData={removeData} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  skillStatus: state.skillTasks,
});
const mapStateToDispatch = dispatch => ({
  getSkillsData: () => {
    getData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveSkillData(id));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminSkill);
