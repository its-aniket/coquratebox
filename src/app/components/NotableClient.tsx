import React from "react";

const NotableClient = () => {
  return (
    <div>
      <h2 className="p-6 text-[20px] text-black text-center lg:text-[40px]">
        Notable Clients
      </h2>
      <div className="w-full h-full flex items-center justify-center ">
        <img loading="lazy" className="lg:w-[1200px] h-auto" src="./assets/notable_client.webp" alt="Previous clients" />
      </div>
    </div>
  );
};

export default NotableClient;
