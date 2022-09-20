import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "yup-phone";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { supabase } from "../../supabase";
import Loader from "./ui/Loader";

const Signup = () => {
  const navigate = useNavigate();

  const signupSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    farmName: Yup.string().required("Farm name is required"),
    emailAddress: Yup.string().email().required("Email address is required"),
    phoneNumber: Yup.string()

      .required("Please Input your phone number")
      .phone("PhoneNumber should be valid"),
    password: Yup.string()
      .min(6, "Password length should be greater than 5")
      .required("Password is required"),
    agreePolicy: Yup.boolean().isTrue(),
  });
  const [value, setValue] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      farmName: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      agreePolicy: false,
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      setLoading(true);
      supabase.auth
        .signUp({
          email: values.emailAddress,
          password: values.password,
        })
        .then(async (res) => {
          if (res.error) {
            setError(res.error.message);
            setLoading(false);
            return;
          }
          // const {data,error} =   await supabase.from("users").select().match({ id: res.user.id });
          const { data, error } = await supabase
            .from("users")
            .update({
              fullname: values.fullName,
              farmname: values.farmName,
              phonenumber: values.phoneNumber,
            })
            .match({ id: res.user.id });
          if (error) {
            setError(error.message);
            setLoading(false);
            return;
          }
          setLoading(false);
          console.log(res);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
    },
  });

  const signUpForm = (
    <form onSubmit={formik.handleSubmit} className="space-y-[40px]">
      <div className=" flex flex-col ">
        <label
          className="text-[16px] leading-[24px] font-medium "
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          className={` border-[#CFCECE] border-[1px] rounded-lg h-[50px] appearance-none pl-[20px]  ${
            formik.errors.fullName && "border-invalid outline-invalid "
          } `}
          id="fullName"
          name="fullName"
          type="text"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        <h1 className="text-[14px] leading-[17px] font-medium text-invalid ml-[20px] mt-[10px] ">
          {formik.errors.fullName}
        </h1>
      </div>
      <div className=" flex flex-col ">
        <label
          className="text-[16px] leading-[24px] font-medium "
          htmlFor="farmName"
        >
          Farm Name
        </label>
        <input
          className={` border-[#CFCECE] border-[1px] rounded-lg h-[50px] appearance-none pl-[20px] ${
            formik.errors.farmName && "border-invalid  outline-invalid"
          } `}
          id="farmName"
          name="farmName"
          type="text"
          value={formik.values.farmName}
          onChange={formik.handleChange}
        />
        <h1 className="text-[14px] leading-[17px] font-medium text-invalid ml-[20px] mt-[10px] ">
          {formik.touched && formik.errors.farmName}
        </h1>
      </div>
      <div className=" flex flex-col ">
        <label
          className="text-[16px] leading-[24px] font-medium "
          htmlFor="emailAddress"
        >
          Email Address
        </label>
        <input
          className={` border-[#CFCECE] border-[1px] rounded-lg h-[50px] appearance-none pl-[20px]  ${
            formik.errors.emailAddress && "border-invalid  outline-invalid"
          } `}
          id="emailAddress"
          name="emailAddress"
          type="text"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
        />
        <h1 className="text-[14px] leading-[17px] font-medium text-invalid ml-[20px] mt-[10px] ">
          {formik.touched && formik.errors.emailAddress}
        </h1>
      </div>
      <div className=" flex flex-col ">
        <label
          className="text-[16px] leading-[24px] font-medium "
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={` border-[#CFCECE] border-[1px] rounded-lg h-[50px] appearance-none pl-[20px]  ${
            formik.errors.password && "border-invalid  outline-invalid"
          } `}
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <h1 className="text-[14px] leading-[17px] font-medium text-invalid ml-[20px] mt-[10px] ">
          {formik.touched && formik.errors.password}
        </h1>
      </div>
      <div className="  ">
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
        <h1 className="text-[14px] leading-[17px] font-medium text-invalid ml-[20px] mt-[10px] ">
          {formik.touched && formik.errors.phoneNumber}
        </h1>
      </div>
      <div className="flex flex-row items-center space-x-[14px]">
        <input
          className=" accent-main h-[50px] "
          type="checkbox"
          value="agreePolicy"
          id="agreePolicy"
          checked={formik.values.agreePolicy}
          onChange={formik.handleChange}
          // checked
        />

        <label className=" text-gray-800" htmlFor="agreePolicy">
          I have read, understood and i agree to Cocoadec’ Privacy Policy and
          Terms and Conditions{" "}
        </label>
      </div>

      <button
        className={`w-full  h-[50px] rounded-lg text-[16px] leading-[19px] text-white disabled:text-main font-semibold disabled:bg-[#CFCECE] text-center bg-main focus:ring focus:ring-lime-500  disabled:cursor-not-allowed `}
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Submit
      </button>
    </form>
  );

  return (
    <>
      <div className=" mx-[25px]   h-[80px] flex items-center justify-between font-clash text-main font-semibold text-[20px]  leading-[24.6px]   ">
        <div className="child-hover:cursor-pointer flex items-center ">
          <div
            className="mr-[96px] flex  items-center"
            onClick={() => navigate("/")}
          >
            <img className="w-[44.06px] h-[38.73px] " src={Logo} />
            <a
              role="link"
              href="/"
              aria-label="Cocoadec back to homepage"
              className="  text-[24.5px] leading-[30px] focus: outline-1 focus: outline-black "
            >
              Cocoadec{" "}
            </a>
          </div>
        </div>
        <div className=" hidden  md:flex items-center  text-[20px]">
          <a
            href="/login"
            role="link"
            aria-label="Link to Sign in page"
            className="hover:cursor-pointer mr-[40px] focus: outline-1 focus: outline-black "
          >
            Sign in
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mx-5 text-red-600 ">
        {" "}
        {error}
      </div>

      <div className=" flex max-w-[85%] md:max-w-[360px] justify-center mx-auto mb-[100px]   ">
        {loading ? <Loader /> : signUpForm}
      </div>
    </>
  );
};

export default Signup;
