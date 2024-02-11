"use client";
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ThemeProvider } from "@material-tailwind/react";
import { Footer, Navbar } from "../components";
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CourcesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import ContactForm from "./ContactUs";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <CourcesCategories />
      <ExploreCourses />
      <Testimonial />
      {/* <Events /> */}
      <StudentsFeedback />
      <TrustedCompany />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
