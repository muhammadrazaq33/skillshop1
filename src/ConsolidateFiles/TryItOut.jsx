import React, { useState } from "react";

const TryItOut = () => {
  const [show, setShow] = useState();

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="pt-[5rem] pb-[4rem] ">
      {/* first section =======> */}
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        <h2 className="text-[30px]">Try it out</h2>
        <p className="text-[16px]">
          Now it's your chance to try organizing your items by customizing the
          color of the folders in Drive.
        </p>

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
        <div className={`flex flex-col gap-4 ${show ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-4 ">
            <p>
              Let’s show you how to organize and color code folders in Google
              Drive.
            </p>
            <ol className="list-decimal pl-12">
              <li>
                Here's an existing folder, to change its name right click the
                folder and click <span className="font-bold">Rename</span>.{" "}
              </li>
              <li>This will allow you to change the name of the folder. </li>
              <li>
                Once you're done, click <span className="font-bold">OK</span>.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-4 ">
            <p>To color code this folder:</p>
            <ol className="list-decimal pl-12">
              <li>
                Right click and select <span className="font-bold">color</span>.{" "}
              </li>
              <li>
                Then select <span className="font-bold"> change color</span> .{" "}
              </li>
              <li>And then choose a color from the palette.</li>
            </ol>
          </div>

          <div className="flex flex-col gap-4 mt-[1.2rem]">
            <p>This will change the color of the folder.</p>
            <ol className="list-decimal pl-12">
              <li>
                To add files to the folder, you can click{" "}
                <span className="font-bold">New</span> and
                <span className="font-bold"> Upload file</span>.
              </li>
              <li>
                Or you can drag and drop the file directly onto the folder
                itself.
              </li>
            </ol>
          </div>

          <p>
            That will upload the file, by opening the folder, you can see the
            file has been uploaded.{" "}
          </p>
          <p>Thank you for watching.</p>
        </div>

        {/* CARD =======> */}
        <div className="max-w-[540px] m-auto bg-[#F9F9FA] px-8 py-5 flex flex-col items-center">
          <img src="./assets/citizen2.png" alt="" />
          <p className="text-center">
            I really like the idea of color-coding. I can organize my folders
            for school, personal, and professional development with different
            colors and find them quickly.
          </p>
        </div>
      </div>

      {/*SECOND SECTION  image ===> */}
      <div className="mt-[6rem]">
        <img src="./assets/drive_items2.png" alt="" />
      </div>

      {/* third section  =====> */}
      <div className="max-w-[960px] w-[92vw] m-auto mt-[5rem]">
        <h1 className="text-[30px]">Reflect on what you have learned</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5 gap-4 mt-[1.6rem]">
          {/* TEXT =======> */}
          <div className="flex flex-col gap-5 col-span-2">
            <p className="text-[16px]">
              Now that you’ve learned how to add and organize content in Google
              Drive, reflect on the ways you can use Drive in your classroom.{" "}
            </p>
            <p className="text-[16px] font-bold">
              Consider the following and make a note of your answers.
            </p>

            <ol className="list-decimal pl-12">
              <li>
                What are one or two ways you might be able to organize existing
                content for your classroom?{" "}
              </li>
              <li>
                What folders might you add to Drive to keep yourself organized?
              </li>
            </ol>
          </div>

          {/* IMAGE =======> */}
          <div>
            <img src="./assets/reflect_learning.png" alt="" />
          </div>
        </div>
      </div>

      {/* FOUR SECTION FOOTER IMAGE ====> */}
      <div className="mt-[2rem]">
        <img src="./assets/clip.png" alt="" />
      </div>
      {/* fourth section footer section =======> */}
      <div className="bg-[#F9F9FA] pt-[2.2rem] pb-[4rem]">
        <div className="max-w-[960px] w-[92vw] m-auto">
          <h1 className="text-[30px] text-[#ea8600]">Knowledge check</h1>

          {/* TABLE  ========> */}
          <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
            <h1 className="text-[20px]">
              Select the TWO ways you can organize your files in Google Drive.
            </h1>

            {/* CHECKS  ========>*/}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5 rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  className="form-checkbox border-2 border-red-400  h-5 w-5"
                  name=""
                  id=""
                />
                <p className="text-[16px]">Selecting a color coding system</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input type="checkbox" name="" className=" h-5 w-5" id="" />
                <p className="text-[16px]">Selecting a color coding system</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input type="checkbox" name="" className=" h-5 w-5" id="" />
                <p className="text-[16px]">Selecting a color coding system</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input type="checkbox" name="" className=" h-5 w-5" id="" />
                <p className="text-[16px]">Selecting a color coding system</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItOut;
