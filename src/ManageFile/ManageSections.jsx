import React from "react";
import { NavLink } from "react-router-dom";

const ManageSections = () => {
  return (
    <div className="bg-[#F9F9FA] shadow-inner-large ">
      <div className="pt-6 pb-36 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        {/* sections ===> */}
        <div className="md:flex items-start justify-between gap-8">
          {/* left side */}
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-[25px]">Sections</h1>
            {/* links ===========> */}
            <div className="pl-4">
              <ul className="activitysection__list courselist">
                <li className="activitysection__item courselist__item">
                  <NavLink className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="text-[22px] activitysection__itemname hover:underline ">
                        Use Google Drive to create a document
                      </h3>
                    </div>
                  </NavLink>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <NavLink className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="text-[22px] activitysection__itemname hover:underline">
                        Shares files and folders
                      </h3>
                    </div>
                  </NavLink>
                </li>
                <li className="activitysection__item courselist__item">
                  <NavLink className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="text-[22px] activitysection__itemname hover:underline">
                        Convert your files
                      </h3>
                    </div>
                  </NavLink>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <NavLink className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="text-[22px] activitysection__itemname hover:underline">
                        Collaborating on Drive
                      </h3>
                    </div>
                  </NavLink>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* end of left side */}

          {/* right side */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[25px] font-normal">Tools you'll use</h1>
            <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-3 px-8 border-[2.5px] m-auto ">
              <img
                src="./assets/google_drive.png"
                className="w-[3.2rem] h-[3.2rem]"
                alt=""
              />
              <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                Google Drive
              </h1>
            </div>
          </div>
          {/*end of right side */}
        </div>

        {/* cards ========> */}
        <h1 className="text-[25px]">
          By the end of the lesson, you’ll be able to:
        </h1>

        {/* cards ======> */}
        <div className="">
          <div className="grid grid-cols-2 gap-3">
            <article className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 col-span-1">
              <img src="./assets/Star.png" alt="" />
              <p className="text-center">
                Demonstrate how to update documents in Google Drive
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col items-center m-auto py-4 rounded-lg gap-y-5 px-4 col-span-1">
              <img src="./assets/doublestar.png" alt="" />
              <p className="text-center">
                Use Google Drive to create documents
              </p>
            </article>
            <article className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 md:col-span-1">
              <img src="./assets/threestar.png" alt="" />
              <p className="text-center">
                Identify ways to share files in Google Drive
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSections;
