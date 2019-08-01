import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SearchByName from '../SearchByName';
import SelectPageLimit from '../SelectPageLimit';

function LanguageTableTemplate({ tableData, removeTableData, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort }) {
  return (
    <div className="table">
      <SearchByName searchState={searchState} />
      <SelectPageLimit limitNumber={limitNumber} selectLimitNumber={selectLimitNumber} />
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Name
            {sort === 'asc' ?
              <Icon iconName={'sortDown'} className={'sort__arrow'} />
              : <Icon iconName={'sortUp'} className={'sort__arrow'} />}
          </th>
          <th>Description</th>
          <th>Link</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.data && tableData.data.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.descr}</td>
              <td>{item.link}</td>
              <td>
                <div onClick={() => showModal(item.id)}>
                  <Icon iconName={'edit'} className={'editIcon'} />
                </div>
                <div onClick={() => removeTableData(item.id)}>
                  <Icon iconName={'delete'} className={'delIcon'} />
                </div>
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
      {
        (pageArr.length > 1) && pageArr.map(item =>
          <button
            key={item}
            className="page"
            onClick={() => setPageNumber(item + 1)}>
            {item+1}
          </button>
        )
      }
    </div>
  );
}

LanguageTableTemplate.propTypes = {
  tableData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  removeTableData: PropTypes.func,
  showModal: PropTypes.func,
  searchState: PropTypes.func,
  selectLimitNumber: PropTypes.func,
  chooseSort: PropTypes.func,
  pageArr: PropTypes.array,
  setPageNumber: PropTypes.func,
  limitNumber: PropTypes.string,
  sort: PropTypes.string,
};

export default LanguageTableTemplate;
