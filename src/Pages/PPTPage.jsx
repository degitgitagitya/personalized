import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const PPTList = (props) => {
  let history = useHistory();

  return (
    <div className='bg-white shadow-sm p-3 m-1' style={{ width: '24%' }}>
      <button
        className='btn btn-info w-100'
        onClick={() => {
          history.push(`/slide-show?url=${props.url}`);
        }}
      >
        Mulai
      </button>
      <hr />
      <h5>{props.title}</h5>
      <hr />
      <p>{props.description}</p>
    </div>
  );
};

const PPTPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_URL}/slide/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.list_of_slide);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className='d-flex flex-wrap'>
      {data.length !== 0
        ? data.map((data, index) => {
            return (
              <PPTList
                key={index}
                id={data.id}
                title={data.title}
                description={data.description}
                url={data.url}
              />
            );
          })
        : ''}
    </div>
  );
};

export default PPTPage;
