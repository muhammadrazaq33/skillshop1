import React from "react";
import ConsolidateHero from "./ConsolidateHero";
import ConsolidateSections from "./ConsolidateSections";
import StartGoogleDrive from "./StartGoogleDrive";
import UploadMaterial from "./UploadMaterial";
import TryItOut from "./TryItOut";

const ConsolidateFiles = () => {
  return (
    <div>
      <ConsolidateHero />
      <ConsolidateSections />
      <StartGoogleDrive />
      <UploadMaterial />
      <TryItOut />
    </div>
  );
};

export default ConsolidateFiles;
