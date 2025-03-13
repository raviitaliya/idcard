import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.images;
    let loadedCount = 0;
    const totalImages = images.length;

    const onImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    if (totalImages === 0) {
      setImagesLoaded(true);
    } else {
      for (let i = 0; i < totalImages; i++) {
        if (images[i].complete) {
          onImageLoad();
        } else {
          images[i].addEventListener('load', onImageLoad);
          images[i].addEventListener('error', onImageLoad);
        }
      }
    }
  }, []);

  const handlePrint = async () => {
    if (!imagesLoaded) {
      alert('Images are still loading. Please try again in a moment.');
      return;
    }

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 190;   
    const pdfHeight = 120;

    const card1 = document.getElementById('card1');
    if (card1) {
      const canvas1 = await html2canvas(card1, {
        scale: 1,
        useCORS: true,
        backgroundColor: '#FFFFFF',
      });
      const imgData1 = canvas1.toDataURL('image/png');
      pdf.addImage(imgData1, 'PNG', 10, 10, pdfWidth, pdfHeight);
    }

    const card2 = document.getElementById('card2');
    if (card2) {
      const canvas2 = await html2canvas(card2, {
        scale: 1,
        useCORS: true,
        backgroundColor: '#FFFFFF', 
      });
      const imgData2 = canvas2.toDataURL('image/png');
      pdf.addPage();
      pdf.addImage(imgData2, 'PNG', 10, 10, pdfWidth, pdfHeight);
    }

    pdf.save('document.pdf');
  };

  return (
    <div>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 print:hidden print-button"
        disabled={!imagesLoaded}
      >
        {imagesLoaded ? 'Print Page' : 'Loading Images...'}
      </button>

      <img src="/favicon.svg" alt="" className="" />

      <div
        id="card1"
        className="!w-[1011px] !h-[637.5px] relative bg-[url('/img1.svg')]"
      >
        <div>
          <div>
            <img
              src="/Rectangle.svg"
              alt=""
              className="absolute top-[225px] left-[66px] z-10 w-auto h-auto"
            />
            <div className="bg-white w-full">
              <img
                src="/Group (2).svg"
                alt=""
                className="absolute top-[225px] left-[777.5px] z-20 bg-white p-3 w-auto h-auto"
              />
            </div>
          </div>

          <div className="absolute top-[167px] left-[245px] text-[24px] font-sans">
            <div className="flex gap-4 z-10">
              <div className="font-bold flex flex-col gap-4">
                <p>NAME</p>
                <p>IQAMA/PASSPORT</p>
                <p>ISSUED DATE</p>
                <p>EXPIRY DATE</p>
                <p>ID NUMBER</p>
                <p>COMPANY NAME</p>
              </div>
              <div className="font-bold flex flex-col gap-4">
                <p>: ZEESHAN TAHASHILDAR</p>
                <p>: 1234567</p>
                <p>: 25-DEC-2024</p>
                <p>: 24-DEC-2025</p>
                <p>: QBIC-ABC12345</p>
                <p>: QUALITY BASE INSPECTION COMPANY</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/Group 31.svg"
              alt=""
              className="absolute top-[501px] left-[141px] z-10 w-auto h-auto"
            />
          </div>
        </div>
      </div>

      <div
        id="card2"
        className="w-[1011px] h-[637.5px] mt-[20px] relative bg-[url('/img2.svg')]"
      >
        <div>
          <div className="w-[851.3px] h-[102px] absolute font-sans top-[60px] left-1/2 transform -translate-x-1/2">
            <div className="w-full h-full font-semibold text-justify text-[26px] leading-[32.68px]">
              "Zeeshan Tahashidar, employed by Quality Base Inspection Company, has successfully completed the Operator Training Course and is now certified to work as a Crane Operator."
            </div>
          </div>

          <div>
            <div className="absolute top-[206px] left-[75px] text-[31px] font-bold font-sans">
              AUTHORIZED SIGNATORY
            </div>
            <img
              src="/Vector (1).svg"
              alt=""
              className="absolute top-[299px] left-[152px] w-auto h-auto"
            />
            <div className="absolute top-[206px] left-[567px] text-[31px] font-bold font-sans">
              AUTHORIZED COMPANY
            </div>
            <div className="absolute top-[287px] left-[499px] gap-5 flex">
              <div className="flex gap-10 pt-2 flex-col text-[25px] font-semibold">
                <img src="/Phone.svg" alt="" className="w-auto h-auto" />
                <img src="/Mail.svg" alt="" className="w-auto h-auto" />
                <img src="/Web.svg" alt="" className="w-auto h-auto" />
                <img src="/Map pin.svg" alt="" className="w-auto h-auto" />
              </div>
              <div className="flex gap-8 flex-col text-[25px] font-semibold">
                <p>+966 13363 6833</p>
                <p>info@qbic.com.sa</p>
                <p>www.qbic.com.sa</p>
                <div className="w-[400px] text-justify text-[25px] font-semibold">
                  <p>Yarmouk Road, Arifi industrial Area, PO BOX 2985, Al Jubail 35525, Kingdom of Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;