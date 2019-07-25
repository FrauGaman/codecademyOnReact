import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';


function CareerTableTemplate({ tableData, themeList, languageList, removeData, showModal }) {
  return (
    <div className="table use__bootstrap">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Title</th>
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
};

export default CareerTableTemplate;
