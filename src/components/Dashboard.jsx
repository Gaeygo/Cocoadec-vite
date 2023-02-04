import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Dropzone from "react-dropzone";

const Dashboard = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [result, setResult] = useState(null);

  const handleImage = (file) => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result;
      setImageUrl(binaryStr);
      setImageName(file.name);
      console.log(binaryStr);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();
    formData.append("image", imageUrl);
    formData.append("filename", `${imageName}`);
    console.log(formData)
    // await axios
    // .post("https://web-production-89dd.up.railway.app/", formData)
    // .then((res) => {
    //   // setShow(true);
    //   setResult(res.data.Label);
    //   console.log(res);
    // });
}
  
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
            Welcome
          </a>
        </div>
      </div>
      <div className=" w-fit mx-auto mt-[100px] h-[400px] ">
        <div className="  flex flex-col gap-[14px]  ">
          <h1 className="text-[32px] leading-[40px] font-medium tracking-tight ">
            Detection
          </h1>
          <p className=" max-w-[360px] font-normal text-[16px] leading-[20px] tracking-tight ">
            Upload a picture of your cocoa pod or plant to detect the presence
            of an infection
          </p>
          <Dropzone onDrop={(acceptedFile) => handleImage(acceptedFile[0])}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <form
                  onSubmit={handleSubmit}
                  className=" flex flex-col mt-[40px]"
                >
                  <input
                    {...getInputProps()}
                    id="img"
                    title=""
                    type="file"
                    className="hidden  file:opacity-0  "
                  />
                  <label
                    htmlFor="img"
                    className="w-[360px] h-[133px] border-[1px] border-main rounded-[8px] mb-[18px] "
                  ></label>

                  <button
                    type="submit"
                    className="w-[360px] h-[50px] font-semibold text-[16px] leading-[20px] border-[1px] rounded-[8px] border-main text-main "
                  >
                    Upload
                  </button>
                </form>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
