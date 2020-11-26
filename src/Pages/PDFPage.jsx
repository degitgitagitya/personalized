import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FileProsedur from '../Assets/1. PROSEDUR.pdf';
import FileFungsi from '../Assets/2. FUNGSI.pdf';
import FileParameter from '../Assets/3. PARAMETER.pdf';
import FilePengiriman from '../Assets/4. PENGIRIMAN PARAMETER.pdf';
import FileRuang from '../Assets/5. RUANG LINGKUP VARIABEL.pdf';

const DATA_MATERI = [
  {
    id: 1,
    title: 'Prosedur',
    file: FileProsedur,
  },
  {
    id: 2,
    title: 'Fungsi',
    file: FileFungsi,
  },
  {
    id: 3,
    title: 'Parameter Pada Fungsi',
    file: FileParameter,
  },
  {
    id: 4,
    title: 'Pengiriman Parameter',
    file: FilePengiriman,
  },
  {
    id: 5,
    title: 'Variabel Pada Fungsi',
    file: FileRuang,
  },
];

class PDFPage extends Component {
  render() {
    return (
      <div
        style={{ marginLeft: '0.6rem', marginRight: '0.6rem' }}
        className='mt-3'
      >
        <div className='d-flex'>
          {DATA_MATERI.map((data) => {
            return (
              <div
                key={data.id}
                className='bg-white p-3 flex-wrap'
                style={{ width: '20%', margin: '0.1rem' }}
              >
                {data.title}
                <hr />
                <button
                  onClick={() => {
                    this.props.history.push(`/pdf-reader?id=${data.id}`);
                  }}
                  className='btn btn-info w-100'
                >
                  Mulai
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(PDFPage);
