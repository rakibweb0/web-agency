import Image from "next/image";
import React from "react";
import Network from "@/public/assets/network.svg";
import Chan from "@/public/assets/chan.svg";
import Vision from "@/public/assets/vision.svg";
import Penta from "@/public/assets/penta.svg";
import Container from "./Container";
import Marquee from "react-fast-marquee";

const PartnerLogo = () => {
  return (
    <Container className="my-20 lg:my-[150px]">
      <div className="w-full mx-auto flex justify-around  border rounded-full px-6 py-4  lg:py-6 lg:w-3/4">
        <Marquee gradient gradientColor="#F8F8F8" gradientWidth={50}>
          <div>
            <Image src={Network} alt="partner-logo" />
          </div>
          <div>
            <Image src={Chan} alt="partner-logo" />
          </div>
          <div>
            <Image src={Vision} alt="partner-logo" />
          </div>
          <div>
            <Image src={Penta} alt="partner-logo" />
          </div>
          <div>
            <Image src={Penta} alt="partner-logo" />
          </div>
          <div>
            <Image src={Penta} alt="partner-logo" />
          </div>
          <div>
            <Image src={Penta} alt="partner-logo" />
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default PartnerLogo;
