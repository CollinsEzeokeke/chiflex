"use client";

import React from "react";
import Header from "@/components/landingPageComponent/header";
import Body from "@/components/landingPageComponent/body";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default LandingPage;
