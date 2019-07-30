import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SearchByName from '../SearchByName';

function LanguageTableTemplate({ tableData, removeData, showModal, findData }) {
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [limitNumber, setLimitNumber] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    findData(sort, search, pageNumber, limitNumber);
  }, [sort, search, pageNumber, limitNumber]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(tableData.count/limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [pageNumber, limitNumber]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);
  const selectLimitNumber = (event) => {
    setLimitNumber(event.target.value);
    setPageNumber(1);
  };

  return (
    <div className="table">
      <SearchByName searchState={searchState} />
      <select className="page__selector" value={limitNumber} onChange={selectLimitNumber}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Name
            {sort === 'asc' ?
              <Icon iconName={'sortUp'} className={'sort__arrow'} />
              : <Icon iconName={'sortDown'} className={'sort__arrow'} />}
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
                <div onClick={() => removeData(item.id)}>
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
  tableData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  removeData: PropTypes.func,
  showModal: PropTypes.func,
  findData: PropTypes.func,
};

export default LanguageTableTemplate;
