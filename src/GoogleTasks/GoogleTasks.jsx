import React from "react";
import GoogleTaskHero from "./GoogleTaskHero";
import GoogleTaskSection from "./GoogleTaskSection";
import GoogleTaskFooter from "./GoogleTaskFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleTasks = () => {
  return (
    <div>
      <GoogleTaskHero />
      <GoogleTaskSection />
      <GoogleTaskFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleTasks;
