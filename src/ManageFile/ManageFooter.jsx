import React from "react";

const ManageFooter = () => {
  return (
    <div>
      <div className="mt-[2rem]">
        <img src="./assets/clip.png" alt="" />
      </div>
      {/* fourth section footer section =======> */}
      <div className="bg-[#F9F9FA] pt-[2.2rem] pb-[4rem]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text-[30px] text-[#ea8600]">Knowledge check</h1>

          {/* TABLE  ========> */}
          <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
            <h1 className="text-[20px]">
              Select the one way you can change Google settings.
            </h1>

            {/* CHECKS  ========>*/}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5 rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  className="form-checkbox border-2 border-red-400  h-5 w-5 flex-shrink-0 rounded-[50%]"
                  name=""
                  id=""
                />
                <p className="text-[16px]">
                  You can change Google Drive settings as long as you are using
                  the device you created original file on.
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input type="checkbox" name="" className=" h-5 w-5" id="" />
                <p className="text-[16px]">
                  You can change Google Drive settings across all devices.
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className=" flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px]">
                  You can only change Google Drive settings from your computer
                  and not with a mobile device.
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input type="checkbox" name="" className=" h-5 w-5" id="" />
                <p className="text-[16px]">
                  Google settings are fixed based on which app you're using
                </p>
              </article>
            </div>

            {/* bUTtONS */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white py-2 table-container1 border border-black">
                Submit
              </button>
              <button className="bg-white py-2 table-container1 border border-black">
                Show Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFooter;
