import React from "react";
import { NavLink } from "react-router-dom";

const ClassSection = () => {
  return (
    <div>
      {/* fiRSt sECtION */}
      <div className="bg-[#F9F9FA] shadow-inner-large mt-[3rem] sm:mt-[4rem] ">
        <div className="pt-6 sm:pb-36 pb-20 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* sections ===> */}
          <div className="md:flex items-start justify-between gap-8">
            {/* left side */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text-[25px] text">Sections</h1>
              {/* links ===========> */}
              <div className="pl-4">
                <ul className="activitysection__list courselist">
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname ">
                          Create an assignment in Classroom
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Customize assignments and resources
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Reuse assignments and resources
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Add links, videos, and files tO assignments in
                          Classroom
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          View assignments
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Share folders and documents from Drive
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Best practices for collecting work in CLassroom
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Best practices for collecting work in Drive
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* end of left side */}

            {/* right side */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-[25px] text">Tools you'll use</h1>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/c2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">
                  Google Classroom
                </h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/google_drive.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Drive</h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="flex flex-wrap  justify-center gap-6">
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/c3.png" alt="" />
              <p className="text-center">Assign work to students</p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/gc2.png" alt="" />
              <p className="text-center">
                Share folders and documents from Drive
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/gc3.png" alt="" />
              <p className="text-center">Collect student work</p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}
    </div>
  );
};

export default ClassSection;
