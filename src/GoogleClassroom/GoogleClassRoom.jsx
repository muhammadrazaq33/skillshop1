import React from "react";
import GoogleClassRoomHero from "./GoogleClassRoomHero";
import GoogleClassRoomSection from "./GoogleClassRoomSection";
import GoogleClassFooter from "./GoogleClassFooter";
import AdditionalResources from "./AdditionalResources";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleClassRoom = () => {
  return (
    <div>
      <GoogleClassRoomHero />
      <GoogleClassRoomSection />
      <GoogleClassFooter />
      <AdditionalResources />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleClassRoom;
