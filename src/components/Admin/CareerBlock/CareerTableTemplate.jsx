import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import CareerFilterSelect from './CareerFilter-Select';

function CareerTableTemplate({ tableData, themeList, languageList, knowledgeList, removeData, showModal, sortCareerData }) {
  const [sort, setSort] = useState('desc');

  function chooseSort() {
    sort === 'asc' ? setSort('desc') : setSort('asc');
    sortCareerData(sort);
  }
  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
        <CareerFilterSelect themeList={themeList} languageList={languageList} knowledgeList={knowledgeList} />
        <tr>
          <th onClick={() => chooseSort()} className="sort__field">Title</th>
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
                <td>{item.theme.map(themeNumber =>
                  themeList.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
                  )
                ).join(', ')
                }</td>
                <td>{item.language.map(languageNumber =>
                  languageList.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
                  )
                ).join(', ')
                }</td>
                <td>{item.knowledge.map(knowledgeNumber =>
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
