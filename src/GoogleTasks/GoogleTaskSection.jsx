import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const GoogleTaskSection = () => {
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
                          Create to-do lists in Google Tasks
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Integrate lists in Google Tasks with Google Calender
                        </h3>
                      </div>
                    </NavLink>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Create multi-functional notes in Google Keep
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Add a reminder to a note
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Add an image to a note
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname hover:underline">
                          Collaborate in Keep
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
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2 w-full">
                <img
                  src="./assets/meet4.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Gmail</h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2 w-full">
                <img
                  src="./assets/task2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Keep</h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2 w-full">
                <img
                  src="./assets/task3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Tasks</h1>
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
              <img src="./assets/task4.png" alt="" />
              <p className="text-center">Manage to-do lists in Google Tasks</p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/task5.png" alt="" />
              <p className="text-center">
                Integrate lists in Google Tasks with Google Calendar
              </p>
            </article>
            <article className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 ">
              <img src="./assets/task6.png" alt="" />
              <p className="text-center">
                Recognize how to create multi-functional notes in Google Keep
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* seCoND sEctiON */}
      {/* Create to-do lists in Google Tasks */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Create to-do lists in Google Tasks
          </h1>
          <p>
            Utilizing the Google Tasks feature inside of Gmail is the quickest
            and easiest way to transform your paper-based to-do lists into
            digital ones. Every account in Gmail has a default task list, but
            you can easily add as many lists as you’d like.
          </p>
          <p>
            Each list gives you the option to quickly add, check off, or delete
            tasks as you deem necessary. If you want, you can even mail a list
            to a colleague for their review. You can also add subtasks and due
            dates or move tasks between multiple to-do lists.
          </p>
        </div>
      </div>
      {/*end Of SECOnD sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/task7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* THIRD sEctiON */}
      {/* Integrate lists in Google Tasks with Google Calendar */}
      <div className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Integrate lists in Google Tasks with Google Calendar
          </h1>
          <p>
            All of your tasks will appear as a list on the right side panel of
            your calendar regardless of a date being assigned. However, if you
            rely on Google Calendar as your daily organizational tool, you might
            find it helpful to have your task list viewable directly in your
            calendar.
          </p>
          <p>
            To have any of your current tasks appear on your calendar, you must
            assign them a due date. Tasks with due dates will appear as an
            all-day event at the top of the day so you can easily see all of the
            to-do items due for the day while viewing your calendar.
          </p>
        </div>
      </div>
      {/*end Of THIRD sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/task8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* foURTh SeCTion */}
      {/* tRy IT OUt */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Create additional calendars.</p>
            <ol className="list-decimal pl-12">
              <li>
                Assign one of your tasks a due date. When adding a new task, you
                will see the option to add a date and time. When you assign a
                task a due date, it will automatically appear on your calendar
                for the date you assigned it to.
              </li>
              <li>
                If this is a regular task, make it repeat on certain days. This
                option is within the date and time menu. Click Repeat and add
                the details of when this task needs to repeat.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-10">
            <p className="font-bold">Click image to enlarge.</p>
            <img src="./assets/task9.png" className="cursor-zoom-out" alt="" />
          </div>
        </div>
      </div>
      {/*enD OF foURTh SeCTion */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/task7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* FiFTH sEctiON */}
      {/* Create multi-functional notes in Google Keep */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Create multi-functional notes in Google Keep
          </h1>
          <p>
            Google Keep is another application to help you stay organized. Keep
            is a note-taking app, and you’ll find it especially useful if you
            prefer to use your mobile device to stay organized.
          </p>
          <p>
            With Keep, you can add information, images, and text, and even
            collaborate with other users. Suddenly, your to-do list can be
            worked on and shared with others.You can record multiple notes to
            brainstorm ideas, write your shopping list, or keep important notes
            about your students. Your notes on Google Keep can be private, or
            you can share notes and collaborate with other users. You might want
            to share a note while planning an event with a colleague; you can
            create a to-do list and each person can check off a task as it is
            completed. Or, share a note while creating a lesson plan with
            another teacher to brainstorm collaboratively.
          </p>
        </div>
      </div>
      {/*end Of fIFth sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/task7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* sIxTh sEctiON */}
      {/* Add a reminder to a note */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Add a reminder to a note
          </h1>
          <p>
            Google Keep even has reminders based on a geographic location. For
            example, if you need to stop at the office supply store by the end
            of the week, you can add the location to the note and Keep will
            remind you when you are near that store.
          </p>
        </div>
      </div>
      {/*end Of SIXtH sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/task11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* SeVENth sEcTIOn */}
      {/* tRY It oUt */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-inner-large">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Add a reminder to a note.</p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article>
              <ol className="list-decimal pl-4">
                <li>
                  Click the <strong>Remind me</strong> icon at the bottom of the
                  note to add a reminder. Add a place, date and time, and
                  specify how many times you want to be reminded.
                </li>
                <li>
                  You can set alerts based on locations also. To do this, add a
                  place in the reminder. Whenever you arrive at a specific
                  location, the app will remind you of what you wanted to do.
                  For example, you can create a reminder that says "Remind me to
                  feed the fish when I reach home". Google Keep will monitor
                  your location and as soon as you arrive home, it will pop-up
                  an alert to remind you to feed the fish in your aquarium.
                </li>
              </ol>
            </article>
            <article className="flex flex-col gap-4 justify-end md:mt-5 mt-0">
              <p className="font-bold">Click image to enlarge.</p>
              <img src="./assets/task10.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*ENd Of SeVENth sEcTIOn */}

      {/* 8 sEctiON */}
      {/* Add an image to a note */}
      <div className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Add an image to a note
          </h1>
          <p>
            By utilizing the image feature on Google Keep, you can quickly
            upload images directly from your camera or photo gallery, and then
            categorize them as needed in Google Keep. Maybe you created a to-do
            list on paper and want to add a photo of it to your note. You might
            see an image that reminds you to do something, or inspires a great
            lesson plan. Quickly add any image to a note in Keep to help you
            stay organized with multiple ideas.
          </p>
        </div>
      </div>
      {/*end Of 8 sEctiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/task11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 9 sEcTIOn */}
      {/* tRY It oUt */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-inner-large">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p>Add an image to a note.</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="md:col-span-1">
              <ol className="list-decimal pl-5">
                <li>Start a new note.</li>
                <li>
                  Click the <strong>Add image</strong> button at the bottom of
                  the note.
                </li>
                <li>Choose the image from your phone, Drive, or computer.</li>
                <li>
                  Click <strong>Open</strong> to attach the image to the note.
                </li>
              </ol>
            </article>
            <article className="flex flex-col gap-4 justify-end md:mt-5 mt-0 md:col-span-2">
              <p className="font-bold">Click image to enlarge.</p>
              <img src="./assets/task12.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*ENd Of 9 sEcTIOn */}

      {/* 10 SeCtiON */}
      {/* Collaborate in Keep */}
      <div className="bg-[#F9F9FA] sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Collaborate in Keep</h1>
            <p>
              You might want to add a collaborator to your note to involve a
              colleague in an idea. Or you may need to share a list of materials
              for a department-wide project.
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
          <div className={`flex flex-col gap-8 ${show ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-5">
              <p>
                In this video we’re going to learn how to share a Google Keeps
                note with a collaborator.{" "}
              </p>
              <ol className="list-decimal pl-12">
                <li>
                  To start, click on a note you already have or create a new
                  one.
                </li>
                <li>
                  When you're ready to share, click the{" "}
                  <strong>Collaborator icon</strong> in the notes menu here.
                </li>
                <li>
                  Enter a name, an email address or a Google Group's group to
                  share it with.
                </li>
                <li>
                  The dropdown that appears will suggest matching addresses.
                </li>
                <li>
                  Choose a name and click <strong> Save</strong>.
                </li>
                <li>Your note has now been shared.</li>
                <li>
                  To remove someone from a note, click their{" "}
                  <strong>Name</strong> or <strong>User icon</strong>, click the
                  X to delete them and then choose <strong>Save</strong>.
                </li>
              </ol>
            </div>
            <p>And the note is no longer shared.</p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF 10 SeCtiON */}

      {/* IMAGE SECTION */}
      <div className="bg-[url('./assets/t12.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 11 ScEtiOn */}
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
                Now that you’ve learned how to stay organized with Google Tasks
                and Keep, reflect on the ways you can use Drive in your
                classroom.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12">
                  <li>
                    When would you mostly benefit from taking notes in Google
                    Keep?
                  </li>
                  <li>
                    How can Google Keep reminders help you with achieving daily
                    tasks?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/t1.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End Of 11 ScEtiOn */}
    </div>
  );
};

export default GoogleTaskSection;
