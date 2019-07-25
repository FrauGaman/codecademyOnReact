import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function ThemeTableTemplate({ tableData, removeData, showModal }) {
  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Link</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.descr}</td>
              <td>{item.link}</td>
              <td>
                <div onClick={() => showModal(item.id)}>
                  <Icon iconName={'edit'} className={'editIcon'} />
                </div>
                <div onClick={() => removeData(item.id)}>
                  <Icon iconName={'delete'} className={'delIcon'} />
                </div>
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

ThemeTableTemplate.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  removeData: PropTypes.func,
  showModal: PropTypes.func,
};

export default ThemeTableTemplate;
