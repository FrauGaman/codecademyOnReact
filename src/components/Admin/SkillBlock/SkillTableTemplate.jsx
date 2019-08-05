import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';
import SkillFilterSelect from './SkillFilter-Select';
import SearchByName from '../ComponentsPieces/SearchByName';
import SelectPageLimit from '../ComponentsPieces/SelectPageLimit';
import PaginationButton from '../ComponentsPieces/PaginationButton';

function CareerTableTemplate({ tableData, themeList, languageList, removeTableData, filterState, showModal, searchState, selectLimitNumber, chooseSort, pageArr, setPageNumber, limitNumber, sort }) {
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
          tableData.data && tableData.data.map(item =>
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="hidden__col__big">{item.descr}</td>
              <td className="hidden__col__big">{item.img}</td>
              <td className="hidden__col">{item.bgColor}</td>
              <td className="hidden__col">{item.theme && item.theme.map(themeNumber =>
                themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
                ).find(item =>
                  item !== '',
                )
              ).join(', ')
              }</td>
              <td className="hidden__col">{item.language && item.language.map(languageNumber =>
                languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
                ).find(item =>
                  item !== ''
                )
              ).join(', ')
              }</td>
              <td className="hidden__col">{item.period}</td>
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
};

export default CareerTableTemplate;
