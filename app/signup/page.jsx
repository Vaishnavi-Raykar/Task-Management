import React from "react";

const page = () => {
  return (
    <div>
      <div className="signup-form h-screen w-full flex flex-col justify-center items-center gap-y-7 ">
        <div className="form-group flex flex-col justify-center items-center gap-y-7 bg-purple-700 p-10">
            {/* <h1 className=" font-bold text-2xl">Sign Up</h1> */}
          <input className="p-3 border w-80% border-gray-500" type="text" placeholder="Enter Name" id="" />
          <input className="p-3 border border-gray-500" type="email" name="Enter Email" id="" placeholder="Enter Email" />
          <input className="p-3 border border-gray-500" type="password" name="Enter Password" id="" placeholder="Enter Password" />
          <button className="p-3 font-semibold bg-green-600 text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default page;
