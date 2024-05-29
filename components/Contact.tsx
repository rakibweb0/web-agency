import React from "react";
import Container from "./Container";
import Button from "./ui/Button";

const Contact = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-12 items-center my-20 lg:my-[150px] lg:rounded-[32px] bg-[#EFEFEF] lg:bg-secondary px-8 xl:px-9 py-14">
      <div
        className="w-full lg:w-[70%] text-text-color lg:text-offWhite"
        id="contact"
      >
        <h2 className="text-fontClamp66 font-cal font-semibold mb-8 lg:leading-[79px]">
          Do You Have Any Question Feel Free To Ask.
        </h2>
        <p>Unleash Your Creativity: Ask Us Anything About Website Design!</p>
      </div>
      <div className="w-full lg:w-[30%] bg-offWhite p-6 rounded-[32px]">
        <h2 className=" text-fontClamp32 font-semibold text-center mb-6">
          hello@website.com
        </h2>
        <Button
          label="Book A Call"
          url="/"
          className="w-fit mx-auto block text-center"
        />
      </div>
    </Container>
  );
};

export default Contact;
