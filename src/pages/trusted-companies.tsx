"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const COMPANIES = [
  "TridentLogo.png",
  "AKAY-LOGO.webp",
  "TheStreamers.png",
  "Dps.png",
  "SaaSiest.png",
  "DreamDesignLabs.png",
];
const LINKS = [
  "https://tridentinfosol.com/",
  "https://akay.ie/",
  "https://streamers.at/",
  "https://www.dpsjhansi.in/",
  "https://saasiestjobs.com/",
  "https://dreamdesignlabs.com/",
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            AWESOME COMMUNITY
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12">
            Trusted by over 100+ Companies
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((logo, key) => (
            <a
              key={key}
              href={LINKS[key]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={768}
                height={768}
                key={key}
                src={`/logos/${logo}`}
                alt={logo}
                className="w-40 grayscale opacity-75"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
