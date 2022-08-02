import React from "react";
import Home from "../assets/homepage.png";

const Homepage = () => {
  return (
    <>
      <div className=" my-[37px] md:my-0 font-semibold bg-[#F4F3EE] rounded-[12px] min-w-[80vw] md:min-w-fit max-w-full  box-content md:mx-[25px] h-fit md:h-[860px] md:px-[51px] mx-[19px]">
        <div className="flex items-center text-xs leading-[14.76px] pt-[86px] w-fit mx-auto md:mx-0 ">
          <button className=" mr-[16px] w-[64px] h-[24px] leading-[19.68px] bg-main text-white text-[16px] rounded-[114px] ">
            now
          </button>
          <p className="">
            Introducing open source disease api
            <span>
              <a> - Learn more</a>
            </span>
          </p>
        </div>
        <div className="flex flex-col-reverse  md:flex-row md:justify-between">
          <div className=" w-fit mx-auto mt-[60px] md:mt-[161px] md:mx-0">
            <h1 className=" text-[38px] leading-[47px] md:text-[57px] md:leading-[73.8px] w-[344px] md:w-[462px] md:h-[148px] ">
              Take your farm to the next level
            </h1>
            <h3 className=" text-[18px] leading-[22px] my-5 font-normal max-w-[338px]  md:my-[30px]  ">
              Empower your farmers to reduce crop loss with Artificial
              Intelligence
            </h3>
            <button className=" w-[90%] mb-[35px] md:mb-0  md:w-[160px] h-[50px] bg-main text-white text-[16px] leading-[19.68px] rounded-[4px] ">
              Get Started
            </button>
            <div className=" hidden mt-[153px] md:block">
              <p className="text-[12px] leading-[15px] mb-[12px] ">
                Trusted by
              </p>
              <span className="flex space-x-[20px] ">
                <p>Great</p>
                <p>Great</p>
                <p>Great</p>
              </span>
            </div>
          </div>
          <div className="mt-[63.75px] md:mt-0 w-fit mx-auto  md:mx-0 md:max-w-[547px] relative  ">
            {/* min-w-[344px] */}
            <div className="rounded-[8px] border border-[#5E4A4A] absolute  w-full h-[526px]  md:w-full md:h-[681px]  "></div>
            <img
              src={Home}
              className=" grayscale rounded-[8px] ml-[10px] md:ml-[16px] -mt-[6px] md:-mt-[10px] w-auto h-[526px] md:w-auto md:h-[681px]  "
            />
          </div>
        </div>
      </div>
      <p className=" mt-[230px] mb-[10px] font-semibold text-[32px] leading-[39px] md:text-[48px] md:leading[59px] text-center w-fit mx-auto">
        Life with Cocoadec
      </p>
      <h3 className=" font-normal text-center text-[18px] leading-[22px] md:text-[14px] md:leading[17px] md:max-w-[452px] max-w-[324px] mx-auto ">
        Cocodec doesn’t only help you to reduce crop failure, we are here to
        help you suceed as a famer
      </h3>
      <div className=" flex flex-col w-fit mx-auto lg:flex-row mt-[80px] mb-[140px] md:mb-[230px] space-y-[40px] lg:space-y-0 lg:space-x-[40px]">
        <div className=" w-[350px] h-[350px] md:w-[300px] md:h-[300px] bg-[#F4F3EE] rounded-lg "></div>
        <div className=" w-[350px] h-[350px] md:w-[300px] md:h-[300px] bg-[#F4F3EE] rounded-lg "></div>
        <div className=" w-[350px] h-[350px] md:w-[300px] md:h-[300px] bg-[#F4F3EE] rounded-lg "></div>
      </div>
      <div className=" mx-auto max-w-[90%] w-fit md:ml-[88px] font-semibold md:max-w-[610px]  ">
        <h3 className=" font-normal text-[18px] leading-[22px] ">
          FOR DEVELOPERS
        </h3>
        <p className=" text-[24px] leading-[29px] md:text-[38px] md:leading-[46.74px] mb-[57px] mt-3 ">
          A Tool that drives productivity in Small & Large Scale farming
        </p>
        <div className=" child:max-w-[576px] space-y-[50px] child:space-y-[10px] child-hover:border-l-[3px] child-hover:border-main child-hover:pl-3">
          <div className=" group ">
            <h1 className=" text-[23px] leading-[28px] group-hover:text-main ">
              Disease Identification API
            </h1>
            <p className=" font-normal text-[18px] leading-[22px] ">
              Detect diseases in crops with our state of the art algorithms in
              seconds not minutes
            </p>
          </div>

          <div className=" group ">
            <h1 className=" text-[23px] leading-[28px] group-hover:text-main ">
              Mobile SDK
            </h1>
            <p className=" font-normal text-[18px] leading-[22px]  ">
              Power your mobile applications with our disease identification
              SDK. Available in Kotlin & Swift
            </p>
          </div>
          <div className=" group ">
            <h1 className=" text-[23px] leading-[28px] group-hover:text-main ">
              ML Model
            </h1>
            <p className=" font-normal text-[18px] leading-[22px] ">
              Machine Learning models with room for improvments. You can Fork
              our models and improve them everything is open sourced.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-fit mx-auto space-y-[10px] ">
        <h1 className=" mt-[230px] max-w-[388px] md:max-w-[656px]  font-semibold text-[32px] md:text-[46px] leading-[39px] md:leading-[59px] text-center ">
          Built with Machine Learning Algorithms & Tools
        </h1>
        <p className=" font-normal max-w-[388px] md:max-w-[452px]  text-[18px] leading-[22px] text-center mx-auto ">
          Cocodec doesn’t only help you to reduce crop failure, we are here to
          help you suceed as a famer
        </p>
      </div>
    </>
  );
};

export default Homepage;
