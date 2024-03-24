import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlBadge } from "react-icons/sl";

const GoogleMeetSection = () => {
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
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline ">
                          Start a meeting from Gmail
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Schedule a video meeting from Google Calender
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Share your screen in a meeting
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Raise your hand in a meeting
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Track Attendance in Google Meet
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
                  src="./assets/meet2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Meet</h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/meet3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">
                  Google Calendar
                </h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2 w-full">
                <img
                  src="./assets/meet4.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Gmail</h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="flex flex-wrap justify-center gap-6">
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/meet5.png" alt="" />
              <p className="text-center">
                Identify the benefits of real-time, virtual communication with
                students and guardians
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SECOND seCTION */}
      <div className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-6 gap-8">
          <p>
            Organizing a meeting in Google Meet is a great way to connect with
            students or colleagues. With Meet, it is possible to see and hear
            the other person and have a conversation as though you were in the
            same room. Use it to plan with other teachers, talk with a guardian
            who is unable to make it to an in-person meeting or support a
            student who can’t come to school due to illness.{" "}
          </p>
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <p>
              Did you know that you can do more with Google Meet if you have the
              <strong> Teaching and Learning Upgrade</strong> or{" "}
              <strong>Education Plus</strong>
              editions of Google Workspace for Education? With Google Meet
              you'll be able to amplify engagement with increased capabilities,
              like livestreaming a school event, or facilitating group
              discussions with polls, Q&A and breakout rooms. The possibilities
              are endless!
            </p>
          </div>
        </div>
      </div>
      {/*end oF  SECOND seCTION */}

      {/* third SeCtiON */}
      {/* Start a meeting from Gmail */}
      <div className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Start a meeting from Gmail
            </h1>
            <p>
              Imagine having after-school hours for your students during a set
              homework time when they can ask you and each other for help, if
              needed. If you need to reply with more than a single sentence, you
              can be face-to-face with the student in seconds. You might use
              Meet to help with homework or exam prep or to teach a class of
              students in different locations.
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
              To start a meeting from Gmail, click on the <strong>Meet</strong>{" "}
              button, then click <strong> New meeting</strong>.{" "}
            </p>
            <ol className="list-decimal pl-12">
              <li>
                You'll get a pop up asking you to either share your invitation
                or start the meeting now.
              </li>
              <li>
                Click, <strong>Start now</strong>.
              </li>
              <li>Your meeting will now appear.</li>
              <li>
                The exit the meeting click Red phone button to hang up the call.
              </li>
            </ol>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF third SeCtiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('./assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* fOuRtH sEctiON */}
      {/* Schedule a video meeting from Google Calendar */}
      <div className=" sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Schedule a video meeting from Google Calendar
          </h1>
          <p>
            When you create an event on Google Calendar, you can add a video
            meeting link within the event. That way, everyone has the meeting
            link right there in their own calendars. Now, when you need to join
            a specific meeting, you don’t have to search through your email for
            the link as it’s already in your calendar.
          </p>
        </div>
      </div>
      {/*end Of FOURTh sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('./assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* fIFTh SeCtion */}
      <div className="bg-white sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Try it out</h1>

          <div className="flex flex-col gap-5">
            <p>Schedule a video meeting from your Google Calendar.</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              <article className="md:col-span-2 flex flex-col gap-7">
                <ol className="list-decimal pl-12">
                  <li>
                    In Google Calendar, click <strong>Create</strong>, then
                    click <strong>Event</strong>.
                  </li>
                  <li>
                    A pop-up window will appear where you can add the event
                    title and details.
                  </li>
                  <li>
                    Click <strong>Add guests</strong>.
                  </li>
                  <li>
                    Enter the names or emails of the people you want to invite.
                  </li>
                  <li>
                    Click <strong>Save</strong>.
                  </li>
                  <li>
                    To notify guests, click <strong>Send</strong>.
                  </li>
                </ol>
                <div className="flex flex-col gap-4">
                  <p>
                    <strong>Google Workspace for Education users</strong>: You
                    can also add a dial-in number to the event.{" "}
                  </p>
                  <p>
                    <strong>Important</strong>: Guests can forward the meeting
                    link to other people. If an uninvited person tries to join a
                    meeting, participants from your organization must accept
                    their request.
                  </p>
                  <div className="flex flex-col gap-0">
                    <p className="font-bold">Join a meeting</p>
                    <p>
                      You can join a video meeting from Google Meet, Google
                      Calendar, or Gmail from your computer. You can also{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://support.google.com/meet/answer/9303069?hl=en&amp;ref_topic=7192926#zippy=%2Cuse-a-phone-to-dial-into-a-meeting"
                        className="text-[blue] underline"
                      >
                        dial-in to a meeting
                      </a>{" "}
                      from a phone or a meeting room, or you can use Google Meet
                      without a Google account.&nbsp;
                    </p>
                  </div>
                  <p>
                    Mobile users can also join meetings from their mobile using
                    the Android or iOS Google Meet app.
                  </p>
                  <p>
                    Users on a computer or mobile device can communicate by text
                    via the Google Meet chat feature without disrupting the
                    meeting.
                  </p>
                </div>
              </article>
              <article className="md:col-span-1">
                <img src="./assets/meet8.png" alt="" />
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*enD Of fIFTh SeCtion */}

      {/* sIXTH sEctiON */}
      {/* Share your screen in a meeting */}
      <div className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Share your screen in a meeting
          </h1>
          <p>
            When you’re in a video call with others, there are times when you
            might need to show them your screen. Maybe you need to demonstrate
            to your students how to solve a math problem, show them an example
            of a project, or just let them see what you’re seeing on your
            screen. This can also be useful for presenting ideas to a group of
            guardians unable to attend a face-to-face meeting. Sharing a screen
            in Google Meet is easy.
          </p>
        </div>
      </div>
      {/*end Of siXTh sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('./assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* sEVeNTh SecTION */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-5 md:col-span-1">
              <p>Share your screen in Google Meet.</p>
              <ol className="list-decimal pl-12">
                <li>Open Gmail.</li>
                <li>
                  Navigate to <strong>Meet</strong> on the left side bar, click
                  New meeting and Join now to practice this.
                </li>
                <li>
                  At the bottom, click <strong>Present now</strong>.
                </li>
                <li>
                  Select <strong>Your entire screen, A window</strong>, or{" "}
                  <strong>A tab</strong>.
                </li>
                <ol className="list-decimal pl-12">
                  <li>
                    If you present a Chrome tab, it shares that tab's audio by
                    default. This is useful when sharing a video clip.{" "}
                  </li>
                  <li>
                    To present a different tab then what you are already
                    presenting, select the tab you want to present on your
                    browser, a menu will appear at the top of the page, click
                    <strong>Share this tab instead</strong>.
                  </li>
                </ol>
                <li className="mt-2">
                  {" "}
                  Click <strong>Share</strong>.
                </li>
              </ol>
            </article>
            <article className="md:col-span-2 flex flex-col  gap-5 md:ml-6 ml-0 justify-center">
              <p className="font-bold">Click image to enlarge.</p>
              <img src="./assets/meet9.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*enD OF sEVeNTh SecTION */}

      {/* eiGTH sEctiON */}
      {/* Raise your hand in a meeting */}
      <div className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Raise your hand in a meeting
          </h1>
          <p>
            In a productive class discussion, all student voices can be heard.
            In Google Meet, students can take turns talking by raising their
            virtual hand without disrupting the flow of the conversation.
            Moderators receive notifications for hands raised in the order
            they’re raised. After a participant speaks or asks a question, you
            can lower their virtual hand so others can speak.
          </p>
        </div>
      </div>
      {/*end Of EIGTh sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('./assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* niNTH SecTION */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-5 md:col-span-1">
              <p>Raise your hand in a meeting</p>
              <ol className="list-decimal pl-12">
                <li>
                  Join a meeting in Google Meet. You can try this on your own or
                  practice with your students in your next meeting.
                </li>
                <li>
                  To raise your hand, at the bottom of the screen click{" "}
                  <strong>Raise hand</strong>.
                </li>
                <li>
                  To lower your hand, click the <strong>Raise hand</strong>{" "}
                  button again.
                </li>
              </ol>
            </article>
            <article className="md:col-span-2 flex flex-col justify-end gap-5 md:ml-6 ml-0 mt-2">
              <p className="font-bold">Click image to enlarge.</p>
              <img src="./assets/meet10.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*enD OF NiNTh SecTION */}

      {/* TENTH sEctiON */}
      {/* Track attendance in Google Meet */}
      <div className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Track attendance in Google Meet
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              You can focus on greeting your students as they enter a meeting
              while Google Meet takes the attendance for you. This feature is
              only available in the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/"
                className="text-[blue] underline"
              >
                <strong>Teaching and Learning, </strong>and{" "}
                <strong>Education Plus&nbsp;</strong>editions
              </a>
              . Attendance tracking reports will be enabled by default for your
              organization and can be turned on or off by administrators. If
              your school’s administration has activated attendance reports, you
              will automatically receive an attendance report for any meeting
              with two or more participants.
            </p>
            <p>
              After the meeting, the meeting organizer will receive an email
              with an attached attendance report in Google Sheets, whether the
              meeting was started from Google Classroom or Google Meet. The
              report will include each participant’s name, email, and length of
              time on a call, including timestamps of when they first joined and
              when they left the call.
            </p>
          </div>
        </div>
      </div>
      {/*end Of tenTH sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('./assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* EleveNth sEctIOn */}
      <div className="sm:pt-20 pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col md:gap-12 gap-8">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p>
                Now that you’ve learned how Google Meet can be a powerful tool
                for connecting your classroom, it’s your turn to reflect on what
                you have learned.
              </p>
              <div className="flex flex-col gap-4 md:col-span-1">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12">
                  <li>
                    What are some situations where you could use Google Meet
                    with your students?
                  </li>
                  <li>How can you use Meet to connect with guardians?</li>
                  <li>
                    What skills can students learn by becoming familiar with
                    Meet?{" "}
                  </li>
                  <li>
                    How might you use Meet to collaborate with other educators?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/meet12.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF EleveNth sEctIOn */}
    </div>
  );
};

export default GoogleMeetSection;
