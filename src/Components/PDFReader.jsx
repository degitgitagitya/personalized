import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { withRouter } from 'react-router-dom';
import FileProsedur from '../Assets/1. PROSEDUR.pdf';
import FileFungsi from '../Assets/2. FUNGSI.pdf';
import FileParameter from '../Assets/3. PARAMETER.pdf';
import FilePengiriman from '../Assets/4. PENGIRIMAN PARAMETER.pdf';
import FileRuang from '../Assets/5. RUANG LINGKUP VARIABEL.pdf';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
    title: 'Parameter',
    file: FileParameter,
  },
  {
    id: 4,
    title: 'Pengiriman Parameter',
    file: FilePengiriman,
  },
  {
    id: 5,
    title: 'Ruang Ringkup Variable',
    file: FileRuang,
  },
];

const PDFReader = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const materi = DATA_MATERI.filter((data) => {
    return data.id === parseInt(id);
  })[0];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <NavBar></NavBar>
      <PageTitle title={materi.title}></PageTitle>
      <div className='container'>
        <div className='daftar-sub-materi-container'>
          <div className='d-flex justify-content-center'>
            <a
              href={materi.file}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-dark'
            >
              Download
            </a>
          </div>
          <hr />
          <div className='d-flex justify-content-center'>
            <Document
              file={materi.file}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
          <hr />
          <p className='text-center'>
            Page {pageNumber} of {numPages}
          </p>
          <hr />
          <div className='d-flex justify-content-center'>
            <button
              disabled={pageNumber === 1 ? true : false}
              className='mr-3 btn btn-info'
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              Previous
            </button>
            <button
              disabled={pageNumber === numPages ? true : false}
              className='btn btn-info'
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PDFReader);
