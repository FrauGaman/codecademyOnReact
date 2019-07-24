import React from 'react';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function CareerTableTemplate({ tableData, themeList, languageList, knowledgeList, removeData, showModal }) {
  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Title</th>
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
                  <div onClick={() => showModal()}>
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

export default CareerTableTemplate;
