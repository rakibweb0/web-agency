'use client'
import React, { useRef } from "react";
import MarqueeSlider from "./ui/MarqueeSlider";
import { useInView } from "framer-motion";
import Scramble from "./Scramble";

const Review = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  return (
    <div ref={ref} className="bg-[#EFEFEF]">
      <div className=" bg-review-bg py-12">
        <h2 className="text-fontClamp66 text-center font-cal font-semibold mb-16">
          What  {" "}
          {
            isInView && <Scramble text="People To Say"/>
          }
        </h2>
        <div>
            <MarqueeSlider/>
        </div>
      </div>
    </div>
  );
};

export default Review;
