import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  const reviews = [
    {
      image: "/assets/people.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people1.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people2.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people3.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people1.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people3.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
    {
      image: "/assets/people2.png",
      rating: "3.6",
      description: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    },
  ];
  return (
    <Marquee pauseOnHover >
      <div
        className="grid grid-cols-5 gap-6 px-6
      [&>*:nth-child(2)]:col-start-3 
      [&>*:nth-child(3)]:col-start-5 
      [&>*:nth-child(4)]:col-start-2
      [&>*:nth-child(5)]:col-start-4
      [&>*:nth-child(8)]:col-start-3
      [&>*:nth-child(9)]:col-start-4
      "
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="max-w-[400px] mx-auto flex items-center gap-2.5 border border-[#C7C7C7] bg-offWhite rounded-full p-4"
          >
            <Image src={review.image} alt="people" width={100} height={100} />
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Image src="/assets/rating.png" alt="rating" width={92} height={23} />
                <p>{review.rating}</p>
              </div>
              <p>{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeSlider;
