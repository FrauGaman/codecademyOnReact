import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function KnowledgeTableTemplate({ tableData, removeData, showModal, sortKnowledgeData }) {
  const [sort, setSort] = useState('desc');

  function chooseSort() {
    sort === 'asc' ? setSort('desc') : setSort('asc');
    sortKnowledgeData(sort);
  }

  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Knowledge</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
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

KnowledgeTableTemplate.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  removeData: PropTypes.func,
  showModal: PropTypes.func,
  sortKnowledgeData: PropTypes.func,
};

export default KnowledgeTableTemplate;
