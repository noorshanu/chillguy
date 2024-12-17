import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section
      className="bg-about -mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden min-h-screen"
      id="about"
    >
      <div className=" container-wrapper pt-[7%] ">
        <div className="relative flex justify-center flex-col sm:flex-row items-center gap-4">
    

          <div
            className=" w-full sm:w-1/2"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h1 className=" bg-[#9EB680] border-[#cd8854] border-2 rounded-xl p-2 text-4xl font-bold font-dream text-white text-center mb-4">
              About us
            </h1>
            <div className="bg-[#9EB680] border-[#cd8854] border-2 rounded-xl p-2 ">
              <p className=" text-lg text-white  py-2">
                Purple Pepe is the real alpha Pepe on Solana. From humble
                beginnings to millionaire status with a flashy Lambo, $PUPE
                journey is legendary. Now, he's on a mission to uplift his
                entire bro gang.
              </p>

              <p className=" text-lg text-white">
                Driven by unity and strength, the Purple Pepe community aims for
                financial freedom. With $PUPE leading the way, join the movement
                where memes meet millionaires and wealth is within reach for
                all.
              </p>

              <div className=" m-4 mx-auto flex justify-center">
                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/BmJzRiQyEwXB6kPADAc3xUGn68Yu5wkNSmZbjspjAvnS?t=1721393113503"
                  className=" mx-auto font-dream    relative 
        bg-[#E55D2D] 
        text-white 
        font-bold 
        inline-block 
        border-4 
        border-[#1E1E1E] 
        shadow-[4px_4px_0_0_#1E1E1E]
        transition-all 
        duration-200
        hover:translate-x-[2px]
        hover:translate-y-[2px]
        hover:shadow-[2px_2px_0_0_#1E1E1E]
        active:translate-x-[4px]
        active:translate-y-[4px]
        active:shadow-none
        rounded-md
        px-4 py-2 text-[18px] sm:text-[18px] w-full text-center font-luck
        text-[18px] sm:text-[28px]
               hover:text-[#fff] 
               uppercase"
                >
                
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
