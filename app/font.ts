import localFont from "next/font/local";

export const cal = localFont({
    src: [
      {
        path: "../public/assets/font/cal-sans/CalSans-SemiBold.woff2",
        weight: "600",
        style: "normal",
      },
     
    ],
    variable: "--font-cal-sans",
  });