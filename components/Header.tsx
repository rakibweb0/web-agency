"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./ui/Button";
import Nav from "./ui/Nav";
import MobileNav from "./ui/MobileNav";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "@/public/assets/logo-black.svg";
import Link from "next/link";

const Header = () => {
  const { scrollY } = useScroll();
  const [scrollNumber, setScrollNumber] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollNumber(latest);
  });
  const menus = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Services",
      url: "/#services",
    },
    {
      label: "About",
      url: "/#about",
    },
    {
      label: "Projects",
      url: "/#projects",
    },
    {
      label: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <div className="fixed w-full top-3 lg:top-7 left-0 z-50">
      <Container>
        <motion.div
          initial={{ maxWidth: "1280px", margin: "0 auto" }}
          animate={
            scrollNumber > 50
              ? { maxWidth: "1050px", margin: "0 auto" }
              : { maxWidth: "1280px", margin: "0 auto" }
          }
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`flex justify-between items-center gap-6 bg-white/90 backdrop-blur-3xl rounded-full p-4 lg:p-[22px] ${
            scrollNumber > 50 && " lg:opacity-90 lg:shadow-sm"
          }`}
        >
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <Nav menus={menus} />
          <MobileNav menus={menus} />
          <div className="hidden lg:block">
            <Button label="Book A Call" url="/" icon={false} />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Header;
