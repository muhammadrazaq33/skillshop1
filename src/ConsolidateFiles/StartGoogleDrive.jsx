import React, { useState } from "react";

const StartGoogleDrive = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="md:pt-[5rem] pt-[4rem] pb-[3rem]">
      {/* first section =======> */}
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        <h2 className="text-[30px]">Get started with Google Drive</h2>

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
          <p>
            Imagine being able to find a clean copy of a worksheet or storing a
            year’s worth of lesson plans in your classroom!
          </p>
          <p>
            By transitioning some of your classroom materials from physical
            copies to digital copies, you can stay organized and consolidate
            your documents into one easy location.
          </p>
          <div>
            <p>Google Drive can help make this transition a reality.</p>
            <p>
              With Drive, you can safely store your documents, presentations,
              spreadsheets, pictures, videos, and more.
            </p>
          </div>
          <p>
            Just like folders saved on your computer’s desktop or in your
            classroom filing cabinet, you can create, organize, and save
            information as files and folders using Drive.{" "}
          </p>
          <p>
            Since they’re all saved in the cloud, you can access your files from
            any device that's connected to the internet, as long as you can sign
            into your Google account.{" "}
          </p>
          <p>
            This makes accessing your files and folders easy to do from almost
            anywhere.
          </p>
          <p>
            You will upload files and folders to Drive, organize and color-code
            your documents, and create a shortcut to a file or folder.{" "}
          </p>
          <p>
            Learning how to consolidate and organize your digital materials
            using Drive is a great way to integrate technology into your
            classroom.{" "}
          </p>
          <p>
            Keep in mind, this is just a quick overview of what you can do in
            Drive.{" "}
          </p>
          <p>There is so much more to discover!</p>
        </div>
      </div>

      {/* second section ==========> */}
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5 mt-[4.2rem] md:mt-[5.5rem]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {/* text ====> */}
          <div className="flex flex-col gap-6">
            <p className="text-[16px]">
              With Drive, you can safely store your documents, presentations,
              spreadsheets, pictures, videos, and more. Just like folders saved
              on your computer’s desktop or in your classroom filing cabinet,
              you can create, organize, and save information as files and
              folders using Drive.
            </p>
            <p className="text-[16px]">
              Since they’re all saved in the cloud, you can access your files
              from any device that's connected to the internet, as long as you
              can sign into your Google account. This makes accessing your files
              and folders easy to do from almost anywhere.
            </p>
          </div>

          {/* image =====> */}
          <div>
            <img src="./assets/Google_Drive1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGoogleDrive;
