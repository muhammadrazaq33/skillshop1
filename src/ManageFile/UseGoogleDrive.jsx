import React from "react";

const UseGoogleDrive = () => {
  return (
    <div>
      <div className="max-w-[960px] w-[92vw] m-auto mt-[5rem]">
        <h1 className="text-[30px]">Use Google Drive to create a document</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-10 mt-[1.6rem]">
          {/* TEXT =======> */}
          <div className="flex flex-col gap-5">
            <p className="text-[16px]">
              Now that you’ve learned how to consolidate and organize your files
              and folders using Google Drive, learn how to use Drive to create,
              update, and share documents.{" "}
            </p>
            <p>
              You can create a new document, spreadsheet, presentation, form, or
              drawing by clicking New in Drive and then clicking the type of
              file you wish to create. Give your new file a name, and it is
              automatically saved in Drive.
            </p>
          </div>

          {/* IMAGE =======> */}
          <div>
            <img src="./assets/Drive_img.png" className="w-full" alt="" />
          </div>
        </div>
      </div>

      {/* SEcONd SECTiON */}
      <div className="max-w-[960px] w-[92vw] m-auto mt-[4rem]">
        <p className="text-[16px] font-bold mb-3">
          Click each button to learn more.
        </p>

        {/* <div className="bg-[url('./assets/Drive_imgFull.png')] h-full w-[960px]"></div> */}
        <div className="relative">
          <p className="bg-[#dadce099] absolute top-[13%] w-[30px] h-[30px] rounded-[50%] grid place-content-center">
            1
          </p>
          <p className="bg-[#dadce099] absolute top-[50%] w-[30px] h-[30px] rounded-[50%] grid place-content-center">
            2
          </p>
          <img src="./assets/Drive_imgFull.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UseGoogleDrive;
