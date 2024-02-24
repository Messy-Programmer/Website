"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "../components/course-card";
import React from "react";

const COURSES = [
  {
    img: "/image/blogs/webDev.webp",
    tag: "Simple landing pages to complex e-commerce platforms",
    title: "Website Development",
    // label: "from $99",
    desc: "From simple landing pages to complex e-commerce platforms, we design and develop stunning websites that captivate your audience and drive results.",
  },
  {
    img: "/image/blogs/webApplication.webp",
    tag: "Custom web app development services",
    title: "Web App Development",
    // label: "from $199",
    desc: " Harness the power of web technologies with our custom web app development services. We create intuitive and scalable web applications that streamline your business processes.",
  },
  {
    img: "/image/blogs/internalsoftwear2.webp",
    tag: "Custom internal business applications",
    title: "Custom Internal Business Application Development",
    // label: "from $499",
    desc: "Boost efficiency and productivity with custom internal business applications tailored to your unique workflows and requirements.",
  },
  {
    img: "/image/blogs/businessautomation.webp",
    tag: "Bespoke business automation tools",
    title: "Business Automation Tool Development",
    // label: "from $49",
    desc: "Automate repetitive tasks and streamline operations with our bespoke business automation tools. Say goodbye to manual processes and hello to efficiency.",
  },
  {
    img: "/image/blogs/iosApp.webp",
    tag: "IOS mobile applications",
    title: "IOS Mobile App Development",
    // label: "from $99",
    desc: "Elevate your productivity with our intuitive iOS app, designed to streamline your tasks and boost efficiency. Experience boundless entertainment options with our cutting-edge iOS app, offering effortless access to captivating content for endless enjoyment.",
  },
  {
    img: "/image/blogs/androidApp.webp",
    tag: "Android mobile applications",
    title: "Android Mobile App Development",
    // label: "from $99",
    desc: "Reach your customers on the go with our mobile app development services. We build user-friendly and feature-rich mobile applications that enhance your brand presence.",
  },
  {
    img: "/image/blogs/businessWorkflow.webp",
    tag: "Business workflows",
    title: "Business Workflow Design & Implementation",
    // label: "from $299",
    desc: "Optimize your business workflows for maximum efficiency and effectiveness. Our experts analyze your processes and design tailored solutions to drive growth.",
  },
  {
    img: "/image/blogs/techTeam.webp",
    tag: "Skilled professionals to meet your needs",
    title: "Dedicated Tech Team for Your Business",
    // label: "from $299",
    desc: "Scale your development team quickly and cost-effectively with our dedicated tech team services. From project management to coding, we provide skilled professionals to meet your needs.",
  },
  {
    img: "/image/blogs/techConsultant.webp",
    tag: "Choosing the right tech stack with us",
    title: "Tech Consultancy",
    // label: "from $299",
    desc: "Leverage our expertise and industry insights to make informed technology decisions. Whether it's choosing the right tech stack or optimizing your IT infrastructure, we're here to help.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8 pt-28" id="exploreServices">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Explore Services
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Browse through 8+ Tech Services and find the one that fits your needs.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
