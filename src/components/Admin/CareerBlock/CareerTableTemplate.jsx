import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import CareerFilterSelect from './CareerFilter-Select';
import SearchByName from '../SearchByName';
import SelectPageLimit from '../SelectPageLimit';

function CareerTableTemplate({ tableData, themeList, languageList, knowledgeList, removeTableData, filterState, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort }) {
  return (
    <div className="table">
      <SearchByName searchState={searchState} />
      <SelectPageLimit limitNumber={limitNumber} selectLimitNumber={selectLimitNumber} />
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
          tableData.data && tableData.data.map(item =>
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.descr}</td>
                <td>{item.img}</td>
                <td>{item.bgColor}</td>
                <td>{item.theme && item.theme.map(themeNumber =>
                  themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
                  )
                ).join(', ')
                }</td>
                <td>{item.language && item.language.map(languageNumber =>
                  languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
                  )
                ).join(', ')
                }</td>
                <td>{item.knowledge && item.knowledge.map(knowledgeNumber =>
                  knowledgeList.data && knowledgeList.data.map(elem => knowledgeNumber === elem.id ? `${elem.name} ` : '',
                  ).find(item =>
                    item !== ''
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

CareerTableTemplate.propTypes = {
  tableData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.img,
      bgColor: PropTypes.string,
      title: PropTypes.string,
      descr: PropTypes.string,
      theme: PropTypes.array,
      language: PropTypes.array,
      knowledge: PropTypes.array,
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
  knowledgeList: PropTypes.shape({
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
  filterState: PropTypes.func,
};

export default CareerTableTemplate;
