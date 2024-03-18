import React, { useState } from "react";

const HighLightEmail = () => {
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
      {/* Highlight important emails */}
      <div className="bg-[#F9F9FA] md:pt-[5rem] pt-[4rem]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-[30px] mb-3">Highlight important emails</h1>
            <p>
              When sending an urgent or time-sensitive email message to your
              team, you can let recipients know a message needs their attention.
              Just add an appropriate heading to the subject of your message to
              highlight your request.
            </p>
            <p>
              To avoid missing important incoming messages, set up a filter and
              automatically apply a label to your messages. Labels are custom
              tags that help to categorize conversations so you can find and
              organize emails easily.
            </p>
            <p>
              With labels in Gmail, you have the flexibility to categorize your
              emails however you want.
            </p>
          </div>

          <div className="flex flex-col gap-2">
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
          <div className={`flex flex-col gap-3 ${show ? "block" : "hidden"}`}>
            <div>
              <p>Adding labels in Gmail can help you organise your messaged.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLightEmail;
