import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const GoogleCalenderSection = () => {
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
                          Create customized calenders in Google Calender
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Share a calender
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Create additional calenders
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Set reminders and notifications for calender events
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
                  src="./assets/meet3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">
                  Google Calendar
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
          <div className="">
            <div className="md:flex items-center justify-center gap-5">
              <article className="bg-[#E6E7E9] grid place-items-center max-w-[18rem] h-[7.5rem] py-4 rounded-lg px-4 ">
                <img
                  src="./assets/cal2.png"
                  className="w-[2.2rem] h-[2.2rem]"
                  alt=""
                />
                <p className="">Create events in Google Calendar</p>
              </article>
              <article className="bg-[#E6E7E9] grid place-items-center max-w-[18rem] h-[7.5rem] py-4 rounded-lg px-4 ">
                <img
                  src="./assets/cal3.png"
                  className="w-[2.2rem] h-[2.2rem]"
                  alt=""
                />
                <p className="">
                  Create customized calendars in Google Calendar
                </p>
              </article>
            </div>
            <div className="md:flex items-center justify-center gap-5">
              <article className="bg-[#E6E7E9] grid place-items-center max-w-[18rem] h-[7.5rem] py-4 rounded-lg px-4 ">
                <img
                  src="./assets/cal4.png"
                  className="w-[2.2rem] h-[2.2rem]"
                  alt=""
                />
                <p className="text-center">Manage multiple calendars</p>
              </article>
              <article className="bg-[#E6E7E9] grid place-items-center max-w-[18rem] h-[7.5rem] py-4 rounded-lg px-4 w-auto ">
                <img
                  src="./assets/cal5.png"
                  className="w-[2.2rem] h-[2.2rem]"
                  alt=""
                />
                <p className="text-center">
                  Set reminders and notifications for calendar events
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SECOND SeCtiON */}
      {/* Create customized calendars in Google Calendar */}
      <div className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Create customized calendars in Google Calendar
            </h1>
            <p>
              In addition to being an educator, you probably have a busy life
              with many different things to keep track of. Balancing a busy
              professional life with after-school activities, grading, and other
              duties in addition to a personal life, can be overwhelming. With
              all of these competing priorities in life, you might feel like
              there isn’t enough time to get it all done.
            </p>
            <p>
              Google Calendar can help you stay organized and add more structure
              to a busy schedule. With Google Calendar, you can create a
              calendar for each class or subject and see them all together in
              one location. Plus, you can share individual calendars with your
              colleagues and students to communicate important dates and your
              availability. You can also set up custom reminders with each
              calendar so you never forget an important meeting, school event,
              or sports activity.
            </p>
            <p>
              In this lesson, you will learn to manage multiple calendars and
              understand how to set reminders and notifications for calendar
              events.
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
              In addition to being an awesome educator, you probably have a busy
              life with many different things to keep track of. Balancing a busy
              professional life with after-school activities, grading, and other
              duties in addition to a personal life, requires a lot of your time
              and energy. With all of these competing priorities in life, you
              might feel like you would love more time to get it all done. Thank
              goodness for Google Calendar!
            </p>
            <div>
              <p>
                Google Calendar can help you stay organized and add more
                structure to a busy schedule.{" "}
              </p>
              <ol className="list-decimal pl-12">
                <li>
                  You can create a calendar for each class or subject and see
                  them all together in one location.
                </li>
                <li>
                  You can also set up custom reminders with each calendar so you
                  never forget an important meeting, school event, or sports
                  activity.{" "}
                </li>
                <li>
                  With Google Calendar you can also manage multiple calendars
                  and set reminders and notifications for events. Keep in mind,
                  this is just a few of the ways you can customized this tool.
                </li>
              </ol>
            </div>
            <p>
              There is so much more to discover when you start using Google
              Calendar.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF SECOND SeCtiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/cal6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* THIRD sEctiON */}
      {/* Share a calendar */}
      <div className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">Share a calendar</h1>
          <p>
            You might want to share your calendar with individuals or groups to
            help you coordinate plans with others. For example, you can share
            your calendar with your colleagues so they can access your schedule
            and see when you are free to meet. Or you can share a calendar with
            students so they can book an after-school appointment with you. Use
            a shared calendar to keep track of coaching duties with other
            colleagues. Communicate on the school webpage by adding a shared
            calendar, so the community is made aware of practice schedules and
            sports games.
          </p>
          <p>
            Each calendar you create can have separate permissions, sharing
            settings, and customizations that make it unique from other
            calendars. For example, easily remember events and share them with
            students, parents, and administration by creating a classroom
            calendar that is shared publicly. Or, only share some calendars with
            specific members of a group, like sports teams and science clubs.
          </p>
          <p>
            You have the flexibility to share any calendar you create, or even
            your default calendar.
          </p>
        </div>
      </div>
      {/*end Of THIRD sEctiON */}

      {/* FOURTH sEctiON */}
      {/* Create additional calendars */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Create additional calendars
          </h1>
          <p>
            Your Google account comes with a default calendar that you might
            want to use as your main calendar for school. You can also add
            additional calendars for your various obligations.
          </p>
          <p>
            Many teachers have more than a classroom to manage. You might also
            run a science competition, coordinate an after-school club, and
            coach a sports team. These responsibilities require communication
            with parents and guardians, students, and colleagues, but it can be
            difficult to stay organized. You can create separate calendars,
            unique to each audience and area of life and set schedules for
            various activities. Multiple calendars help to share vital
            information pertaining to homework, lectures, and important dates.
          </p>
          <p>
            You can create an unlimited number of calendars to keep track of the
            different parts of your life. Setting up multiple different
            calendars can help create order and structure in your busy schedule.
          </p>
        </div>
      </div>
      {/*end Of FOURTH sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/cal7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* fifth SeCtiON */}
      {/* Try it out */}
      <div className="bg-[#F9F9FA] shadow-inner-large sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Create additional calendars.</p>
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
            <div className="flex flex-col gap-5">
              <p>Let’s create additional calendars in Google calendar.</p>
              <ol className="list-decimal pl-12">
                <li>
                  Click the <strong>Plus</strong> button next to{" "}
                  <strong>Other Calendars</strong>
                </li>
                <li>
                  Select <strong>Create new calendar</strong>.
                </li>
                <li>
                  You can now give this calendar a name, a description, and a
                  time zone.
                </li>
                <li>
                  When you're done, click <strong>Create calendar</strong>.
                </li>
                <li>It'll take a moment to process.</li>
                <li>
                  You'll get a success message once your calendar has been made.
                  If you click the back button, you'll now be able to see your
                  new calendar on your list under <strong>My calendars</strong>.{" "}
                </li>
                <li>
                  You can assign a color by clicking on the three dot menu and
                  choosing from the pallet.
                </li>
                <li>
                  It's a good idea to give each of your calendars different
                  colors so you can tell them apart.
                </li>
              </ol>
            </div>
            <p>Thank you for watching.</p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF FIFTH SeCtiON */}

      {/* SIXTH sEctiON */}
      {/* Set reminders and notifications for calendar events */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Set reminders and notifications for calendar events
          </h1>
          <p>
            To get a notification about an upcoming event on your calendar, set
            up reminders. Notifications can be sent as an email. You can change
            your notification settings for one event or multiple events. The
            time frame, type of notification, and other settings can be
            customized for each event, and defaults can be established for each
            calendar.
          </p>
          <p>
            You can change notification preferences for a single event or all
            your events. For each calendar, you can set up different reminder
            notifications. For example, set a reminder email a week ahead of
            important deadlines to remind students of events or assignments.
          </p>
        </div>
      </div>
      {/*end Of SIXTH sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/cal7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* SEVENTH SeCtiON */}
      {/* Try it out */}
      <div className="bg-[#F9F9FA] sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Sett reminders and notifications for calendar events.</p>
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
            <div className="flex flex-col gap-5">
              <p>To change your notifications for all events:</p>
              <ol className="list-decimal pl-12">
                <li>Open Google Calendar in your browser.</li>
                <li>
                  Click the Settings icon and select <strong>Settings</strong>.
                </li>
                <li>
                  In the sidebar, click <strong>General</strong>, then
                  <strong>Notification settings</strong>.
                </li>
                <li>
                  Under Notifications, click the drop-down menu and select how
                  you want to receive notifications, these can be Alerts or
                  Desktop notifications. You can also select{" "}
                  <strong>Off</strong> if you don’t want notifications.
                </li>
                <li>
                  You also have the option to snooze a notification so it
                  appears again later.
                </li>
                <li>
                  To adjust the timing of snoozed notifications, make sure
                  Desktop notifications are enabled, then customize your timing
                  under <strong>Show snoozed notifications</strong>.
                </li>
                <li>
                  If you only want to get notifications if you respond “Yes” or
                  “Maybe” to an event, click the box for this option.
                </li>
                <li>
                  Now let’s show you how to change notifications for a single
                  event.
                </li>
                <li>Let’s go back to the main Google Calendar view.</li>
                <li>
                  Click the event you’d like to change the setting for then
                  click the <strong>Edit</strong> icon.
                </li>
                <li>
                  Click <strong>Add notification</strong>.
                </li>
                <li>
                  Choose if you want to receive a desktop notification or an
                  email. You can also change how often you want to get notified
                  in advance.
                </li>
                <li>
                  To add another type of notification, click{" "}
                  <strong>Add notification</strong>.
                </li>
                <li>To remove a notification, click the X button.</li>
                <li>
                  You can choose to be notified by email, desktop alert, or
                  both.
                </li>
                <li>
                  Changes you make don't affect anyone else who's invited to the
                  event.
                </li>
                <li>
                  Click <strong>Save</strong>.
                </li>
                <li>
                  Finally, you can also change notifications for specific
                  calendars you own, let show you how.
                </li>
                <li>
                  Click the Settings icon and select <strong>Settings</strong>.
                </li>
                <li>
                  Under Settings for My Calendars, click the calendar you want
                  to change.
                </li>
                <li>
                  Scroll down to <strong>Event notifications</strong> and click
                  it.
                </li>
                <li>
                  Under All-day event notifications click{" "}
                  <strong>Add notification</strong>.
                </li>
                <li>
                  To edit your notifications choose if you want to receive a
                  notification or an email.
                </li>
                <li>
                  You can also change how often you want to be notified in
                  advance.
                </li>
                <li>
                  To remove a notification, click the <strong>X</strong> button.
                </li>
                <li>
                  Scroll down to Other notificiations to edit your notifications
                  for other types of events.
                </li>
              </ol>
            </div>
            <p>Thank you for watching.</p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF SEVENTH SeCtiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/cal8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 8 ScEtiOn */}
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
                Now that you’ve learned how to schedule and plan effective
                meetings with Google Calendar, reflect on how you might use
                these features.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12">
                  <li>
                    How can Google Calendar help you stay organized and on track
                    with daily obligations?
                  </li>
                  <li>
                    Would it be helpful to create multiple calendars for various
                    roles in your career? What kinds of different calendars
                    would help you stay organized
                  </li>
                  <li>
                    How can customizing calendar notifications help you stay on
                    track?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/cal9.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End Of 8 ScEtiOn */}
    </div>
  );
};

export default GoogleCalenderSection;
