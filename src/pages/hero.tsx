"use client";

import { Button, Typography, Card } from "@material-tailwind/react";
import React from "react";
import heroImage from "../../public/image/image8.png";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <img
        width={1200}
        height={1200}
        src={heroImage}
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[820px] h-[680px] rounded-bl-[100px] mt-16 object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="mt-96 sm:mt-56 md:mt-44 col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-xl"
            >
              Where Inovation Meets Your Business
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              Messy Programmer is your trusted partner for top-notch IT services
              at affordable prices. With a focus on quality and affordability,
              we specialize in providing a wide range of IT solutions tailored
              to meet your business needs.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="gray">view all courses</Button>
              <Button color="gray" variant="outlined">
                see pricing
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <img
                width={144}
                height={144}
                className=" ml-5 w-24 grayscale opacity-60 justify-center"
                src="/logos/dps.png"
                alt="dps"
              />
              <img
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/TheStreamers.png"
                alt="TheStreamers"
              />
              <img
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/PolicyMakr.svg"
                alt="PolicyMakr"
              />
              <img
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/Logo_Legal_Intake_Pros.webp"
                alt="Legal_Intake_Pros"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
