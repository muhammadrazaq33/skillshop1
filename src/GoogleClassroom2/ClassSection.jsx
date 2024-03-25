import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ClassSection = () => {
  const [show, setShow] = useState(false);

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
          <div className="flex justify-center">
            <div className="flex flex-wrap  justify-center gap-6">
              <article className="bg-[#E6E7E9] flex flex-col max-w-[18rem] w-full items-center py-4 rounded-lg gap-y-5 px-4  ">
                <img src="./assets/c3.png" alt="" />
                <p className="text-center">Assign work to students</p>
              </article>
              <article className="bg-[#E6E7E9] flex flex-col max-w-[18rem] w-full items-center py-4 rounded-lg gap-y-5 px-4">
                <img src="./assets/gc2.png" alt="" />
                <p className="text-center">
                  Share folders and documents from Drive
                </p>
              </article>
              <article className="bg-[#E6E7E9] flex flex-col max-w-[18rem] w-full items-center py-4 rounded-lg gap-y-5 px-4">
                <img src="./assets/gc3.png" alt="" />
                <p className="text-center">Collect student work</p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SECOND SeCtiON */}
      {/* Create an assignment in Classroom */}
      <div className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Create an assignment in Classroom
            </h1>
            <p>
              In this lesson, you’ll learn how to create an assignment, set due
              dates, and add resources for your students using the Classwork
              page in Google Classroom. You can also use the Classwork page to
              store student work and organize classroom materials into
              customized educational themes based on specific topics. Creating
              digital resources for your students can help them stay organized,
              know when to submit assignments, and access important documents
              all in one place.
            </p>
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
          <div className={`flex flex-col gap-5 ${show ? "block" : "hidden"}`}>
            <p>
              In this video we are going to create an assignment in Google
              Classroom.
            </p>
            <div>
              <ol className="list-decimal pl-12">
                <li>
                  First, navigate to Classrom by clicking on the App menu in the
                  waffle and scrolling to Google Classroom.
                </li>
                <li>Choose a class to start your assignment in.</li>
                <li>
                  Next, click on the <strong>Classwork page</strong>.
                </li>
                <li>
                  To create an assignment, click the <strong>Create</strong>{" "}
                  button and choose
                  <strong>Assignment</strong>.{" "}
                </li>
                <li>
                  You can then add a title and any other instructions you would
                  like to give your students in the box.
                </li>
                <li>
                  With the Assignment menu here, you can choose multiple classes
                  to assign this classwork to by clicking the dropdown.{" "}
                </li>
                <li>
                  If you teach multiple sections of the same course, you only
                  need to create the assignment once.
                </li>
                <li>You can then set a due date and time. </li>
                <li>
                  Students will be able to see all their upcoming assignment
                  deadlines when they look in their classes.
                </li>
                <li>
                  When you're ready, you can click the <strong>Assign</strong>{" "}
                  button.{" "}
                </li>
                <li>
                  You can also click the dropdown next to Assign to{" "}
                  <strong>Save a draft</strong>
                  of this assignment and continue adding detail later.{" "}
                </li>
                <li>
                  Or, you can select <strong>Schedule</strong> to schedule the
                  assignment to be posted at a later date.
                </li>
              </ol>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
          <p>
            Watch the video below to learn more about the{" "}
            <strong>Classwork</strong> page in Google Classroom.
          </p>

          {/* ViDEO DIv */}
          <div className="">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End oF SECOND SeCtiON */}

      {/* ThiRD ScETioN */}
      {/* Customize assignments and resources */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Customize assignments and resources
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article>
              <img src="./assets/gc6.png" alt="" />
            </article>
            <article className="flex flex-col gap-4">
              <p>
                Each classroom includes a unique group of learners who may need
                different resources at different times. With Google Classroom,
                you can customize learning by sending specific resources to
                individual students.{" "}
              </p>
              <p>
                To do this, first build an assignment. Then use the For
                drop-down menu to click an individual or set of students to
                receive the assignment. Take advantage of this feature to
                challenge students who are ready to move ahead with coursework
                or to support students who need to review course material.
              </p>
              <p>
                To promote collaboration, assign work to groups of students so
                learners can work together to complete projects. If you have
                multiple classes you want to share an assignment with, click{" "}
                <strong>All students</strong> in the <strong>For</strong>{" "}
                section when creating an assignment so they have access. You can
                also schedule posts for multiple classes if you want to plan
                ahead.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF ThiRD ScETioN */}

      {/* FourtH sEctiON */}
      {/* Reuse assignments and resources */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Reuse assignments and resources
          </h1>
          <p>
            You may want to share the same assignments or resources across
            multiple classes, but customize them for each specific class.
            Instead of creating the same assignment from scratch, you can reuse
            the assignment and then add additional resources, change the due
            date, or click the specific students that would benefit from the
            assignment.
          </p>
        </div>
      </div>
      {/*end Of fOURth sEctiON */}

      {/* image section */}
      <div className="bg-[url('./assets/gc7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* IMAGE SECTION */}
      {/* <div className="bg-wrapper mx-auto max-w-[1100px]"> */}
      {/* <div className="bg-[url('./assets/gc7.png')] w-full h-[120px] object-cover  bg-center bg-no-repeat"></div> */}
      {/* </div> */}

      {/* FIfTh SeCtiON */}
      {/* Try it out */}
      <div className="bg-[#F9F9FA] shadow-inner-large sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>
              Follow the steps in the video below to reuse an assignment from
              one class in another.
            </p>
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
          <div className={`flex flex-col gap-5 ${show ? "block" : "hidden"}`}>
            <p>
              In this video we will reuse an assignment post from one class in
              another class.
            </p>
            <div>
              <p>
                So let's say we created an assignment in this class, and we want
                to use this assignment in another class.{" "}
              </p>
              <ol className="list-decimal pl-12">
                <li>
                  So first, navigate to the other class by clicking the{" "}
                  <strong>Main menu</strong> button here, and choosing the class
                  where you want to reuse the post.
                </li>
                <li>Then Navigate to the Classwork page.</li>
                <li>
                  Click the <strong>Create</strong> button and choose{" "}
                  <strong>Reuse post</strong>.
                </li>
                <li>
                  Choose the class where the original post is located, and then
                  find the name of the assignment you would like to use in this
                  class.
                </li>
                <li>
                  Next click <strong>Reuse</strong>.
                </li>
                <li>You can now edit anything in this new post.</li>
                <li>
                  When you’re ready click <strong>Assign</strong>.
                </li>
              </ol>
            </div>
            <p>The assignment has now been reused.</p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF fifth SeCtiON */}

      {/* SIXTH ScETioN */}
      {/* View assignments */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">View assignments</h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="flex flex-col gap-4 md:col-span-1">
              <p>
                To view additional details about an assignment, including
                individual student work, click the assignment. Students can see
                all their coursework in the <strong>Stream</strong> page and
                <strong> Classwork</strong> page.
              </p>
              <p>
                From these pages, students can either start working on an
                assignment or submit their completed work.
              </p>
            </article>
            <article className="md:col-span-2">
              <img src="./assets/gc8.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eND OF SixtH ScETioN */}

      {/* 7 sEctiON */}
      {/* Share folders and documents from Drive */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          {/* fIrsT DiV */}
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Share folders and documents from Drive
            </h1>
            <p>
              If you don’t have access to Classroom, you can create assignments,
              shared folders for classroom resources, and individual folders for
              each student so they can keep track of their work in Drive. To
              give students access to a file or folder, you can share the URL,
              or ask students to view the <strong>Shared with Me</strong>{" "}
              section in Drive.
            </p>
            <p>
              Before sharing documents and folders, consider what access
              permission you’d like your students to have. For example, if you
              want your students to work together, give students{" "}
              <strong>Editor</strong> access when sharing the file or folder. If
              you want to share a folder containing reading materials, share so
              students have <strong>Viewer</strong> access and cannot change the
              original documents. Students will be able to view every file
              within that folder, meaning you don’t have to update permissions
              and share individual files with students.
            </p>
          </div>

          {/* SecOND Div */}
          <div className="flex flex-col gap-4">
            <img src="./assets/gc9.png" alt="" />
            <p>
              If you have created a worksheet you want your students to access
              but not work directly in, you can assign them the{" "}
              <strong>Viewer</strong> role and have them make a copy. This way,
              students cannot change the original document, but can instead make
              changes to their own copy.{" "}
            </p>
            <p>
              <strong> Tip:</strong> A quick way of allowing others to create
              copies of a document in Google Docs is to share the URL with
              "copy" at the end instead of “edit.” Make sure you've shared the
              document so that 'Anyone with the link' can view.{" "}
            </p>
          </div>

          {/* thirD DIV */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-3">
            <article>
              <p className="example">For example, use:</p>
              <p className="sm:text-[18px] text-[15px] flex-wrap sm:pl-4 mt-6">
                "https://docs.google.com/document/d/1xTOYv/
                <strong>copy</strong>"
              </p>
            </article>
            <article>
              <p className="Instead">Instead of:</p>
              <p className="sm:text-[18px] text-[15px] flex-wrap sm:pl-8">
                <del className="">
                  "https://docs.google.com/document/d/1xTOYv/
                  <strong>edit</strong>"
                </del>
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end Of 7 sEctiON */}

      {/* image section */}
      <div className="bg-[url('./assets/gc10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 8 sectIOn */}
      {/* Success stories
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Success stories</h1>

          {/* cardS */}
          <div className="grid md:grid-cols-2 grid-cols-1 place-content-center gap-16">
            <article className="flex flex-col gap-5 items-center py-4 px-4 bg-[#F9F9FA]">
              <img src="./assets/gc11.png" alt="" />
              <p className="text-center">
                I teach science, so I prefer to save class time for hands-on
                work. I provide YouTube videos and links for my students to view
                at home in Google Classroom. Then, when they come to class,
                they’ve already reviewed the content so I spend less time
                lecturing. We take a few moments to discuss the material and
                clarify questions, but after that we have more time to spend on
                the fun stuff.
              </p>
            </article>
            <article className="flex flex-col gap-12 items-center py-4 px-4 bg-[#F9F9FA]">
              <img src="./assets/gc12.png" alt="" />
              <p className="text-center">
                I appreciate being able to choose a due date and time for an
                assignment in Classroom. If my class finishes at 11:55am, that’s
                their due date.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*enD Of 8 sectIOn */}

      {/* 9 ScETioN */}
      {/* Collect student assignments in Classroom and Drive */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <div className="flex flex-col gap-5 mb-2">
            <h1 className="text1 leading-[2.4rem]">
              Collect student assignments in Classroom and Drive
            </h1>
          </div>

          <p>
            Once you create and share an assignment in Classroom, your students
            can complete and submit their work. All sharing rights are
            controlled automatically in Classroom so educators don’t have to
            worry about reminding students to submit their assignments. Using
            Classroom also reduces email traffic so your inbox is not flooded
            with notifications. Each assignment contains the work of each
            student, keeping assignments organized and easy to sort through.{" "}
          </p>
          <p>
            Plus, your notification emails from Classroom are now more useful.
            You and your students can tailor notification settings for email,
            and push notifications for mobile devices, so you can quickly scan
            emails to find key information. Teachers will also be able to reply
            to students directly from their notifications in Gmail and mobile
            devices.
          </p>
        </div>
      </div>
      {/*eND OF 9 ScETioN */}

      {/* 10 ScETioN */}
      {/* Best practices for collecting work in Drive */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <div className="flex flex-col gap-5 mb-2">
            <h1 className="text1 leading-[2.4rem]">
              Best practices for collecting work in Drive
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p>
              There are several ways students can submit assignments using
              Drive. Follow the tips below to make this process easier and more
              efficient.
            </p>
            <div className="flex flex-col gap-10">
              <article className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="circular-checkbox flex-shrink-0"
                  name=""
                  id=""
                />
                <p>
                  If you have only a few students that will be working on just a
                  few assignments, ask students to individually share their
                  documents with you.
                </p>
              </article>
              <article className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="circular-checkbox flex-shrink-0"
                  name=""
                  id=""
                />
                <p>
                  Create shared folders for each student to submit their work.
                  Then, students can either create a document and move it to
                  their shared folder, or create a document within the shared
                  folder itself. You can easily identify changes to these
                  folders by viewing the activity information.
                </p>
              </article>
              <article className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="circular-checkbox flex-shrink-0"
                  name=""
                  id=""
                />
                <p>
                  Ask your students to send you a message when they’re done with
                  the assignment. In Google Docs, students and teachers have the
                  ability to send a message directly to a document’s
                  collaborators.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*eND OF 10 ScETioN */}

      {/* image section */}
      <div className="bg-[url('./assets/gc13.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 11 ScEtiOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p>
                Now that you’ve learned how to assign work and collect
                assignments with Google Classroom
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12">
                  <li>
                    How can I creatively engage my students in Google Classroom?
                  </li>
                  <li>
                    How can Classroom help me streamline grading of assignments?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/gc15.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End Of 11 ScEtiOn */}
    </div>
  );
};

export default ClassSection;
