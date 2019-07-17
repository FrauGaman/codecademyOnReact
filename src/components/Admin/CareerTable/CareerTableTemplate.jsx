import React from 'react';
import Table from 'react-bootstrap/Table';
import Icon from '../../Icons/Icons';

function CareerTableTemplate({ tableData }) {
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
          tableData.map((item) =>
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.descr}</td>
              <td>{item.img}</td>
              <td>{item.bgColor}</td>
              {/*сделать map на темы, внутри которого сравнивать id тем и их названия с id из этого массива */}
              <td>{item.theme}</td>
              <td>{item.language}</td>
              <td>{item.knowledge}</td>
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