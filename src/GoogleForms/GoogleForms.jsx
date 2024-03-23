import React from "react";
import GoogleFormsHero from "./GoogleFormsHero";
import GoogleFormSection from "./GoogleFormSection";
import GoogleFormFooter from "./GoogleFormFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleForms = () => {
  return (
    <div>
      <GoogleFormsHero />
      <GoogleFormSection />
      <GoogleFormFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleForms;
