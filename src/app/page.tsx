import React from "react";
import Pagecomponent from "./components/Pagecomponent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coqurate Box",
  description:
    "Coqurate Box is a corporate and personalized gifting solution company that believes in the power of thoughtful gifts to build connections and inspire loyalty.",
};

const Home: React.FC = () => {
  return (
    <>
      <Pagecomponent />
    </>
  );
};

export default Home;
