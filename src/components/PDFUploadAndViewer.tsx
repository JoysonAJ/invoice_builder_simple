import { useState, type ChangeEvent, type DragEvent } from "react";
import { Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFUploadAndViewer() {

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [dragActive, setDragActive] = useState<boolean>(false);


  return (
    <div className="flex flex-col  h-screen bg-gray-50 ml-10 w-full">
    {!pdfFile ? (
      // Upload Area
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full h-[70vh] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed transition 
          ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-400 bg-white"}`}
      >
        <img
          src="/src/assets/invoice_image.png"
          alt="Upload"
          className="w-32 h-32 mb-4 opacity-80"
        />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Drag & Drop your PDF here
        </h2>
        <p className="text-gray-500 mb-4">or click the button below to upload</p>

        <label
          htmlFor="pdf-upload"
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Choose PDF
        </label>
        <input
          id="pdf-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    ) : (
      // PDF Viewer Area
      <div className=" bg-white border border-gray-300 rounded-2xl shadow-lg overflow-auto flex flex-col items-center p-4 pb-10">
        <div className="flex justify-between items-center w-full mb-3">
          <h3 className="font-medium text-gray-800 truncate">
            {pdfFile.name}
          </h3>
          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
          >
            Clear
          </button>
        </div>

        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p className="text-gray-500">Loading PDF...</p>}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={500}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
    )}
  </div>
  )

   // Handle file selection via input
   function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }
    setPdfFile(file);
  }

  // Handle drag events
  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function handleClear() {
    setPdfFile(null);
    setNumPages(0);
  }
}
