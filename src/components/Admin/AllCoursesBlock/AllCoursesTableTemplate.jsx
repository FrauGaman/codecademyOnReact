import React from 'react';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function CareerTableTemplate({ tableData, themeList, languageList, removeData }) {
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
                themeList.map(elem =>
                  themeNumber === elem.id ? `${elem.name} ` : '',
                )
              )}</td>
              <td>{item.language.map(languageNumber =>
                languageList.map(elem =>
                  languageNumber === elem.id ? `${elem.name} ` : '',
                )
              )}</td>
              <td>
                <Icon iconName={'edit'} className={'editIcon'} />
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

export default CareerTableTemplate;
