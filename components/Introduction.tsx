"use client";
import React from "react";
import Container from "./Container";
import Button from "./ui/Button";
import Image from "next/image";
import Chart from "@/public/assets/Chart.svg";
import { motion } from "framer-motion";

const Introduction = () => {
  const topSide = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    view: {
      y: 0,
      opacity: 1,
      transition: { duration: 3, ease: [0, 0.71, 0.2, 1.01] },
    },
  };
  const rightSide = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    view: {
      x: 0,
      opacity: 1,
      transition: { duration: 3, ease: [0, 0.71, 0.2, 1.01] },
    },
  };
  return (
    <div className="bg-[#EFEFEF] overflow-hidden" id="about">
      <Container className="py-12">
        <motion.div
          variants={topSide}
          initial="initial"
          whileInView="view"
          viewport={{ once: true }}
        >
          <h2 className="text-fontClamp66 text-center font-cal font-semibold mb-6">
            Introduction
          </h2>
          <p className="text-center mb-8 lg:mb-16">
            Transforming your online presence with stunning custom web design
          </p>
        </motion.div>
        <div className="flex flex-col gap-4 items-center lg:mb-20 lg:flex-row ">
          <div className="w-full lg:w-1/2">
            <div>
              <Image src={Chart} alt="Chart" className="mx-auto" />
            </div>
          </div>
          <motion.div
            variants={rightSide}
            initial="initial"
            whileInView="view"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="lg:border-l px-4 lg:pl-6 space-y-6 lg:space-y-12">
              <p>
                Welcome to Web Design Agency Bangladesh, where we merge
                creativity with technology to launch stunning, user-friendly
                websites that propel your business forward. In the heart of
                Bangladesh, our mission is to connect brands with their audience
                through innovative web solutions. Whether you’re a startup, a
                local business, or a growing enterprise, our custom-designed
                websites are crafted to reflect your unique identity and engage
                your target audience effectively. Experience digital excellence
                with us and take the first step towards transforming your online
                presence.
              </p>
              <Button
                label="Grow Your Business"
                url="/"
                icon={true}
                iconColor="#F8F8F8"
                className=" bg-secondary text-[#F8F8F8]"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
