import React from "react";
import { Typography, Button, Input } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img src="/image/OnlyLogo.svg" alt="logo-ct" className="w-16" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="/PrivacyPolicy"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Privacy Policy
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/TermsandConditions"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Terms & Conditions
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/CopyrightNotice"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Copyright Notice
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; {CURRENT_YEAR} Messy Programmer. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
