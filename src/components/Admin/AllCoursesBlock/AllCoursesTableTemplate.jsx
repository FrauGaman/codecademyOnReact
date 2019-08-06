import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import AllCoursesFilterSelect from './AllCoursesFilter-Select';
import SearchByName from '../ComponentsPieces/SearchByName';
import SelectPageLimit from '../ComponentsPieces/SelectPageLimit';
import PaginationButton from '../ComponentsPieces/PaginationButton';
import EmptyData from '../../ErrorBlock/EmptyData';
import AllCoursesTableMap from './AllCoursesTableMap';

function AllCoursesTableTemplate({ tableData, themeList, languageList, filterState, removeTableData, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort, errorBlock }) {
  return (
    <div className="table use__bootstrap">
      <SearchByName searchState={searchState} />
      <SelectPageLimit limitNumber={limitNumber} selectLimitNumber={selectLimitNumber} />
      <AllCoursesFilterSelect themeList={themeList} languageList={languageList} filterState={filterState} />
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Title
            {sort === 'asc' ?
              <Icon iconName={'sortDown'} className={'sort__arrow'} />
              : <Icon iconName={'sortUp'} className={'sort__arrow'} />}
          </th>
          <th>Description</th>
          <th>Importance</th>
          <th>Icon</th>
          <th>BorderColor</th>
          <th>Theme</th>
          <th>Language</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          !errorBlock ?
            tableData.data.length ?
              <AllCoursesTableMap tableData={tableData} themeList={themeList} languageList={languageList} removeTableData={removeTableData} showModal={showModal} />
              : <EmptyData colSpan={8} problem={'Data somewhere, but not here'} />
            : <EmptyData colSpan={8} problem={'We have some problem:C'} />
        }
        </tbody>
      </Table>
      <PaginationButton pageArr={pageArr} setPageNumber={setPageNumber} />
    </div>
  );
}

AllCoursesTableTemplate.propTypes = {
  tableData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      importance: PropTypes.string,
      title: PropTypes.string,
      descr: PropTypes.string,
      icon: PropTypes.string,
      borderColor: PropTypes.string,
      theme: PropTypes.array,
      language: PropTypes.array,
    })),
    count: PropTypes.string,
  }),
  themeList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  languageList: PropTypes.shape({
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
  filterState: PropTypes.func,
  errorBlock: PropTypes.bool,
};

export default AllCoursesTableTemplate;
