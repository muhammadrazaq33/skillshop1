import React from "react";
import GoogleCalenderHero from "./GoogleCalenderHero";
import GoogleCalenderSection from "./GoogleCalenderSection";
import GoogleCalenderFooter from "./GoogleCalenderFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleCalender = () => {
  return (
    <div>
      <GoogleCalenderHero />
      <GoogleCalenderSection />
      <GoogleCalenderFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleCalender;
