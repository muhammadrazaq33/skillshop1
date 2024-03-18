import React from "react";
import OrganizeHero from "./OrganizeHero";
import OrganizeSections from "./OrganizeSections";
import PrioritizeEmail from "./PrioritizeEmail";
import HighLightEmail from "./HighLightEmail";
import OrganizeFooter from "./OrganizeFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const OrganizeSearchGmail = () => {
  return (
    <div>
      <OrganizeHero />
      <OrganizeSections />
      <PrioritizeEmail />
      <HighLightEmail />
      <OrganizeFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default OrganizeSearchGmail;
