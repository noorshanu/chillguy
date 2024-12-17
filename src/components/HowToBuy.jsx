import React from "react";
import Slider from "./Slider";

function HowToBuy() {
  return (
    <section className="bg-[#0f131c] py-[2%]">
      <div className=" container-wrapper">
        <div className=" flex items-center justify-center gap-4">
          <div
            className=" bg-[#171c22] border-4 border-[#794432] box-s2 rounded-3xl py-8 px-4 w-full sm:w-1/2 h-full"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className=" text-3xl sm:text-7xl font-bold font-luck py-1 text-center text-white">
              {" "}
              How To BUY
            </h1>
            <h2 className=" text-2xl sm:text-7xl font-bold font-dream py-2 text-center text-white">
              Chill Pou
            </h2>
          </div>

          <div
            className="bg-[#171c22] border-4 border-[#794432] box-s2 rounded-3xl p-2 h-full"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/hero4.png" alt="" className=" h-[180px] sm:h-[220px]" />
          </div>
        </div>

        <div className=" my-4">
 

          <div
            className="bg-[#171c22] border-4 border-[#794432]  box-s2 rounded-3xl p-4 w-full "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
