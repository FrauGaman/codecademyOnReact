import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SkillFilterSelect from './SkillFilter-Select';
import SearchByName from '../ComponentsPieces/SearchByName';
import SelectPageLimit from '../ComponentsPieces/SelectPageLimit';
import PaginationButton from '../ComponentsPieces/PaginationButton';
import EmptyData from '../ErrorBlock/EmptyData';
import SkillTableMap from './SkillTableMap';

function CareerTableTemplate({ tableData, themeList, languageList, removeTableData, filterState, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort, errorBlock }) {
  return (
    <div className="table">
      <SearchByName searchState={searchState} />
      <SelectPageLimit limitNumber={limitNumber} selectLimitNumber={selectLimitNumber} />
      <SkillFilterSelect themeList={themeList} languageList={languageList} filterState={filterState} />
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Title
            {sort === 'asc' ?
              <Icon iconName={'sortDown'} className={'sort__arrow'} />
              : <Icon iconName={'sortUp'} className={'sort__arrow'} />}
          </th>
          <th className="hidden__col__big">Description</th>
          <th className="hidden__col__big">Img</th>
          <th className="hidden__col">BgColor</th>
          <th className="hidden__col">Theme</th>
          <th className="hidden__col">Language</th>
          <th className="hidden__col">Period</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          !errorBlock ?
            tableData.data.length ?
              <SkillTableMap tableData={tableData} themeList={themeList} languageList={languageList} removeTableData={removeTableData} showModal={showModal} />
              : <EmptyData colSpan={8} problem={'Data somewhere, but not here'} />
            : <EmptyData colSpan={8} problem={'We have some problem:C'} />
        }
        </tbody>
      </Table>
      <PaginationButton pageArr={pageArr} setPageNumber={setPageNumber} />
    </div>
  );
}

CareerTableTemplate.propTypes = {
  tableData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.img,
      bgColor: PropTypes.string,
      title: PropTypes.string,
      descr: PropTypes.string,
      period: PropTypes.string,
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

export default CareerTableTemplate;
