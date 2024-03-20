import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ShareWorkSection = () => {
  const [show, setShow] = useState(false);
  const [activeModel, setActiveModel] = useState(null);

  const toggleModel = (model) => {
    setActiveModel(model === activeModel ? null : model);
  };

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

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
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline ">
                          Creating a site in Google Sites
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Name your site
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Create pages within a site
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Add text, images and resources
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Preview and publish
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Invite others to edit your site
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
              <h1 className="text-[25px] text">Tools you'll use</h1>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-3 px-16 border-[2.5px] m-auto">
                <img
                  src="./assets/work2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] max-w-[12rem] leading-[1.6rem]">
                  Google Sites
                </h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="md:flex flex-wrap justify-center gap-6">
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/work3.png" alt="" />
              <p className="text-center">
                Identify the value of having a class website
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/work4.png" alt="" />
              <p className="text-center">
                Create a customized website for the classroom using Google Sites
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SEcOnD SecTion  */}
      {/* Creating a site in Google Sites */}
      <div className="sm:pt-16 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Creating a site in Google Sites
            </h1>
            <p>
              Google Sites are easy to create and personalize so students and
              teachers can be creative while building a website. For example,
              during your next design thinking activity, students can develop a
              site to promote the new product they’ve created. Students can
              publish details of their project, and share their creations with
              friends and family outside of class.
            </p>
          </div>
          <div className="md:flex justify-between gap-8">
            {/* TeXT */}
            <div className="flex flex-col gap-4">
              <p>
                Communicating to a wider audience keeps them informed about
                classroom successes and emphasizes the authenticity and
                importance of your students’ work.
              </p>
              <p>
                You’re likely already sharing your students’ work with the
                community when teachers meet with guardians or display student
                artwork on the walls.
              </p>
              <p>
                Read on and learn how to create and customize a site of your
                own.
              </p>
            </div>

            {/* IMAge Div */}
            <div>
              <img src="./assets/work5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ENd of secoND  scEtIOn */}

      {/* ImAgE sEcTIOn */}
      <div>
        <img src="./assets/work6.png" alt="" />
      </div>

      {/* Try iT OUT  */}
      {/* ThirD seCTIoN */}
      <div className="bg-[#FFFFFF] sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Create and customize your site.</p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="text-[15px] font-bold mb-4">
              Click play to watch the video below.
            </p>
            {/* video */}
            {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

            <iframe
              //   width="800"
              //   height="600"
              src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="max-w-[905px] w-[92vw] m-auto md:h-[509px] min-h-[400px] "
            ></iframe>

            {/* button  */}
            <button
              onClick={toggle}
              className="w-full bg-[#1A73E8] py-2.5 text-white"
            >
              Transcript
            </button>
          </div>

          {/* transcript  ==> */}
          <div className={`flex flex-col gap-6 ${show ? "block" : "hidden"}`}>
            <p>
              In this video we’ll create a new Google site, give it a name and a
              page title, and format the page title to look the way that we
              would like it to look.{" "}
            </p>
            <div className="flex flex-col gap-5">
              <p>To start, create a new Google Site from Google Drive.</p>
              <ol className="list-decimal pl-12">
                <li>
                  Click <strong>New</strong> and then <strong>More</strong>, and
                  choose <strong>Google Sites</strong>.
                </li>
                <li>Your new Google site is automatically created.</li>
                <li>
                  To give it a file name, select <strong>Untitled Site</strong>{" "}
                  and type the name of your site.
                </li>
                <li>
                  This site and any edits will save automatically in Drive
                </li>
                <li>
                  To change the page title, click into the{" "}
                  <strong>Page title</strong> and rename it.
                </li>
                <li>
                  Once you’ve done that, you can format the text by highlighting
                  everything in the cell and using the tools on the Toolbar.
                </li>
                <li>
                  You can change the font by selecting the{" "}
                  <strong>Existing font name</strong>
                  and scrolling to see more font options.
                </li>
                <li>
                  You can change the size of the text by selecting the existing
                  <strong>Text size</strong> and using the drop down.
                </li>
                <li>
                  You can also play around with the bold, italics and underline
                  options.
                </li>
                <li>
                  To resize the text box, click and drag the{" "}
                  <strong>Border markers</strong>.
                </li>
                <li>
                  Or move the text box by moving your mouse to the edge of the
                  text box until you see the crosshairs.{" "}
                </li>
                <li>
                  You can then click and drag it to where you would like the
                  title to appear.
                </li>
              </ol>
            </div>

            <p>
              And that’s all you need to do to create and format a new Google
              Site.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/* END of ThirD seCTIoN */}

      {/* FoURTh SECtIOn */}
      {/*  */}
      <div className="sm:pb-16 pb-12 shadow-inner-large bg-[#F9F9FA] sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-5 gap-2">
          <h1 className="text1 leading-[2.4rem]">Name your site</h1>
          <p>Next, update the site document name, site name, and page title.</p>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[16px] font-bold mb-3">
              Click each button to learn more.
            </p>

            <div className="relative flex justify-center">
              <button
                onClick={() => toggleModel("model1")}
                className="bg-[#dadce099] absolute top-[10.6%] left-[41%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => toggleModel("model2")}
                className="bg-[#dadce099] text-[20px] sm:p-8 hover:bg-[#1A73E8] hover:text-[white] absolute top-[40.5%] left-[68%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <button
                onClick={() => toggleModel("model3")}
                className="bg-[#dadce099] text-[20px] sm:p-8 hover:bg-[#1A73E8] hover:text-[white] absolute top-[40.5%] left-[68%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                3
              </button>
              <img src="./assets/work7.png" alt="" />
              {/* mOdelS */}
              {/* FIrSt MOdeL */}
              <div
                className={` ${
                  activeModel === "model1" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <h1 className="text-[25px] text-center">
                    Customize notifications
                  </h1>
                  <p className="text-left">
                    1. Click the three dots in the top right of your chat.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of fiRST mODEl */}
              {/* SecoND MOdeL */}
              <div
                className={` ${
                  activeModel === "model2" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <h1 className="text-[25px] text-center">
                    Mute conversations
                  </h1>
                  <p className="text-left">
                    2. To turn notifications off, click the muted bell.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of SECOND mODEl */}
              {/*eND OF mOdelS */}
            </div>
          </div>
        </div>
      </div>
      {/*ENd of FoURTh SECtIOn */}
    </div>
  );
};

export default ShareWorkSection;
