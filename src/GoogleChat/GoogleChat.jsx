import React from "react";
import GoogleChatHero from "./GoogleChatHero";
import GoogleChatSection from "./GoogleChatSection";
import TryItOutChat from "./TryItOutChat";
import GoogleChatFooter from "./GoogleChatFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleChat = () => {
  return (
    <div>
      <GoogleChatHero />
      <GoogleChatSection />
      <TryItOutChat />
      <GoogleChatFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleChat;
