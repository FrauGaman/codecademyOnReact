import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SearchByName from './SearchTheme';

function ThemeTableTemplate({ tableData, removeData, showModal, findData }) {
  const [sort, setSort] = useState('desc');
  const [search, setSearch] = useState('');

  useEffect(() => {
    findData(sort, search);
    }, [sort, search]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);

  return (
    <div className="table">
      <SearchByName searchState={searchState} />
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
          tableData.map(item =>
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
    </div>
  );
}

ThemeTableTemplate.propTypes = {
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

export default ThemeTableTemplate;
