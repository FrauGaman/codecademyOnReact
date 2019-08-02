import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SearchByName from '../ComponentsPieces/SearchByName';
import SelectPageLimit from '../ComponentsPieces/SelectPageLimit';
import PaginationButton from '../ComponentsPieces/PaginationButton';

function KnowledgeTableTemplate({ tableData, removeTableData, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort }) {
  return (
    <React.Fragment>
      <div className="table">
        <SearchByName searchState={searchState} />
        <SelectPageLimit limitNumber={limitNumber} selectLimitNumber={selectLimitNumber} />
        <Table striped bordered hover>
          <thead>
          <tr>
            <th onClick={() => chooseSort()} className="sort__field">Knowledge
              {sort === 'asc' ?
                <Icon iconName={'sortDown'} className={'sort__arrow'} />
                : <Icon iconName={'sortUp'} className={'sort__arrow'} />}
            </th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          {
            tableData.data && tableData.data.map(item =>
              <tr key={item.id}>
                <td>{item.name}</td>
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
        <PaginationButton pageArr={pageArr} setPageNumber={setPageNumber} />
      </div>
    </React.Fragment>
  );
}

KnowledgeTableTemplate.propTypes = {
  tableData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
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

export default KnowledgeTableTemplate;
