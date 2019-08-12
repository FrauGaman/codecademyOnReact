import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SearchByName from '../ComponentsPieces/SearchByName';
import SelectPageLimit from '../ComponentsPieces/SelectPageLimit';
import PaginationButton from '../ComponentsPieces/PaginationButton';
import EmptyData from '../ErrorBlock/EmptyData';
import ThemeTableMap from './ThemeTableMap';

function ThemeTableTemplate({
  tableData,
  removeTableData,
  showModal,
  searchState,
  selectLimitNumber,
  chooseSort,
  pageArr,
  setPageNumber,
  limitNumber,
  sort,
  dataStatus,
  pageNumber,
}) {
  return (
    <div className="table">
      <div className="admin__block">
        <SearchByName searchState={searchState} />
        <SelectPageLimit limitNumber={limitNumber} selectLimitNumber={selectLimitNumber} />
      </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Name
            {sort === 'asc' ?
              <Icon iconName={'sortDown'} className={'sort__arrow'} />
              : <Icon iconName={'sortUp'} className={'sort__arrow'} />}
          </th>
          <th className="hidden__col">Description</th>
          <th className="hidden__col">Link</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          !dataStatus.emptyData ?
            tableData.data.length ?
              <ThemeTableMap tableData={tableData} removeTableData={removeTableData} showModal={showModal} />
              : <EmptyData colSpan={4} problem={'Data somewhere, but not here'} />
            : <EmptyData colSpan={4} problem={'We have some problem:C'} />
        }
        </tbody>
      </Table>
      <PaginationButton pageArr={pageArr} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

ThemeTableTemplate.propTypes = {
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
  pageNumber: PropTypes.number,
  limitNumber: PropTypes.string,
  sort: PropTypes.string,
  dataStatus: PropTypes.shape({
    loading: PropTypes.bool,
    emptyData: PropTypes.bool,
  }),
};

export default ThemeTableTemplate;
