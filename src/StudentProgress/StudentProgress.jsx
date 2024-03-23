import React from "react";
import StudentProgressHero from "./StudentProgressHero";
import StudentProgressSection from "./StudentProgressSection";
import StudentProgressFooter from "./StudentProgressFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const StudentProgress = () => {
  return (
    <div>
      <StudentProgressHero />
      <StudentProgressSection />
      <StudentProgressFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default StudentProgress;
