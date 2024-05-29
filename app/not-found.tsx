import Image from "next/image";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center h-screen">
      <div className="flex flex-col items-center my-auto w-fit">
        <Image src='/assets/notfound.svg' alt="404" height={600} width={700} />
        <h2 className="text-xl font-normal text-center lg:text-3xl font-radial">
          Oppps... 404 - Page Not Found
        </h2>
        
      </div>
    </div>
  );
};

export default Custom404;
