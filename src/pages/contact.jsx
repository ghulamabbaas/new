import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.7/pdf.worker.js`;

const MyApp = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }

 


  return (
    <div className='bg-neutral-900 w-full'>
      <div className='xl:container mx-auto'>
        <div className='max-w-max mx-auto  border-2 border-[#edbd10]'>
          {
          <Document file="/resume.pdf" imageResourcesPath="/public" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          }
        </div>
      </div>
    </div>

  );
}

export default MyApp;
