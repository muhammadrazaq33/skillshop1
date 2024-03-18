import React from "react";
import { NavLink } from "react-router-dom";

const OrganizeSections = () => {
  return (
    <div>
      {/* FIRst SECTion  */}
      <div className="bg-[#F9F9FA] shadow-inner-large mt-[3rem] sm:mt-[4rem] ">
        <div className="pt-6 sm:pb-36 pb-20 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
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
                          Prioritize your emails
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="text-[22px] activitysection__itemname hover:underline">
                          Highlight important emails
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="text-[22px] activitysection__itemname hover:underline">
                          Star important messages
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="text-[22px] activitysection__itemname hover:underline">
                          Search your inbox
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
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-3 px-16 border-[2.5px] m-auto">
                <img
                  src="./assets/gmail.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Gmail
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
          <div className="flex flex-wrap justify-center gap-6">
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/o_start.png" alt="" />
              <p className="text-center">
                Identify how digital skills can benefit teaching and learning
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* SEcOnD SecTion  */}
      <div className="py-16">
        <div className="max-w-[960px] w-[92vw] m-auto grid md:grid-cols-2 grid-cols-1 gap-8 gap-y-4">
          {/* TeXT */}
          <div className="flex flex-col gap-4">
            <p>
              With Gmail, you can stay organized by categorizing emails in a
              variety of ways. For example, you could group emails by person or
              topic so you can quickly find tomorrow’s agenda for the meeting
              you are leading.
            </p>
            <p>
              You can also organize your inbox to find important emails more
              quickly. Create filters, customize your inbox type, apply stars to
              similar types of conversations, and apply multiple labels for a
              single message.
            </p>
            <p>
              Review the skills below and make your inbox a little easier to
              manage.
            </p>
          </div>

          {/* IMAge Div */}
          <div>
            <img src="./assets/gmail1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizeSections;
