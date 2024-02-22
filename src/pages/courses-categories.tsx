"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

import {
  HeartIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "../components/cources-card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: BuildingOffice2Icon,
    title: "Business Development",
    desc: "Boost efficiency and productivity with custom internal business applications tailored to your unique workflows and requirements.",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: ArrowPathIcon,
    title: "Automation Tool",
    desc: "Automate repetitive tasks and streamline operations with our bespoke business automation tools. Say goodbye to manual processes and hello to efficiency.",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: ArrowTrendingUpIcon,
    title: "Workflow Design",
    desc: "Reach your customers on the go with our mobile app development services. Whether iOS or Android, we build user-friendly and feature-rich mobile applications that enhance your brand presence.",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: HeartIcon,
    title: "Tech Consultancy",
    desc: "Leverage our expertise and industry insights to make informed technology decisions. Whether it's choosing the right tech stack or optimizing your IT infrastructure, we're here to help.",
  },
];

export function CourcesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Services Categories
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Empowering excellence through exceptional services.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              Web App, Business Workflow Design & Implementation, Dedicated Tech
              Team for Your Business
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Website Development
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Leave the tech part on us!
            </Typography>
            <a href="/#contact">
              <Button size="sm" color="white">
                Book Now
              </Button>
            </a>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourcesCategories;
