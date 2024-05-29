"use client";
import React from "react";
import Container from "./Container";
import Button from "./ui/Button";
import Image from "next/image";
import RightTik from "@/public/assets/Right Symbole.svg";
import { delay, motion } from "framer-motion";

const Reasons = () => {
  const items = [
    {
      title: "Local Expertise",
      description: "Deep understanding of the Bangladeshi market",
    },
    {
      title: "Custom Solutions",
      description:
        "We believe in uniqueness, crafting sites that tell your brand’s story.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Utilizing the latest tools and technologies to deliver superior websites.",
    },
    {
      title: "Comprehensive Support",
      description:
        "From conception to launch and beyond, we’re with you at every step.",
    },
  ];
  const leftSide = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    view: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", },
    },
  };
  const rightSide = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    view: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: custom },
    }),
  };
  return (
    <div className=" bg-secondary overflow-hidden">
      <div className=" bg-reasons-bg py-12 lg:py-[100px]">
        <Container className="flex flex-col gap-16 lg:gap-[167px] lg:flex-row">
          <motion.div
            variants={leftSide}
            initial="initial"
            whileInView="view"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-7">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4897 12.01L4.49975 12.01"
                  stroke="#F8F8F8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.486 6.02301L19.502 12L13.486 17.977"
                  stroke="#F8F8F8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-fontClamp66 text-offWhite font-cal font-semibold mb-6">
              Why Choose Us!
            </h2>
            <p className="text-[#EFEFEF] mb-8 lg:mb-[82px]">
              At Web Design Agency Bangladesh, we understand the local market
              dynamics and the digital landscape of Bangladesh better than
              anyone. Our approach is client-centric, focusing on creating
              bespoke solutions that drive growth and enhance online presence.
              Here’s why you should partner with us:
            </p>
            <Button
              label="Let’s build something remarkable together."
              url="/"
              icon={false}
              className=" bg-transparent text-offWhite border-offWhite px-2.5"
            />
          </motion.div>
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4 lg:space-y-10">
              {items.map((item, index) => (
                <motion.li
                  custom={(index + 1) * 0.2}
                  variants={rightSide}
                  initial="initial"
                  whileInView="view"
                  viewport={{ once: true }}
                  key={index}
                  className="flex gap-6 border border-[#C7C7C7] bg-[#373737] rounded-full px-4 lg:px-6 py-2"
                >
                  <Image src={RightTik} alt="Right Mark" />
                  <div className="text-offWhite">
                    <h2 className="text-fontClamp18 text-[#F8F8F8] font-semibold mb-1.5 lg:mb-2.5">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#EFEFEF]">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Reasons;
