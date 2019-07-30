import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import CareerFilterSelect from './CareerFilter-Select';
import SearchByName from './SearchCareer';

function CareerTableTemplate({ tableData, themeList, languageList, knowledgeList, removeData, showModal, findData }) {
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
    <div className="table">
      <SearchByName searchState={searchState} />
      <CareerFilterSelect themeList={themeList} languageList={languageList} knowledgeList={knowledgeList} filterState={filterState} />
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Title
            {sort === 'asc' ?
              <Icon iconName={'sortUp'} className={'sort__arrow'} />
              : <Icon iconName={'sortDown'} className={'sort__arrow'} />}
          </th>
          <th>Description</th>
          <th>Img</th>
          <th>BgColor</th>
          <th>Theme</th>
          <th>Language</th>
          <th>Knowledge</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.map(item =>
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.descr}</td>
                <td>{item.img}</td>
                <td>{item.bgColor}</td>
                <td>{item.theme && item.theme.map(themeNumber =>
                  themeList.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
                  )
                ).join(', ')
                }</td>
                <td>{item.language && item.language.map(languageNumber =>
                  languageList.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
                  )
                ).join(', ')
                }</td>
                <td>{item.knowledge && item.knowledge.map(knowledgeNumber =>
                  knowledgeList.map(elem => knowledgeNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
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

CareerTableTemplate.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.img,
    title: PropTypes.string,
    descr: PropTypes.string,
    bgColor: PropTypes.string,
    period: PropTypes.string,
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
  knowledgeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  removeData: PropTypes.func,
  showModal: PropTypes.func,
  sortCareerData: PropTypes.func,
};

export default CareerTableTemplate;
