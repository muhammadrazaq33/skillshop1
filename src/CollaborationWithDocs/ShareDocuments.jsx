import React, { useState } from "react";

const ShareDocuments = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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
      <div className="sm:pt-16 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-10">
          {/* firsT DIv */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px]">Let's look at a scenario</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
              <article className="bg-[#F9F9FA] py-4 px-4 rounded-sm">
                <p className="font-bold">Step one</p>
                <p>Read the problem</p>
              </article>
              <article className="bg-[#F9F9FA] py-4 px-4 rounded-sm">
                <p className="font-bold">Step two</p>
                <p>Make a note of your solution in a Google Doc</p>
              </article>
              <article className="bg-[#F9F9FA] py-4 px-4 rounded-sm">
                <p className="font-bold">Step three</p>
                <p>Reveal our suggested solution</p>
              </article>
            </div>
          </div>
          {/* END oF FirSt Div */}

          {/* bUTTONs and pArAGrAPhs ===>*/}
          <div className=" pb-16">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
              {/* useSTATE */}
              {/* second div */}
              <div className="flex flex-col gap-3">
                <p className="font-bold">Click each tab to learn more.</p>
                {/* buttons ===> */}
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
                  <button
                    className={`btn ${
                      activeIndex === 0 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(0)}
                  >
                    Problem
                  </button>
                  <button
                    className={`btn ${
                      activeIndex === 1 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(1)}
                  >
                    What would you do?
                  </button>
                  <button
                    className={`btn ${
                      activeIndex === 2 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(2)}
                  >
                    Our solution
                  </button>
                </div>
                {/* end of buttons */}

                {/* paragraph  */}
                <div className="mt-4">
                  <div
                    className={`${
                      activeIndex === 0 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
                  >
                    {/* imaGE */}
                    <div className="col-span-1">
                      <img src="./assets/g_1.png" alt="" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                      <p>
                        A language arts teacher created a fiction writing
                        project outline in Microsoft Word that’s been used for
                        many years, and they would like to revise it with
                        colleagues. The teacher would like to share the project
                        outline with colleagues to get their feedback, and then
                        work collaboratively to finalize it.{" "}
                      </p>
                      <p>
                        In the past, the teacher has emailed documents to
                        colleagues, who have downloaded the documents, made
                        changes, and emailed the new versions back. By the time
                        everyone in the group responded, this process created
                        5-6 different versions of the same document. The teacher
                        also had to print individual copies for each person
                        attending meetings.{" "}
                      </p>
                      <p>
                        This year, the teacher decided to use Google tools to
                        collaborate with colleagues to update the project
                        outline.
                      </p>
                    </div>
                  </div>

                  {/* seConD pArAgrAPh */}
                  <div
                    className={`${
                      activeIndex === 1 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
                  >
                    {/* imaGE */}
                    <div className="col-span-1">
                      <img src="./assets/g_2.png" alt="" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                      <p>
                        Take a moment to consider what you would do in this
                        scenario. Note your answer down in a Google Doc and then
                        reveal our suggested solution.
                      </p>
                    </div>
                  </div>

                  {/* thIRD paRagRApH */}
                  <div
                    className={`${
                      activeIndex === 2 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
                  >
                    {/* imaGE */}
                    <div className="col-span-1">
                      <img src="./assets/g_3.png" alt="" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                      <p>
                        The language arts teacher should first upload the Word
                        document to Google Drive. The teacher has already
                        changed the upload settings so that any Word document
                        uploaded will convert automatically to a document in
                        Google Docs.
                      </p>
                      <p>
                        After uploading the document, the teacher is ready to
                        ask colleagues for feedback. First, the teacher can
                        share the document and then decide which type of access
                        to give colleagues. Giving colleagues Commenter access
                        will ensure that everyone can share their ideas by
                        allowing them to select and highlight text within the
                        document, then insert comments for review or make
                        suggestions directly in the document. The teacher can
                        then review the comments and either accept or reject
                        suggestions from collaborators.
                      </p>
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
    </div>
  );
};

export default ShareDocuments;
