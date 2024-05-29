"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "@/public/assets/project-1.png";
import { AspectRatio } from "./ui/aspect-ratio";
import { motion } from "framer-motion";

type PortfolioCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  index: number;
};

const fadeIn = {
  initial: {
    opacity: 0,
  },
  view: (custom: any) => ({
    opacity: 1,
    transition: { duration: 1, ease: "easeIn",  delay: custom },
  }),
};

const PortfolioCard = ({
  title,
  description,
  image,
  url,
  index,
}: PortfolioCardProps) => {
  console.log(index);
  return (
    <motion.div
      custom={(index + 1) * 0.2}
      variants={fadeIn}
      initial="initial"
      whileInView="view"
      viewport={{ once: true }}
      className="group rounded-[35px] bg-[#EFEFEF] border border-[#C7C7C7] p-4 lg:p-6 transition-all duration-300 hover:bg-secondary hover:text-offWhite"
    >
      <Link href={url || "/"} target="_blank">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h2 className="w-[70%] text-[#2E2E2E] text-fontClamp18 font-bold transition-all duration-300 group-hover:text-offWhite">
            | {title}
          </h2>
          <div className="w-[30%] lg:w-1/4 px-3 lg:px-[18px] py-2 rounded-full bg-secondary font-semibold text-center text-offWhite text-xs lg:text-base transition-all duration-300 group-hover:bg-primary group-hover:text-text-color">
            Case Study
          </div>
        </div>
        <p className="mb-6">{description}</p>
        <AspectRatio ratio={6 / 5}>
          <Image
            src={image || Project1}
            alt="Project"
            className="rounded-[24px] object-cover"
            fill
            sizes="433px"
          />
        </AspectRatio>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
