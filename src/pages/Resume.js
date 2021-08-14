import React from "react";
import resume from "../assets/Resume.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <section
      id="projects"
      className="grid grid-cols-12 m-2 mt-8 self-center flex-grow min-w-full"
    >
      <div
        className="col-start-3 col-span-8
      flex flex-col m-2"
      >
        <h2 className="col-start-1 xl:col-start-2 col-span-3 flex flex-col items-center text-2xl">
          Resume
          <div className="divider m-3 h-1 w-96 rounded bg-dark ml-2"></div>
        </h2>
        <div
          className="flex flex-col content-center"
          style={{ maxHeight: "min-content" }}
        >
          <Document
            file={resume}
            className="flex content-center place-self-center"
          >
            <Page
              pageNumber={1}
              renderAnnotationLayer={false}
              width="1000"
              scale="0.60"
            />
          </Document>
        </div>
        <a
          href={resume}
          download
          className="bg-pop m-2 mt-8 py-1 p-4 ring-2 rounded h-8 flex-shrink w-28 text-center self-center"
        >
          <button>Download</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
