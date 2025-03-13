import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  // Check if all images are loaded
  useEffect(() => {
    const images = document.images;
    let loadedCount = 0;
    const totalImages = images.length;

    const onImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === totalImages) setImagesLoaded(true);
    };

    if (totalImages === 0) {
      setImagesLoaded(true);
    } else {
      Array.from(images).forEach(img => {
        if (img.complete) onImageLoad();
        else {
          img.addEventListener('load', onImageLoad);
          img.addEventListener('error', onImageLoad);
        }
      });
    }
  }, []);

  // Generate canvas from element
  const generateCanvas = async (element) => {
    const canvas = await html2canvas(element, {
      scale: 1,
      useCORS: true,
      backgroundColor: '#FFFFFF',
    });
    return canvas.toDataURL('image/png');
  };

  // Handle print window creation
  const createPrintWindow = (imgData1, imgData2) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
            img { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            .page-break { page-break-before: always; }
            .loading {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
              font-size: 24px;
            }
            .loading-spinner {
              display: inline-block;
              width: 50px;
              height: 50px;
              border: 5px solid #f3f3f3;
              border-top: 5px solid #3498db;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @media print {
              * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              .loading { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="loading">
            <div class="loading-spinner"></div>
            <p>Preparing document for print...</p>
          </div>
          ${imgData1 ? `<img src="${imgData1}" alt="Page 1" style="display: none" onload="this.style.display='block'">` : ''}
          ${imgData2 ? `<img src="${imgData2}" alt="Page 2" class="page-break" style="display: none" onload="this.style.display='block'">` : ''}
          <script>
            window.addEventListener('load', function() {
              const images = document.getElementsByTagName('img');
              let loadedImages = 0;
              const checkAllImagesLoaded = () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  document.querySelector('.loading').style.display = 'none';
                  window.print();
                }
              };
              Array.from(images).forEach(img => {
                if(img.complete) checkAllImagesLoaded();
                else {
                  img.addEventListener('load', checkAllImagesLoaded);
                  img.addEventListener('error', checkAllImagesLoaded);
                }
              });
            });
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    return printWindow;
  };

  const handlePrint = async (action) => {
    if (!imagesLoaded) {
      alert('Images are still loading. Please try again in a moment.');
      return;
    }

    if (action === 'download') {
      setIsDownloading(true);
    } else {
      setIsPrinting(true);
    }

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const [pdfWidth, pdfHeight] = [190, 120];

      const card1 = document.getElementById('card1');
      const card2 = document.getElementById('card2');

      const imgData1 = card1 ? await generateCanvas(card1) : null;
      if (imgData1) {
        pdf.addImage(imgData1, 'PNG', 10, 10, pdfWidth, pdfHeight);
      }

      const imgData2 = card2 ? await generateCanvas(card2) : null;
      if (imgData2) {
        pdf.addPage();
        pdf.addImage(imgData2, 'PNG', 10, 10, pdfWidth, pdfHeight);
      }

      if (action === 'download') {
        pdf.save('document.pdf');
      } else if (action === 'print') {
        createPrintWindow(imgData1, imgData2);
      }
    } catch (error) {
      console.error('Error during print/download:', error);
      alert('An error occurred. Please try again.');
    } finally {
      if (action === 'download') setIsDownloading(false);
      else setIsPrinting(false);
    }
  };

  const getButtonText = (type) => {
    if (!imagesLoaded) return 'Loading Images...';
    if (type === 'download') return isDownloading ? 'Generating PDF...' : 'Download PDF';
    return isPrinting ? 'Preparing Print...' : 'Print Page';
  };

  return (
    <div>
      <style>
        {`
          @media print {
            * {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        `}
      </style>
      <button
        onClick={() => handlePrint('download')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 print:hidden print-button"
        disabled={!imagesLoaded || isDownloading || isPrinting}
      >
        {getButtonText('download')}
      </button>

      <button
        onClick={() => handlePrint('print')}
        className="mb-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 print:hidden"
        disabled={!imagesLoaded || isDownloading || isPrinting}
      >
        {getButtonText('print')}
      </button>

      <img src="/favicon.svg" alt="" className="" />

      <div
        id="card1"
        className="!w-[1009px] !h-[635px] relative bg-[url('/IDf-05.svg')]"
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
        className="!w-[1009px] !h-[635px] mt-[20px] relative bg-[url('/img2.svg')] mb-10"
      >
        <div>
          <div className="w-[851px] h-[102px] absolute font-sans top-[66px] left-1/2 transform -translate-x-1/2">
            <div className="w-full h-full font-semibold text-justify text-[26px] leading-[32.68px]">
              "Zeeshan Tahashidar, employed by Quality Base Inspection Company, has successfully completed the Operator Training Course and is now certified to work as a Crane Operator."
            </div>
          </div>

          <div>
            <div className={`absolute ${isPrinting || isDownloading ? 'top-[207px]' : 'top-[220px]'} left-[75px] flex gap-28 text-[31px] font-bold font-sans`}>
              AUTHORIZED SIGNATORY
              <div>
                AUTHORIZED COMPANY
              </div>
            </div>
            <img
              src="/Vector (1).svg"
              alt=""
              className="absolute top-[299px] left-[152px] w-auto h-auto"
            />
            <div className="absolute top-[280px] left-[499px] gap-5 flex">
              <div className="flex gap-8 pt-2 flex-col text-[25px] font-semibold">
                <img src="/Phone.svg" alt="" className="w-auto h-auto" />
                <img src="/Mail.svg" alt="" className="w-auto h-auto" />
                <img src="/Web.svg" alt="" className="w-auto h-auto" />
                <img src="/Map pin.svg" alt="" className="w-auto h-auto" />
              </div>
              <div className="flex gap-5 flex-col text-[25px] font-semibold">
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