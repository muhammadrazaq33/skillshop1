import React from "react";
import ManageFileHeader from "./ManageFileHeader";
import ManageSections from "./ManageSections";
import UseGoogleDrive from "./UseGoogleDrive";
import ManageVideoSectIon from "./ManageVideoSectIon";

const ManageFile = () => {
  return (
    <div>
      <ManageFileHeader />
      <ManageSections />
      <UseGoogleDrive />
      <ManageVideoSectIon />
    </div>
  );
};

export default ManageFile;
