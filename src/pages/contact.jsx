import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/6.2.2/pdf.worker.js`;

const MyApp = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }

  const loadErrorHandler = () => {
    
  }


  return (
    <div className='bg-neutral-900 w-full'>
      <div className='xl:container mx-auto'>
        <div className='max-w-max mx-auto  border-2 border-[#edbd10]'>
          {
          <Document onLoadError={console.error} file="/resume.pdf" imageResourcesPath="/public" options={{ workerSrc: "/pdf.worker.js" }} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          }
        </div>
      </div>
    </div>

  );
}

export default MyApp;
