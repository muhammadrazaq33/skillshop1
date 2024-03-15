import React from "react";

const VideoSection = () => {
  return (
    <div className="mt-[4.5rem]">
      <div className="max-w-[960px] w-[92vw] m-auto">
        {/* text =====> */}
        <div className="flex flex-col gap-3 text-[16px]">
          <p>
            As an educator, you are extremely skilled at balancing your teaching
            and learning workload.
          </p>
          <p>
            But sometimes new priorities are added and things can get pretty
            hectic. It’s important that the educational tools you use every day
            can support you.
          </p>
          <p>
            Google Workspace for Education Fundamentals helps simplify tasks,
            save time, and keep you in balance.
          </p>
          <p>
            With a single sign-on, educators, students, guardians, and
            administrators can access an entire suite of easy-to-use tools that
            provide a flexible and secure foundation for learning,
            collaboration, and communication.
          </p>
          <p>
            Throughout this course, you’ll learn how to make the most of these
            tools.
          </p>
          <ol className="pl-10">
            <li>1. Reducing the time you spend on administrative tasks.</li>
            <li>2. Streamlining instruction.</li>
            <li>3. Fostering collaboration.</li>
            <li>4. And enabling richer feedback for students along the way.</li>
          </ol>
          <p>
            Google Workspace for Education gives you the tools you need to stay
            balanced so you can focus on the things that matter.
          </p>
        </div>

        {/* video ==========> */}
        <div>
          <p>hello g</p>
          {/* video    ===========> */}
          <div class="html5-video-container" data-layer="0">
            <video
              tabindex="-1"
              className="video-stream html5-main-video"
              webkit-playsinline=""
              playsinline=""
              controlslist="nodownload"
              style={{
                width: "564px",
                height: "317px",
                left: "0px",
                top: "0px",
              }}
              src="blob:https://www.youtube.com/c206e3db-b266-4ac4-879c-02cf4c1cd5fb"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
