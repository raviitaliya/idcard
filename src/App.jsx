
const App = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 print:hidden"
      >
        Print Page
      </button>

      <div className='w-[1011px] h-[637.5px] relative'>
        <img src="../public/images/Group 39.svg" alt="" className='absolute opacity-30' />
        <div>
          <div className='w-[884.3px] h-[92px] absolute  top-[33px] left-1/2 transform -translate-x-1/2'>
            <img src="../public/images/Group 40.svg" alt="" className=' absolute  z-50' />
          </div>
          <div>
            <img src="../public/images/Group (3).svg" alt="" className='absolute top-[197px] left-[392px]' />
          </div>
          <div>
            <img src="../public/images/Rectangle.svg" alt="" className='absolute top-[225px] left-[66px] z-10' />
            <img src="../public/images/mem_dots_arrow.svg" alt="" className='absolute top-[375px] left-[22px]' />
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
            <img src="../public/images/Group (2).svg" alt="" className='absolute top-[245px] left-[777.5px] z-20' />
          </div>


          <div>
            <img src="../public/images/Group 31.svg" alt="" className='absolute top-[501px] left-[141px] z-10' />
          </div>

        </div>
        <img src="../public/images/Group 38.svg" alt="" className='absolute right-0 opacity-30 z-0' />
      </div>




      <div className='w-[1011px] h-[637.5px] mt-7 relative'>
        <img src="../public/images/Group 39.svg" alt="" className='absolute opacity-30' />
        <div>
          <div className='w-[851.3px] h-[102px] absolute font-sans  top-[60px] left-1/2 transform -translate-x-1/2'>
            <div className=' w-full h-full  font-semibold text-[24px] leading-[32.68px] ' >
              "Zeeshan Tahashidar, employed by Quality Base Inspection Company, has successfully completed the Operator Training Course and is now certified to work as a Crane Operator."
            </div>
          </div>

          <div>
            <img src="../public/images/Group 25.svg" alt="" className='absolute top-[312px] left-[389px]' />
          </div>

          <div>
            <img src="../public/images/Rectangle 8.svg" alt="" className='absolute top-[186px]' />

            <div className='absolute top-[225px] left-[78px] text-[28px] font-bold font-sans' >
              AUTHORISED SIGNATORY
            </div>

            <img src="../public/images/Vector (1).svg" alt="" className='absolute top-[299px] left-[152px]' />
            <div className='absolute top-[225px] left-[567px] text-[28px] font-bold font-sans' >
              AUTHORISED COMPANY
            </div>
            <div className='absolute top-[287px] left-[499px]' />
            <div className='absolute top-[287px] left-[499px] flex gap-8  text-[24px] font-semibold'>
              <img src="../public/images/Phone.svg" alt="" />
              <p>+966 13363 6833</p>
            </div>

            <div className='absolute top-[350px] left-[499px] flex gap-8  text-[24px] font-semibold' >
              <img src="../public/images/Mail.svg" alt="" />
              <p>info@qbic.com.sa</p>
            </div>

            <div className='absolute top-[405px] left-[499px] flex gap-8  text-[24px] font-semibold' >
              <img src="../public/images/Web.svg" alt="" />
              <p>www.qbic.com.sa</p>
            </div>

            <div className='absolute top-[460px] left-[499px] flex gap-8  text-[24px] font-semibold' >
              <img src="../public/images/Map pin.svg" alt="" />
              <p>Yarmouk Road, Arifi industrial Area, PO BOX 2985, Al Jubail 35525, Kingdom of Saudi Arabia</p>
            </div>



          </div>


        </div>
        <img src="../public/images/Group 38.svg" alt="" className='absolute right-0 opacity-30' />
      </div>
    </div>
  )
}

export default App