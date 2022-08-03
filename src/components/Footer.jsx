import React from "react";
import LogoWhite from "../assets/Logo-white.svg";
const Footer = () => {
  return (
    <footer className="text-white w-full bg-main p-[90px]  ">
      <div className="  flex flex-col md:flex-row md:justify-between ">
        <div className=" ">
          <div className="flex items-center mb-4">
            {" "}
            <img
              className="w-[57px] h-[50px]"
              src={LogoWhite}
              alt="Cocoadec Logo"
            />
            <p className=" font-semibold text-[32px] leading-[39px] ">
              Cocoadec
            </p>
          </div>
          <p className="mb-[45px] text-center md:text-left mx-auto md:mx-0 text-lg leading-[22px] font-normal max-w-[338px] ">
            Empower your farmers to reduce crop loss with Artificial
            Intelligence
          </p>
          <ul className=" flex font-medium text-[20px] leading-[24.6px] space-x-[24px] text-center mx-auto md:mx-0 w-fit ">
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
            <li>
              <a>Github</a>
            </li>
          </ul>
        </div>
        <div className=" mt-[126px] md:mt-0 grid md:grid-cols-3 gap-[100px] mr-[134px] md:place-items-center ">
          <div>
            <h2 className="font-semibold text-[24px] leading-[29px]">
              Company
            </h2>
            <ul className="font-medium text-[18px] leading-[22px] space-y-[12px]">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] leading-[29px]">
              Company
            </h2>
            <ul className="font-medium text-[18px] leading-[22px] space-y-[12px]">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] leading-[29px]">
              Company
            </h2>
            <ul className="font-medium text-[18px] leading-[22px] space-y-[12px]">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div className=" md:col-start-2  " >
            <h2 className="font-semibold  text-[24px] leading-[29px]">
              Company
            </h2>
            <ul className="font-medium text-[18px] leading-[22px] space-y-[12px]">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" mt-[120px] md:mt-0  md:mb-[126px] w-fit">
        <h2 className=" space-y-[12px] font-semibold text-[20px] leading-[24.6px] ">
          Contact
        </h2>
        <a className=" font-medium text-[18px] leading-[22px] ">
          hello@cocoadec.app
        </a>
      </div>
      <p className=" mt-[20px] md:mt-0 w-fit font-medium text-[20px] leading-[24.6px] ">
        All rights reserved. © 2022 Cocoadec
      </p>
    </footer>
  );
};

export default Footer;
