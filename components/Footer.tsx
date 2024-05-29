import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo-white.svg";

const Footer = () => {
  const FooterMenu = [
    {
      title: "Company",
      menus: [
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
      ],
    },
    {
      title: "Services",
      menus: [
        {
          label: "Custom Website Design",
          url: "/",
        },
        {
          label: "E-commerce Solutions",
          url: "/",
        },
        {
          label: "Responsive Web Design",
          url: "/",
        },
        {
          label: "SEO and Digital Marketing",
          url: "/",
        },
      ],
    },
  ];
  return (
    <div className=" bg-secondary">
      <Container className="flex flex-col items-center gap-10 lg:flex-row py-10 lg:pb-0">
        <div className="w-full lg:w-1/4 flex lg:justify-center items-center">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="w-full lg:w-3/4 space-y-10 lg:border-l border-[#535353] p-0 lg:p-16 text-offWhite">
          <div className="flex flex-col justify-between gap-8 lg:gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2 flex gap-12">
              {FooterMenu.map((item, index) => (
                <div key={index}>
                  <h3 className="text-fontClamp18 font-semibold mb-6">
                    {item.title}
                  </h3>
                  <ul className=" space-y-3 *:text-sm *:text-[#A6A6A6] *:transition-all *:duration-300 hover:*:text-offWhite">
                    {item.menus.map((menu, index) => (
                      <li key={index}>
                        <Link href={menu.url}>{menu.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-fontClamp18 font-semibold ">Agency</h3>
              <p className="text-sm max-w-[330px]">
                Feel free to reach out if you want to collaborate with us, or
                simply chat.
              </p>
              <input
                className="w-full md:max-w-[400px] px-6 py-3 rounded-[8px] text-text-color"
                type="text"
                placeholder="Email Here..."
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:gap-16 lg:flex-row">
            <div className="w-1/2">
              <h3 className="text-fontClamp18 font-semibold mb-6">Location</h3>
              <p className="text-sm text-[#A6A6A6]">
                House No-42/2, Road No-7, Block-B, Banasree, Rampura, Dhaka-1219
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-fontClamp18 font-semibold mb-6">Follow Us</h3>
              <ul className="flex items-center gap-[18px]">
                {/* <li>
                  <Link href="/">
                    <Image
                      src="/assets/dribble.svg"
                      alt="fb"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li> */}
                <li>
                  <Link href="https://twitter.com/therundigital">
                    <Image
                      src="/assets/Twitter.svg"
                      alt="fb"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/therundigital">
                    <Image
                      src="/assets/facebook.svg"
                      alt="fb"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-[#535353]">
        <p className="text-center text-[#A6A6A6] text-sm py-6">
          copyright ©2024,{" "}
          <a
            href="https://www.therundigital.com/"
            target="_blank"
            className=" underline hover:no-underline"
          >
            The Run Digital
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
