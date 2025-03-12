const App = () => {
  const handlePrint = async () => {
    const canvas1 = document.createElement('canvas');
    const canvas2 = document.createElement('canvas');
    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    canvas1.width = 1011;
    canvas1.height = 637.5;
    canvas2.width = 1011;
    canvas2.height = 637.5;

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
      });
    };

    try {
      const [bgImage1, rectangle, groupImage, group31, bgImage2, rectangle8, vector, phone, mail, web, mapPin] = await Promise.all([
        loadImage('/ID-05.svg'),
        loadImage('/Rectangle.svg'),
        loadImage('/Group (2).svg'),
        loadImage('/Group 31.svg'),
        loadImage('/ID-06.svg'),
        loadImage('/Rectangle 8.svg'),
        loadImage('/Vector (1).svg'),
        loadImage('/Phone.svg'),
        loadImage('/Mail.svg'),
        loadImage('/Web.svg'),
        loadImage('/Map pin.svg')
      ]);

      ctx1.drawImage(bgImage1, 0, 0, 1011, 637.5);
      ctx1.drawImage(rectangle, 66, 225);
      ctx1.drawImage(groupImage, 777.5, 225);
      ctx1.drawImage(group31, 141, 501);

      ctx1.font = 'bold 24px sans-serif';
      ctx1.fillStyle = 'black';
      
      const leftLabels = ['NAME', 'IQAMA/PASSPORT', 'ISSUED DATE', 'EXPIRY DATE', 'ID NUMBER', 'COMPANY NAME'];
      const rightValues = ['ZEESHAN TAHASHILDAR', '1234567', '25-DEC-2024', '24-DEC-2025', 'QBIC-ABC12345', 'QUALITY BASE INSPECTION COMPANY'];
      
      leftLabels.forEach((label, index) => {
        ctx1.fillText(label, 245, 200 + (index * 40));
        ctx1.fillText(': ' + rightValues[index], 400, 200 + (index * 40));
      });

      // Draw second card
      ctx2.drawImage(bgImage2, 0, 0, 1011, 637.5);
      ctx2.drawImage(rectangle8, 0, 186);
      ctx2.drawImage(vector, 152, 299);

      // Add text for second card
      ctx2.font = 'bold 31px sans-serif';
      ctx2.fillText('AUTHORISED SIGNATORY', 75, 252);
      ctx2.fillText('AUTHORISED COMPANY', 567, 252);

      ctx2.font = 'semibold 25px sans-serif';
      ctx2.fillText('+966 13363 6833', 575, 310);
      ctx2.fillText('info@qbic.com.sa', 575, 373);
      ctx2.fillText('www.qbic.com.sa', 575, 428);
      ctx2.fillText('Yarmouk Road, Arifi industrial Area, PO BOX 2985,', 575, 483);
      ctx2.fillText('Al Jubail 35525, Kingdom of Saudi Arabia', 575, 513);

      const printContainer = document.createElement('div');
      printContainer.style.display = 'none';
      printContainer.appendChild(canvas1);
      printContainer.appendChild(document.createElement('div')).style.marginBottom = '1000px';
      printContainer.appendChild(canvas2);
      document.body.appendChild(printContainer);

      window.print();
      document.body.removeChild(printContainer);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 print:hidden"
      >
        Print Page
      </button>

      <img src="/favicon.svg" alt="" className="" />

      <div className='w-[1011px] h-[637.5px] relative'>
        <img src="/ID-05.svg" alt="" className='absolute opacity-90' />
        <div>

          <div>
            <img src="/Rectangle.svg" alt="" className='absolute top-[225px] left-[66px] z-10' />

            <div className="bg-white w-full">
              <img src="/Group (2).svg" alt="" className='absolute top-[225px] left-[777.5px] z-20 bg-white p-3' />
            </div>
          </div>

          <div className='absolute top-[167px] left-[245px] text-[24px] font-sans'>
            <div className='flex gap-4 z-10'>
              <div className='font-bold flex flex-col gap-4 '>
                <p>NAME</p>
                <p>IQAMA/PASSPORT</p>
                <p>ISSUED DATE</p>
                <p>EXPIRY DATE</p>
                <p>ID NUMBER</p>
                <p>COMPANY NAME</p>
              </div>

              <div className='font-bold flex flex-col gap-4 '>
                <p>:   ZEESHAN TAHASHILDAR</p>
                <p>:   1234567</p>
                <p>:   25-DEC-2024</p>
                <p>:   24-DEC-2025</p>
                <p>:   QBIC-ABC12345</p>
                <p>:   QUALITY BASE INSPECTION COMPANY</p>
              </div>
              <div>

              </div>
            </div>
          </div>


          <div>
            <img src="/Group 31.svg" alt="" className='absolute top-[501px] left-[141px] z-10 ' />
          </div>

        </div>
      </div>




      <div className='w-[1011px] h-[637.5px] mt-[1000px] relative'>
        <img src="/ID-06.svg" alt="" className='absolute opacity-80' />
        <div>
          <div className='w-[851.3px] h-[102px] absolute font-sans  top-[60px] left-1/2 transform -translate-x-1/2'>
            <div className=' w-full h-full  font-semibold text-justify text-[26px] leading-[32.68px] ' >
              "Zeeshan Tahashidar, employed by Quality Base Inspection Company, has successfully completed the Operator Training Course and is now certified to work as a Crane Operator."
            </div>
          </div>



          <div>
            <img src="/Rectangle 8.svg" alt="" className='absolute top-[186px]' />

            <div className='absolute top-[221px] left-[75px] text-[31px] font-bold font-sans' >
              AUTHORISED SIGNATORY
            </div>

            <img src="/Vector (1).svg" alt="" className='absolute top-[299px] left-[152px]' />
            <div className='absolute top-[221px] left-[567px] text-[31px] font-bold font-sans' >
              AUTHORISED COMPANY
            </div>
            <div className='absolute top-[287px] left-[499px]' />
            <div className='absolute top-[287px] left-[499px] flex gap-8  text-[25px] font-semibold'>
              <img src="/Phone.svg" alt="" />
              <p>+966 13363 6833</p>
            </div>

            <div className='absolute top-[350px] left-[499px] flex gap-8  text-[25px] font-semibold' >
              <img src="/Mail.svg" alt="" />
              <p>info@qbic.com.sa</p>
            </div>

            <div className='absolute top-[405px] left-[499px] flex gap-8  text-[25px] font-semibold' >
              <img src="/Web.svg" alt="" />
              <p>www.qbic.com.sa</p>
            </div>

            <div className='absolute top-[460px] left-[499px] flex gap-8 w-[460px] text-justify  text-[25px] font-semibold' >
              <img src="/Map pin.svg" alt="" />
              <p>Yarmouk Road, Arifi industrial Area, PO BOX 2985, Al Jubail 35525, Kingdom of Saudi Arabia</p>
            </div>



          </div>


        </div>
      </div>
    </div>
  )
}

export default App