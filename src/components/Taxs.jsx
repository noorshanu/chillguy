import React from "react";

function Taxs() {
  return (
    <section className="bg-[#0f131c] pt-[2%] pb-[8%]  relative "  >
      {/* <img
        src="images/mon.png"
        alt=""
        className=" absolute top-[-10%] left-auto right-[40%] z-10 floating h-[200px]  sm:h-[300px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      /> */}

      <div
      data-aos="zoom-in-up"
    data-aos-duration="1500"
      className=" container-wrapper bg-[#171c22] border-4  border-[#794432] rounded-3xl box-s2 py-4 px-4 relative z-20 flex flex-col sm:flex-row justify-between gap-4">
        <a
          href="#"
          className=" block max-w-sm p-6 bg-[#9EB680] border border-gray-200 rounded-lg shadow    w-full sm:w-[250px]"
        >
          <img src="/images/burn.jpg" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
           LP Burning
          </h5>
          <p className="font-normal text-white text-center">LP LOCKED</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-[#9EB680] border border-gray-200 rounded-lg shadow    w-full sm:w-[250px]"
        >
          <img src="/images/tax.jpg" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            No Taxes
          </h5>
          <p className="font-normal text-white text-center">0% BUY / 0% SELL</p>
        </a>

        <a
          href="#"
          className=" block max-w-sm p-6 bg-[#9EB680] border border-gray-200 rounded-lg shadow    w-full sm:w-[250px]"
        >
          <img src="/images/con.jpg" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            Contract
          </h5>
          <p className="font-normal text-white text-center">Mint REVOKED</p>
        </a>

        <a
          href="#"
          className=" block max-w-sm p-6 bg-[#9EB680] border border-gray-200 rounded-lg shadow    w-full sm:w-[250px]"
        >
          <img src="/images/supp.jpg" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
         Supply
          </h5>
          <p className="font-normal text-white text-center">1 B</p>
        </a>
      </div>

      <div className=" flex justify-center flex-col items-center">
        <div>
            <p className=" text-center text-yellow-300 mt-4">CHILL POU UTILITY TOKEN - SOLANA CHAIN </p>

            <h1 className=" text-xl sm:text-5xl font-bold font-luck text-center text-white py-2">
            Total Supply 1.000.000.000
            </h1>
            <p className="text-center text-yellow-300 mt-4">
            Contract Adress: Soon.....
            </p>
        </div>

      </div>
    </section>
  );
}

export default Taxs;
