import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const CodeItem = ({ title, id }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        history.push(`/submit-code?id=${id}&title=${title}`);
      }}
      className='m-1'
      style={{ width: '19.25%' }}
    >
      <div className='bg-white shadow-sm p-3'>
        <h5>{title}</h5>
        <hr />
        <button className='btn btn-info w-100'>Mulai</button>
      </div>
    </div>
  );
};

const CodeList = () => {
  const [dataCode, setDataCode] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `${process.env.REACT_APP_DOM_SERVER}/contests/3/problems`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const data = result.sort(compare);
        setDataCode(data);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className='d-flex flex-wrap'>
      {dataCode.map((data) => {
        return <CodeItem key={data.id} title={data.name} id={data.id} />;
      })}
    </div>
  );
};

export default CodeList;
