import React from 'react';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function CareerTableTemplate({ tableData }) {
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
          tableData.map((item) =>
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.descr}</td>
              <td>{item.importance}</td>
              <td>{item.icon}</td>
              <td>{item.borderColor}</td>
              <td>{item.theme}</td>
              <td>{item.language}</td>
              <td>
                <Icon iconName={'edit'} className={'editIcon'} />
                <Icon iconName={'delete'} className={'delIcon'} />
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
