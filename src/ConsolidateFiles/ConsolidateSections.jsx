import React from "react";
import { NavLink } from "react-router-dom";

const ConsolidateSections = () => {
  return (
    <div className="bg-[#F9F9FA] shadow-inner-large mt-[4rem] ">
      <div className="pt-6 pb-36 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        {/* sections ===> */}
        <div className="md:flex items-start justify-between gap-8">
          {/* left side */}
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text">Sections</h1>
            {/* links ===========> */}
            <div className="pl-4">
              <ul className="activitysection__list courselist">
                <li className="activitysection__item courselist__item">
                  <a href="#startDrive" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Get started Google Drive
                      </h3>
                    </div>
                  </a>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#UploadMaterial" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Upload your materials
                      </h3>
                    </div>
                  </a>
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#OrganizeItems" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Organize your items in Drive
                      </h3>
                    </div>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* end of left side */}

          {/* right side */}
          <div className="flex flex-col gap-4">
            <h1 className="text">Tools you'll use</h1>
            <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-3 px-12 border-[2.5px]  max-w-[29rem]">
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
        <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

        {/* cards ======> */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-6">
          <article className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 max-w-[20rem]">
            <img src="./assets/Star.png" alt="" />
            <p className="text-center">
              Recognize ways to organize Google Drive
            </p>
          </article>
          <article className="bg-[#E6E7E9] max-w-[20rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4">
            <img src="./assets/doublestar.png" alt="" />
            <p className="text-center">
              Organize and upload documents into Google Drive
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ConsolidateSections;
