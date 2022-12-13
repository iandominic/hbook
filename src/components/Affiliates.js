import React from "react";
import faithbook from "../img/faithbook.png";
import dgs from "../img/dgs.png";
import iarticulate from "../img/iarticulate.png";
import trace from "../img/trace.png";
import tracesos from "../img/tracesos.png";
import schoolbook from "../img/schoolbook.png";

export const Affiliates = () => {
  const logos = [schoolbook, iarticulate, trace, tracesos, dgs, faithbook];

  return (
    <div
      className="flex flex-wrap w-full h-full bg-blue-50 mx-auto items-center justify-center md:space-x-20 p-10 space-y-5"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      {logos.map((logo, i) => (
        <img key={i} src={logo} className="w-[150px]" />
      ))}
    </div>
  );
};
