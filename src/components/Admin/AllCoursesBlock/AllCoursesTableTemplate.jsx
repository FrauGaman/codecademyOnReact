import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import AllCoursesFilterSelect from './AllCoursesFilter-Select';
import SearchByName from './SearchCourse';

function AllCoursesTableTemplate({ tableData, themeList, languageList, removeData, showModal, findData }) {
  const [sort, setSort] = useState('desc');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    findData(sort, filter, search);
  }, [sort, filter, search]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);
  const filterState = (filterValue) => setFilter(filterValue);

  return (
    <div className="table use__bootstrap">
      <SearchByName searchState={searchState} />
      <AllCoursesFilterSelect themeList={themeList} languageList={languageList} filterState={filterState} />
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Title
            {sort === 'asc' ?
              <Icon iconName={'sortUp'} className={'sort__arrow'} />
              : <Icon iconName={'sortDown'} className={'sort__arrow'} />}
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
          tableData.map(item =>
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.descr}</td>
              <td>{item.importance}</td>
              <td>{item.icon}</td>
              <td>{item.borderColor}</td>
              <td>{item.theme && item.theme.map(themeNumber =>
                themeList.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
                ).find(item =>
                  item !== '',
                )
              ).join(', ')
              }</td>
              <td>{item.language && item.language.map(languageNumber =>
                languageList.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
                ).find(item =>
                  item !== '',
                )
              ).join(', ')
              }</td>
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

AllCoursesTableTemplate.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    importance: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    icon: PropTypes.string,
    borderColor: PropTypes.string,
    theme: PropTypes.array,
    language: PropTypes.array,
  })),
  themeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  languageList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  removeData: PropTypes.func,
  showModal: PropTypes.func,
  findData: PropTypes.func,
};

export default AllCoursesTableTemplate;
