import React from "react";

const GoogleClassFooter = () => {
  return (
    <div>
      {/* seCond LAST FOoTeR */}
      <div className="mt-[0rem]">
        <img src="./assets/clip.png" alt="" />
      </div>
      {/* footer section =======> */}
      <div className="bg-[#F9F9FA] pt-[2.2rem] pb-[4rem]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text-[30px] text-[#ea8600]">Knowledge check</h1>

          {/* TABLE  ========> */}
          <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
            <h1 className="text-[20px]">
              Which page do you need to go to in Google Classroom to enroll or
              add students?
            </h1>

            {/* CHECKS  ========>*/}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5 rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  className="form-checkbox border-2 flex-shrink-0   h-5 w-5"
                  name=""
                  id=""
                />
                <p className="text-[16px] font-medium">Stream</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">People</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">Classwork</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">Grades</p>
              </article>
            </div>

            {/* bUTtONS */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white py-2 table-container1 border border-black font-medium">
                Submit
              </button>
              <button className="bg-white py-2 table-container1 border border-black font-medium">
                Show Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END OF SECOND LasT fOoter */}

      {/*  FOoTeR */}
      <div className="bg-[url('./assets/c7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
    </div>
  );
};

export default GoogleClassFooter;
