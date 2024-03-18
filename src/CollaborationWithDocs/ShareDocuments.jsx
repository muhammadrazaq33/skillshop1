import React from "react";

const ShareDocuments = () => {
  return (
    <div>
      {/* shArer YOUR LIve DOcuMENtS */}
      {/* FIRST seCTIOn */}
      <div className="bg-[#F9F9FA] pt-16 pb-10">
        <div className=" max-w-[960px] w-[92vw] m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-6">
            {/* TeXt */}
            <div className="flex flex-col gap-5">
              <h1 className="text-[30px]">Share your live document</h1>
              <p>
                The biggest difference between other productivity software and
                Google Workspace for Education is the concept of a live
                document. With live document sharing, your students can share
                documents with you and each other for peer feedback or group
                projects.
              </p>
              <p>
                You can share live documents with other colleagues to work
                collaboratively on lesson plans or other classroom resources.
                With a live document, there is only one version and edits are
                made in real-time. When you, or someone you are collaborating
                with, make a change to the document, those changes are all saved
                in the same place for everyone to see. Instead of an offline,
                desktop-based document, you can work together with students or
                colleagues in real-time.
              </p>
            </div>

            {/* ImaGe */}
            <div>
              <img src="./assets/col1.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* IMAge secTion */}
      <div>
        <img src="./assets/Col2.png" alt="" />
      </div>

      {/* Let's look at a scenario */}
      {/* secOnd SEctrIOn */}
      <div>
        <div className="max-w-[960px] w-[92vw] m-auto">
          {/* firsT DIv */}
          <div>
            <h1 className="text-[30px]">Let's look at a scenario</h1>
            <div>
              <article>
                <p>Step one</p>
              </article>
              <article></article>
              <article></article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDocuments;
