import React from "react";
import WorkspaceHeader from "./WorkspaceHeader";
import Sections from "./Sections";
import VideoSection from "./VideoSection";
import StartWithTechnology from "./StartWithTechnology";
import SuccessStories from "./SuccessStories";
import CollaborationTools from "./CollaborationTools";
import Skills from "./Skills";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleWorkSpace = () => {
  return (
    <div>
      <WorkspaceHeader />
      <Sections />
      <VideoSection />
      <StartWithTechnology />
      <SuccessStories />
      {/* <CollaborationTools /> */}
      <Skills />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleWorkSpace;
