import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Login = () => {
  const signupSchema = Yup.object().shape({
    // fullName: Yup.string().required("Fullname is required"),
    // farmName: Yup.string().required("Fullname is required"),
    // emailAddress: Yup.string().email(),
    phoneNumber: Yup.string().phone().required(),
  });
  const [value, setValue] = useState();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      farmName: "",
      emailAddress: "",
      phoneNumber: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className=" mx-[25px]   h-[80px] flex items-center justify-between font-clash text-main font-semibold text-[20px]  leading-[24.6px]   ">
        <div className="child-hover:cursor-pointer flex items-center ">
          <div className="mr-[96px] flex  items-center">
            <img className="w-[44.06px] h-[38.73px] " src={Logo} />
            <a
              role="link"
              href="#"
              aria-label="Cocoadec back to homepage"
              className="  text-[24.5px] leading-[30px] focus: outline-1 focus: outline-black "
            >
              Cocoadec{" "}
            </a>
          </div>
        </div>
        <div className=" hidden  md:flex items-center  text-[20px]">
          <a
            href="#"
            role="link"
            aria-label="Link to Sign in page"
            className="hover:cursor-pointer mr-[40px] focus: outline-1 focus: outline-black "
          >
            Sign in
          </a>
        </div>
      </div>
      <div className=" flex w-[360px] justify-center mx-auto  ">
        <form onSubmit={formik.handleSubmit} className="space-y-[40px]">
          <div className=" flex flex-col ">
            <label
              className="text-[16px] leading-[24px] font-medium "
              htmlFor="fullName"
            >
              FullName
            </label>
            <input
              className=" border-[#CFCECE] border-[1px] rounded-lg h-[50px] "
              id="fullName"
              name="fullName"
              type="text"
              defaultValue={formik.initialValues.fullName}
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </div>
          <div className=" flex flex-col ">
            <label
              className="text-[16px] leading-[24px] font-medium "
              htmlFor="farmName"
            >
              FarmName
            </label>
            <input
              className=" border-[#CFCECE] border-[1px] rounded-lg h-[50px] "
              id="farmName"
              name="farmName"
              type="text"
              defaultValue={formik.initialValues.farmName}
              value={formik.values.farmNameName}
              onChange={formik.handleChange}
            />
          </div>
          <div className=" flex flex-col ">
            <label
              className="text-[16px] leading-[24px] font-medium "
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              className=" border-[#CFCECE] border-[1px] rounded-lg h-[50px] "
              id="emailAddress"
              name="emailAddress"
              type="text"
              defaultValue={formik.initialValues.emailAddress}
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
            />
          </div>

          <div className=" w-[300px] ">
            <label
              className="text-[16px] leading-[24px] font-medium "
              htmlFor="phoneNumber"
            >
              PhoneNumber
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              value={formik.values.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              onChange={(value) => formik.setFieldValue("phoneNumber", value)}
              defaultCountry="NG"
              
            />
            <h1>{formik.errors.phoneNumber}</h1>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
