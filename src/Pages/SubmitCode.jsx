import React, { useState, useContext, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import { useLocation } from 'react-router-dom';
import SoalParameter from '../Assets/Soal/Parameter.pdf';
import VariabelGlobal from '../Assets/Soal/VariabelGlobal.pdf';
import CallReference from '../Assets/Soal/CallReference.pdf';
import CallValue from '../Assets/Soal/CallValue.pdf';
import Fungsi from '../Assets/Soal/Fungsi.pdf';
import Prosedur from '../Assets/Soal/Prosedur.pdf';
import { AuthContext } from '../Contexts/Authentication';
import MateriParameter from '../Assets/Accomodator/parameter.pdf';
import MateriFungsi from '../Assets/Accomodator/fungsi.pdf';
import MateriProsedur from '../Assets/Accomodator/prosedur.pdf';
import MateriReference from '../Assets/Accomodator/reference.pdf';
import MateriValue from '../Assets/Accomodator/value.pdf';
import MateriVariable from '../Assets/Accomodator/variable.pdf';
const axios = require('axios');

const PDF_MATERI = [
  {
    id: 27,
    pdf: SoalParameter,
    materi: MateriParameter,
  },
  {
    id: 38,
    pdf: CallReference,
    materi: MateriReference,
  },
  {
    id: 26,
    pdf: Fungsi,
    materi: MateriFungsi,
  },
  {
    id: 35,
    pdf: CallValue,
    materi: MateriValue,
  },
  {
    id: 25,
    pdf: Prosedur,
    materi: MateriProsedur,
  },
  {
    id: 34,
    pdf: VariabelGlobal,
    materi: MateriVariable,
  },
];

const SubmitCode = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [answer, setAnswer] = useState(null);
  const auth = useContext(AuthContext);
  const params = new URLSearchParams(useLocation().search);
  const id = params.get('id');
  const title = params.get('title');
  const materi = PDF_MATERI.filter((data) => {
    return data.id === parseInt(id);
  })[0];

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({ id_code: materi.id, id_siswa: auth.data.id });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(`${process.env.REACT_APP_API_URL}/code/get/status/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== undefined) {
          if (result.length !== 0) {
            setStatus(result);
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            const raw = JSON.stringify({
              id_submission: result[result.length - 1].id_submission,
            });
            const requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow',
            };

            fetch(`${process.env.REACT_APP_API_URL}/get/answer`, requestOptions)
              .then((response) => response.json())
              .then((data) => {
                setAnswer(data[0]);
              })
              .catch((error) => console.log('error', error));
          }
        }
      })
      .catch((error) => console.log('error', error));
  }, [materi, auth]);

  const getAnwser = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      id_submission: status[status.length - 1].id_submission,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_URL}/get/answer`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAnswer(result[0]);
      })
      .catch((error) => console.log('error', error));
  };

  const getAnswers = (response) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      id_submission: response.data.id,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_URL}/get/answer`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setAnswer(data[0]);
      })
      .catch((error) => console.log('error', error));
  };

  const getStatus = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      id_code: materi.id,
      id_siswa: auth.data.id,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(`${process.env.REACT_APP_API_URL}/code/get/status/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStatus(result);
      })
      .catch((error) => console.log('error', error));
  };

  const uploadFile = () => {
    const formdata = new FormData();
    formdata.append('problem', materi.id);
    formdata.append('language', 'c');
    formdata.append('code', file);
    formdata.append('id_code', materi.id);
    formdata.append('id_siswa', auth.data.id);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'Basic dXNlcnBsOnBhc3N3b3Jk',
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/submit/answer/`, formdata, config)
      .then((response) => {
        getAnswers(response);
        getStatus();
      })
      .catch((error) => {});
  };

  let result = (
    <div className='alert alert-secondary' role='alert'>
      Belum Submit Jawaban
    </div>
  );

  if (status === null) {
    result = (
      <div className='alert alert-secondary' role='alert'>
        Belum Submit Jawaban
      </div>
    );
  } else if (answer === null || answer === undefined) {
    result = (
      <div className='alert alert-warning' role='alert'>
        Dalam Proses
      </div>
    );
  } else if (answer.judgement_type_id === 'AC') {
    result = (
      <div className='alert alert-success' role='alert'>
        Jawaban Benar
      </div>
    );
  } else {
    result = (
      <div className='alert alert-danger' role='alert'>
        Jawaban Salah
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <PageTitle title={`${title}`} />
      <div className='container bg-white p-3'>
        <div className='d-flex'>
          <a
            href={materi.pdf}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark mr-2'
          >
            Download Soal
          </a>
          <a
            href={materi.materi}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-outline-info mr-2'
          >
            Download Materi
          </a>
        </div>
        <hr />
        <p>Download soal diatas, lalu kerjakan sesuai dengan perintahnya.</p>
        <p>
          Kalian boleh menggunakan compiler offline yang ada di laptop kalian.
        </p>
        <p>
          Atau menggunakan compiler online yang ada di{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ideone.com/'
          >
            link
          </a>{' '}
          berikut.
        </p>
        <p>Upload hasilnya dengan menekan tombol di bawah ini</p>
        <hr />
        <div className='d-flex align-items-center'>
          <input
            type='file'
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button
            onClick={() => {
              if (file === null) {
                alert('Masukan file');
                return;
              }
              uploadFile();
            }}
            className='btn btn-success mr-2'
          >
            Upload
          </button>
          <button onClick={getAnwser} className='btn btn-warning'>
            Refresh
          </button>
        </div>
        <hr />
        {result}
      </div>
    </div>
  );
};

export default SubmitCode;
