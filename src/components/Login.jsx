import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Form, Field, useFormik } from "formik";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "yup-phone";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { supabase } from "../../supabase";
import auth from "../auth/auth";
import Loader from "./ui/Loader";

const Login = () => {
  const navigate = useNavigate();

  const { user } = auth;
  const [currentUser, setCurrentUser] = useAtom(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signupSchema = Yup.object().shape({
    emailAddress: Yup.string().email().required("Email address is required"),

    password: Yup.string()
      .min(6, "Password length should be greater than 5")
      .required("Password is required"),
  });
  const [value, setValue] = useState();
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setLoading(true);
      supabase.auth
        .signIn({
          email: values.emailAddress,
          password: values.password,
        })
        .then( async (res) => {
          console.log(res);
          if (res.error) {
            setError(res.error.message);
            setLoading(false);
          }
        //  const {data, error}  = await supabase.from("users").select()
        

          setCurrentUser(res.session.user);
          // setLoading(false)
          navigate("/dashboard");
        });

      console.log(values);
    },
  });

  const loginForm = (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-[40px] md:w-[360px]"
    >
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
            href="/signup"
            role="link"
            aria-label="Link to Sign in page"
            className="hover:cursor-pointer mr-[40px] focus: outline-1 focus: outline-black "
          >
            Create account
          </a>
        </div>
      </div>
      <div className=" flex max-w-[85%] md:max-w-[360px] justify-center mx-auto mt-[100px]   ">
        {loading ? (
          <div className=" my-32 ">
            <Loader />
          </div>
        ) : (
          loginForm
        )}
      </div>
      <div className="flex items-center justify-center mt-9 text-red-600 "> {error}</div>
    </>
  );
};

export default Login;
