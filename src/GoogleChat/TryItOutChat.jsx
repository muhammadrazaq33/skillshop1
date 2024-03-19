import React, { useState } from "react";

const TryItOutChat = () => {
  const [activeModel, setActiveModel] = useState(null);

  const toggleModel = (model) => {
    setActiveModel(model === activeModel ? null : model);
  };
  return (
    <div>
      {/* TRY IT ouT */}
      {/* FiRSt SECTiON */}
      <div className="sm:pb-16 pb-12 shadow-inner-large bg-[#F9F9FA] sm:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <p>Customize your Chat notifications. </p>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[16px] font-bold mb-3">
              Click each button to learn more.
            </p>

            <div className="relative flex justify-center">
              <button
                onClick={() => toggleModel("model1")}
                className="bg-[#dadce099] absolute top-[10.6%] left-[41%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => toggleModel("model2")}
                className="bg-[#dadce099] text-[20px] sm:p-8 hover:bg-[#1A73E8] hover:text-[white] absolute top-[40.5%] left-[68%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <img src="./assets/chat10.png" alt="" />
              {/* mOdelS */}
              {/* FIrSt MOdeL */}
              <div
                className={` ${
                  activeModel === "model1" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <h1 className="text-[25px] text-center">
                    Customize notifications
                  </h1>
                  <p className="text-left">
                    1. Click the three dots in the top right of your chat.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of fiRST mODEl */}
              {/* SecoND MOdeL */}
              <div
                className={` ${
                  activeModel === "model2" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <h1 className="text-[25px] text-center">
                    Mute conversations
                  </h1>
                  <p className="text-left">
                    2. To turn notifications off, click the muted bell.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of SECOND mODEl */}
              {/*eND OF mOdelS */}
            </div>
          </div>
        </div>
      </div>
      {/* end OF FIRsT Section  */}

      {/* SEcoNd sectIoN */}
      {/* Manage/delete your chat history */}
      <div className="sm:pt-20 pt-16 pb-16 bg-[#FFFFFF] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1">Manage/delete your chat history</h1>
          <p>
            You can save all of your conversations in Google Chat as long as
            the&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.google.com/chat/answer/7664687?hl=en"
              className="text-[blue] underline"
            >
              history feature is enabled
            </a>
            . When this feature is enabled, it allows you to scroll up to see
            all messages exchanged in your chat. If you disable the history
            feature, messages will stay in the chat window for 24 hours, but
            then will disappear. The chat history feature is typically turned on
            by default, but you can switch it on or off.&nbsp;
          </p>
          <p>
            When you message a person or group in Google Chat, you can choose to
            save your conversation or have it automatically deleted after 24
            hours.
          </p>
          <div>
            <p>When anyone in the chat turns history on or off:</p>
            <ul className="list-disc pl-12">
              <li>
                A note appears in the message stream that says history was
                turned on or off.
              </li>
              <li>
                A prompt appears in the compose box that says “History is on” or
                “History is off.”
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ENd Of SecOn sEction */}

      {/* ImagE SEcTIOn */}
      <div>
        <img src="./assets/chat11.png" alt="" />
      </div>

      {/* try It out */}
      {/* tHIRd SEction */}
      <div className="sm:pt-20 pt-16 pb-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <p>Manage or delete your chat history.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[3rem]">
            {/* texT */}
            <article className="col-span-1">
              <ol className="list-decimal pl-12">
                <li>Select a conversation from Chat.</li>
                <li>
                  At the top, next to the contact or conversation name, click
                  the drop down arrow to show more options.
                </li>
                <li>
                  Select <strong>Turn on history</strong> or{" "}
                  <strong>Turn off history</strong>.
                </li>
              </ol>
            </article>
            <article className="col-span-2 justify-self-end">
              <img src="./assets/chat12.png" className="" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eNd Of  tHIRd SEction */}
    </div>
  );
};

export default TryItOutChat;
