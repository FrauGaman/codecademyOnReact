import React from 'react';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function CareerTableTemplate({ tableData,  removeData }) {
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
          <th>Period</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.map(item =>
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.descr}</td>
              <td>{item.img}</td>
              <td>{item.bgColor}</td>
              <td>{item.theme}</td>
              <td>{item.language}</td>
              <td>{item.period}</td>
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
