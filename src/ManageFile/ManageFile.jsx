import React from "react";
import ManageFileHeader from "./ManageFileHeader";
import ManageSections from "./ManageSections";
import UseGoogleDrive from "./UseGoogleDrive";

const ManageFile = () => {
  return (
    <div>
      <ManageFileHeader />
      <ManageSections />
      <UseGoogleDrive />
    </div>
  );
};

export default ManageFile;
