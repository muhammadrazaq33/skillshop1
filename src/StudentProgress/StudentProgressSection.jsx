import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const StudentProgressSection = () => {
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
                          Assess student Knowledge with
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          View Google Form responses
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Use Google Forms for grading
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Keep your Forms anonymous
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
                  src="./assets/form1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Forms</h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/s4.png"
                  className="w-[3.2rem] h-[3.2rem] flex-shrink-0"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Sheets</h1>
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
              <img src="./assets/form3.png" alt="" />
              <p className="text-center">
                Recognize which student data is necessary for classroom use
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/work4.png" alt="" />
              <p className="text-center">
                Identify effective methods for collecting student data
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/s3.png" alt="" />
              <p className="text-center">
                Use Forms data to assess student knowledge of course material
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SEcOnD SecTion  */}
      {/* Assess student knowledge with Google Forms */}
      <div className="py-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Assess student knowledge with Google Forms
          </h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 gap-y-4">
            {/* TeXT */}
            <div className="flex flex-col gap-4">
              <p>
                Forms can be used to assess student knowledge and uncover which
                areas of a topic you need to focus on. Students can even use
                Forms to assess their own learning and set personal learning
                goals. The data from Forms is collected in a spreadsheet,
                allowing for further analysis.Google Forms also offers a{" "}
                <strong>summary of responses</strong> that creates visual
                representations of how respondents answered close-ended
                questions like multiple-choice questions. Forms allows you to
                embed, link, and email forms so it’s easy to share the results
                with others.
              </p>
            </div>

            {/* IMAge Div */}
            <div>
              <img src="./assets/s5.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* 3 SeCtiON */}
      {/* View Google Form responses */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              View Google Form responses
            </h1>
          </div>

          {/* FiRsT DIv */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="flex flex-col gap-4 md:col-span-2">
              <p>
                After you send your form to students, you can easily check their
                individual responses or a summary on the{" "}
                <strong>Responses</strong> tab. The <strong>Questions</strong>{" "}
                tab brings you back to the questions you created.
              </p>
              <p>
                To analyze your responses further, you can send them to a
                spreadsheet.
              </p>
              <p>
                You might want to view responses in a spreadsheet to sort and
                filter them for review or to average student grades.{" "}
              </p>
              <p>
                The spreadsheet is linked to your form, so responses appear in
                real time.
              </p>
            </article>
            <article className="md:col-span-1">
              <img src="./assets/s6.png" className="w-full" alt="" />
            </article>
          </div>

          {/* SeconD Div */}
          <div className="flex flex-col gap-6">
            <p>
              Watch the videos below to learn more about how to view responses
              in Google Forms and Google Sheets.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
              <article className="flex flex-col gap-4">
                <p className="font-bold">View responses as a summary</p>
                <p className="font-semibold">
                  Click play to watch the video below.
                </p>
                <iframe
                  //   width="800"
                  //   height="600"
                  src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="min-h-[300px] "
                ></iframe>
              </article>
              <article className="flex flex-col gap-4">
                <p className="font-bold">View responses individually</p>
                <p className="font-semibold">
                  Click play to watch the video below.
                </p>
                <iframe
                  //   width="800"
                  //   height="600"
                  src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="min-h-[300px]"
                ></iframe>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*End oF 3 SeCtiON */}

      {/* ImAge SEctION */}
      <div>
        <img src="./assets/form8.png" className="" alt="" />
      </div>

      {/* 4 SeCtiON */}
      {/* Use Google Forms for grading */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Use Google Forms for grading
            </h1>
            <p>
              You might already use a printed version of a rubric to assess
              student work. Speed up grading by creating your rubric in Google
              Forms instead.
            </p>
            <p>
              For example, create a basic grid-style rubric in Google Forms.
              Each row of your form should include an element of the project or
              paper to assess, like, “student presents information in a logical
              sequence” or “student demonstrates full knowledge by answering all
              questions.” Each column should include a numerical rating, like 1
              to 4. As you review the project, quickly click your rating for
              each element.{" "}
            </p>
            <p>
              You can also use this type of form for student presentations. Just
              quickly fill out the form and move on to the next student form in
              real time. You could even take this idea to the next level and
              have students peer or self-assess using a similar form.
            </p>
            <p>
              Check out this{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/1-I5d5QhB92gD296nC0TNu_UMMOzFfU-5R204oaDGTFY/copy"
                className="text-[blue] underline"
              >
                example form
              </a>{" "}
              to see what this type of rubric looks like using Google Forms.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* ImAge SEctION */}
      <div>
        <img src="./assets/s8.png" className="" alt="" />
      </div>

      {/* FIfTh SeCtiON */}
      {/* Try it out */}
      <div className="bg-[#FFFFFF] sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Create a grid-type rubric.</p>
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
          <div className={`flex flex-col gap-8 ${show ? "block" : "hidden"}`}>
            {/* First div */}
            <div className="flex flex-col gap-4">
              <p>
                In this video, we'll create a grid type rubric using Google
                forms.
              </p>
              <ol className="list-decimal pl-12">
                <li>
                  This type of rubric can be used when assessing student work
                  with a rubric. It can also be used by students when doing a
                  peer review of each other's work.
                </li>
                <li>
                  Start by creating a <strong>New form</strong> in Google Forms.
                </li>
                <li>
                  Give it a title by clicking on the{" "}
                  <strong>Untitled form</strong> header and replacing it with
                  your title.
                </li>
                <li>
                  Next, add a short answer question to collect student names.
                  Click the <strong>Dropdown menu</strong> next to the{" "}
                  <strong>Question type</strong> and select{" "}
                  <strong>Short answer</strong>.
                </li>
                <li>
                  Mark this question as required so you don't forget to include
                  the student name that you are assessing.
                </li>
                <li>
                  Next, add a question by selecting the{" "}
                  <strong>Plus - add question icon</strong>
                  in the <strong>Toolbar</strong>.
                </li>
                <li>
                  This time we're going to add a{" "}
                  <strong>Multiple choice grid</strong>.
                </li>
                <li>
                  A multiple choice grid is a quick way to add more than one
                  question with the same answer options.
                </li>
                <li>
                  Once selected, in the <strong>Question area</strong>, you may
                  want to add instructions. Especially if this is a rubric
                  that's going to be used by students for peer review.{" "}
                </li>
                <li>
                  For example, you might add a question that asks students to
                  score each presentation using the rubric below.
                </li>
                <li>
                  The criteria for your rubric is going to be the rows in this
                  multiple choice grid.
                </li>
                <li>
                  Add in <strong>Rows</strong> the different criteria that you
                  are adding to your rubric.{" "}
                </li>
                <li>
                  Then for the <strong>Columns</strong>, enter the rubric scale.
                  For example, 1 to 4. One, needing improvement and four being
                  excellent.
                </li>
                <li>
                  Add the appropriate scale that you would like to use, and then
                  mark this grid as Require a response in each row so that all
                  areas have to be answered.
                </li>
              </ol>
            </div>
            {/* seconD diV */}
            <div className="flex flex-col gap-4">
              <p>Now it’s time to preview your form.</p>
              <ol className="list-decimal pl-12">
                <li>
                  Click the <strong>Preview</strong> icon in the{" "}
                  <strong>Form header</strong>
                  here to preview what this form will look like.{" "}
                </li>
                <li>A preview will then open in a new tab.</li>
                <li>
                  If you need to make edits, you can go back to the original tab
                  or you can click the <strong>Edit</strong> icon here.
                </li>
                <li>
                  Once you are ready to use this form as yourself, as a teacher
                  or with your students, you can simply open the form and fill
                  it out.
                </li>
                <li>
                  As all questions require a response, the form can’t be
                  submitted unless everything is complete and a warning prompt
                  will appear if any fields are incomplete.
                </li>
                <li>
                  When finished, click <strong>Submit</strong>.
                </li>
                <li>The form has now been submitted.</li>
                <li>
                  This is a great type of form to use when students are
                  presenting as you can quickly fill out the form and move on to
                  the next student in real time.{" "}
                </li>
                <li>
                  And as mentioned earlier, you could also take this idea to the
                  next level and have students peer review each other, or even
                  self assess using a similar type of form.
                </li>
              </ol>
            </div>
            <p>
              This is why Google Forms is a great tool for students and
              teachers.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF fifth SeCtiON */}

      {/* 6 SeCtiON */}
      {/* Keep your Google Forms anonymous */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Keep your Google Forms anonymous
            </h1>
            <p>
              To keep forms anonymous, do not add a name section and do not
              collect email addresses. You may want to do this for a feedback
              form so students feel comfortable being honest about their
              responses
            </p>
            <p>
              When you’re done grading and writing feedback, turn all that
              feedback into a spreadsheet. The data is automatically collected
              in a spreadsheet in Google Sheets. Share that spreadsheet with
              students and guardians to clearly communicate student progress and
              results.
            </p>
          </div>
          <div>
            <img src="./assets/s9.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 6 SeCtiON */}

      {/* ImAge SEctION */}
      <div>
        <img src="./assets/s10.png" className="" alt="" />
      </div>

      {/* 7 ScEtiOn */}
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
                Now that you’ve learned how to use Google Forms to collect and
                assess student knowledge, it’s your turn to reflect on what you
                have learned.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12">
                  <li>
                    How can you use Google Forms to assess student knowledge?
                  </li>
                  <li>
                    How can you collect anonymous peer feedback on students’
                    projects?
                  </li>
                  <li>
                    How can Google Forms help you grade student work more
                    efficiently?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/W17.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End Of 7 ScEtiOn */}
    </div>
  );
};

export default StudentProgressSection;
