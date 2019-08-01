import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import AllCoursesFilterSelect from './AllCoursesFilter-Select';
import SearchByName from '../SearchByName';
import SelectPageLimit from '../SelectPageLimit';

function AllCoursesTableTemplate({ tableData, themeList, languageList, filterState, removeTableData, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort }) {
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
          tableData.data && tableData.data.map(item =>
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.descr}</td>
              <td>{item.importance}</td>
              <td>{item.icon}</td>
              <td>{item.borderColor}</td>
              <td>{item.theme && item.theme.map(themeNumber =>
                themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
                ).find(item =>
                  item !== '',
                )
              ).join(', ')
              }</td>
              <td>{item.language && item.language.map(languageNumber =>
                languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
                ).find(item =>
                  item !== '',
                )
              ).join(', ')
              }</td>
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
};

export default AllCoursesTableTemplate;
