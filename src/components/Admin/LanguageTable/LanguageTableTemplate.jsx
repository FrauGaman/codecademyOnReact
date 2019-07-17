import React from 'react';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function LanguageTableTemplate({ tableData }) {
  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Link</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.descr}</td>
              <td>{item.link}</td>
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

export default LanguageTableTemplate;
