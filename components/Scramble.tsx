"use client";
import React from "react";
import { useScramble } from "use-scramble";

const Scramble = ({
  text,
  playOnMount = true,
}: {
  text: string;
  playOnMount?: boolean;
}) => {
  const { ref, replay } = useScramble({
    text: text || "",
    speed: 0.3,
    playOnMount,
  });
  return <span ref={ref}></span>;
};

export default Scramble;
