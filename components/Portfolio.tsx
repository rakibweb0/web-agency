"use client";
import Container from "./Container";
import PortfolioCard from "./PortfolioCard";
import Scramble from "./Scramble";
import Button from "./ui/Button";

import { useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const Projects = [
    {
      title: "Novo Energy LTD",
      description:
        "Developed eCommerce website, provided training & uploaded their mobile app to Google Play.",
      image: "/assets/project-1.png",
      url: "/",
    },
    {
      title: "Behno Shopify eCommerce store",
      description: "eCommerce website using Shopify",
      image: "/assets/project-1.png",
      url: "/",
    },
    {
      title: "Novo Energy LTD",
      description:
        "Developed eCommerce website, provided training & uploaded their mobile app to Google Play.",
      image: "/assets/project-1.png",
      url: "/",
    },
    {
      title: "Roots Bangla - Fruits & Vegetables",
      description: "How we helped a company boost sales with a modern website",
      image: "/assets/project-1.png",
      url: "/",
    },
  ];

  return (
    <div ref={ref} id="projects">
      <Container className="my-20 lg:my-[150px]">
        <h2 className="text-fontClamp66 text-center font-cal font-semibold mb-6">
          Take a look {isInView && <Scramble text="at our work" />}
        </h2>
        <p className="text-center ">A small selection of our projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 lg:my-20">
          {/* Card */}
          {Projects.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>
        <div className="w-fit mx-auto">
          <Button label="Book A Call" url="/" icon={true} />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
