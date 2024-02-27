import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import {
  DocumentTextIcon,
  StarIcon,
  PhoneArrowDownLeftIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import StatsCard from "../components/stats-card";

const STATS = [
  {
    icon: DocumentTextIcon,
    count: "200+",
    title: "Projects",
  },
  {
    icon: StarIcon,
    count: "95+",
    title: "Reviews",
  },
  {
    icon: BoltIcon,
    count: "8+",
    title: "Services",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

const OutImpressive = () => {
  return (
    <section className="px-8  pt-60 mt-72 md:mt-52 ">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="col-span-2 w-full text-center lg:text-left">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Explore Our Impressive Stats
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                We take pride in our commitment to excellence and our dedication
                to our success.
              </Typography>
              <div className="grid mt-8">
                <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
                  {STATS.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[600px] items-center  justify-center col-span-2 hidden lg:block pl-28">
              <img
                width={568}
                height={268}
                src="/image/characters/pose.webp"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default OutImpressive;
