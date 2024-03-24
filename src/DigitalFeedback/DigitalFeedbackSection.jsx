import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DigitalFeedbackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);
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
                          Give feedback for student growth
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Give feedback with Google Docs and Classroom
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Grading and returning student work
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Suggest edits
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname">
                          Give feedback with Forms
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
                  src="./assets/Docs.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Docs</h1>
              </div>
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
                  src="./assets/form1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Forms</h1>
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
              <p className="text-center">
                Use Forms for students to collect feedback on their work
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/gc2.png" alt="" />
              <p className="text-center">
                Recognize the value of incorporating digital feedback for
                students
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/gc3.png" alt="" />
              <p className="text-center">
                Identify different strategies and tools for providing student
                feedback
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/d4.png" alt="" />
              <p className="text-center">
                Use comments and Workflow in Google Classroom
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/d5.png" alt="" />
              <p className="text-center">
                Use comments and suggestion mode in Google Docs
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* sECoND SectION */}
      {/* Give feedback for student growth */}
      <div className="sm:pt-16 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Give feedback for student growth
            </h1>
            <p>
              Students learn best when they are given feedback on how to improve
              their work and what to do differently. It’s equally important to
              provide students with positive feedback so they know what they’re
              doing well. Learning how to give and receive feedback is also
              important for their future career growth in almost any field.
            </p>
            <p>
              Google tools can help you facilitate students’ peer-to-peer
              feedback and student-teacher feedback. With Google tools, you can
              provide feedback throughout the entire lifecycle of an assignment,
              meaning feedback can be shared in real time, inside or outside of
              the classroom.{" "}
            </p>
          </div>
          {/* bUTTONs and pArAGrAPhs ===>*/}
          <div className=" sm:pb-16 pb-12">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
              {/* useSTATE */}
              {/* second div */}
              <div className="flex flex-col gap-3">
                <p className="font-bold">Click each tab to learn more.</p>
                {/* buttons ===> */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
                  <button
                    className={`btn ${
                      activeIndex === 0 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(0)}
                  >
                    Give feedback in Google Docs
                  </button>
                  <button
                    className={`btn ${
                      activeIndex === 1 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(1)}
                  >
                    Insert comments
                  </button>
                </div>
                {/* end of buttons */}

                {/* paragraph  */}
                <div className="mt-4">
                  <div
                    className={`${
                      activeIndex === 0 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-2 grid-cols-1 gap-8`}
                  >
                    {/* imaGE */}
                    <div className="">
                      <img src="./assets/d1.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p>
                        To give feedback in Google Docs, you can use the comment
                        feature or suggest changes directly in a student’s
                        assignment. Students can also use these features to
                        provide each other with feedback when collaborating on
                        an assignment.
                      </p>
                    </div>
                  </div>

                  {/* seConD pArAgrAPh */}
                  <div
                    className={`${
                      activeIndex === 1 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-2 grid-cols-1 gap-6`}
                  >
                    <div className="flex flex-col gap-4">
                      <ol className="list-decimal pl-12">
                        <li>
                          To add comments directly in Google Docs, click the
                          text that you want to leave feedback on, and insert a
                          comment.
                        </li>
                        <li>
                          The selected text will then become highlighted and a
                          pop-up window will appear in the right margin.
                        </li>
                        <li>
                          Type comments in this window and click the{" "}
                          <strong>Comment</strong>
                          button to save your remarks.
                        </li>
                        <li>
                          Anybody with access to the document can see the
                          comments inline with the text.
                        </li>
                        <li>
                          By replying to comments, a student can start a
                          discussion and interact with your feedback. Once
                          students integrate your feedback into their work, they
                          can click <strong>Resolve</strong> to clear the
                          comment.
                        </li>
                      </ol>
                    </div>
                    {/* imaGE */}
                    <div className="">
                      <img src="./assets/d2.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* EnD oF UsEsTate */}
            </div>
          </div>
          {/* End Of ButTONs ===> */}
        </div>
      </div>
      {/*EnD of SEConD SectION */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('./assets/d6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 sectIOn */}
      {/* Success stories
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Success stories</h1>

          {/* cardS */}
          <div className="flex flex-col items-center w-full max-w-[32rem] m-auto gap-16">
            <article className="flex flex-col gap-12 items-center py-4 px-4 bg-[#F9F9FA] rounded-lg">
              <img src="./assets/gc12.png" alt="" />
              <p>
                The commenting feature in Docs is a lifesaver for my students.
                They comment heavily on each other’s work through a peer
                feedback protocol we have in place. As they type comments in the
                margins they can even tag each other by using the plus sign and
                typing their name. When doing group projects, this keeps a
                natural conversation going on, as students address a specific
                peer. Another feature I use a lot is looking at the Comments
                history. I often have to reopen a comment if it hasn’t truly
                been addressed by the student, even though they resolved it.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*enD Of 3 sectIOn */}

      {/* 4 ScETioN */}
      {/* Give feedback with Google Docs and Classroom */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Give feedback with Google Docs and Classroom
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
            <article className="flex flex-col gap-4">
              <p>
                Students can create documents to complete their assignments and
                upload them to an assignment in Classroom for review. There are
                several efficient methods of feedback and grading you can
                provide your students in Docs that work together with Classroom,
                including the comment bank and assignment grading workflow
                features.
              </p>
              <p>
                If your students complete an assignment in Google Docs and
                submit it via Classroom, you can use the comment bank to store
                the comments you’ve made on a student’s document that you might
                want to reuse on other students’ work. For example, you might
                store comments like “Great work!”, “Add more detail”, or other
                comments you use frequently. Then, you can quickly insert the
                comment into a student’s assignment, instead of typing it out
                every time.
              </p>
            </article>
            <article className="justify-self-center">
              <img src="./assets/d8.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 4 ScETioN */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('./assets/d10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* FIfTh SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>
              Add comments to student work as well as add comments to a comment
              bank.
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
          <div className={`flex flex-col gap-10 ${show ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-4">
              <p>
                In this video, we'll add comments to student work in Google
                Classroom and also add to our comment bank.
              </p>
              <ol className="list-decimal pl-12">
                <li>
                  First, navigate to the <strong>Classwork</strong> page and
                  open up an assignment that students have submitted.
                </li>
                <li>
                  Click <strong>View assignment</strong> and then click on a
                  student to see their assignment.{" "}
                </li>
                <li>
                  To make a comment, highlight the text you'd like to review.
                </li>
                <li>
                  Click the plus <strong>Add comment</strong> icon here, and
                  then type your comment in the box.
                </li>
                <li>
                  Click <strong>Comment</strong> to post.
                </li>
                <li>
                  If this is a phrase you commonly use, click on the comment and
                  then choose the <strong>More options</strong> icon with the
                  three dots
                </li>
                <li>
                  You can then select <strong>Add to comment bank</strong> to
                  save time making future comments.
                </li>
                <li>
                  You can add multiple comments here by adding a new line and
                  then click <strong>Add</strong> when done.
                </li>
                <li>
                  To access your saved comments type the{" "}
                  <strong>Number sign</strong> or <strong>Hashtag</strong> and a
                  keyword in the comment field.{" "}
                </li>
                <li>
                  Your comment bank will pop up and you can choose the comment
                  that you would like to use.
                </li>
              </ol>
            </div>
            <p>And that is how to use the comments function.</p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF fifth SeCtiON */}

      {/* 6 ScETioN */}
      {/* Success stories */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text">Success stories</h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article className="justify-self-center">
              <img src="./assets/d11.png" alt="" />
            </article>
            <article className="flex flex-col gap-4">
              <p>
                “I love working in Google Classroom! After a piece of work has
                been handed in I give my students feedback in a couple of ways.
                I assign a point value for each assignment and give a number
                grade. It’s great because I see all of the student work and
                scores in one place but students only see the scores that I gave
                directly to them. While that numeric grade is important to
                document their performance, I think the best learning actually
                comes from the individual comments I can leave on the
                assignment. Students not only see their grade but my private
                feedback. We can have conversations about the assignments as
                they can also reply to my comments.”
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 6 ScETioN */}

      {/* 7 ScETioN */}
      {/* Suggest edits in Google Docs */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Suggest edits in Google Docs
            </h1>
            <p>
              Suggesting mode is a great tool for giving feedback to students
              that they can learn from. While the comment feature is great for
              discussion, it’s not as useful for pointing out misplaced commas,
              spelling errors, or missing apostrophes. When you want to make
              smaller edits in a document, such as correcting grammar or
              punctuation, use <strong>Suggesting</strong> mode. If you edit a
              document directly when making spelling corrections or other
              changes, students may miss them. Suggesting mode gives students
              the opportunity to learn from their mistakes.
            </p>
          </div>
        </div>
      </div>
      {/*eND OF 7 ScETioN */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('./assets/d10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 8 SEctIon */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto">
          <h1 className="text mb-6">Success stories</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="md:col-span-1">
              <img src="./assets/d12.png" alt="" />
            </article>
            <article className="md:col-span-2">
              <p>
                “Sometimes people give more honest feedback if it is anonymous.
                Giving constructive, honest but kind feedback anonymously has to
                be taught. Our drama students practice this a lot through Google
                Forms. As part of their project performances we have each
                student create their own feedback form for their work. They get
                to decide the criteria and the levels of success at three
                different levels. During their performance, the rest of the
                students have the link to the Google Form and provide
                constructive comments. We don’t record usernames or identifying
                information of the students filling out the form. Using the
                responses sheet and summary of responses each student gets
                personalized feedback from their peers. Of course at first, the
                kids were a little silly with their comments, but we talked
                about what makes an appropriate comment and what they would like
                to hear about. Now they are champions at it and are engaged with
                helping their classmates become better performers.”
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eNd Of  8 SEctIon */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('./assets/d13.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 9 ScEtiOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p>
                Now that you’ve learned how to give feedback using Google
                Workspace for Education, think about how you could use
                Classroom, Docs, and Forms, or a combination of these, to
                provide feedback to your students.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12">
                  <li>
                    Think about the last two pieces of work you gave handwritten
                    feedback on. How could you use Google tools to give feedback
                    digitally?
                  </li>
                  <li>Which apps might work best with these assignments?</li>
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

export default DigitalFeedbackSection;
