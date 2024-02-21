"use client";

import React, { useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const url =
    "https://chat.googleapis.com/v1/spaces/AAAA7L5QnB4/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=sn1su9Y62ezUqHupQSoUqZXuql04_BGS3ju0m_fihR0";
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      text: `𝐍𝐚𝐦𝐞: ${formvalue.name}\n𝐄𝐦𝐚𝐢𝐥: ${formvalue.email}\n𝐍𝐮𝐦𝐛𝐞𝐫: ${formvalue.number}\n𝐌𝐞𝐬𝐬𝐚𝐠𝐞: ${formvalue.message}`,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(() => {
        setSubmitted(true);
        setFormvalue({
          name: "",
          email: "",
          message: "",
          number: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="px-8 pt-20" id="contact">
      <div className="container mx-auto mb-5 md:mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Did you just said TECH!
        </Typography>
        <Typography variant="lead" className="mx-auto !text-gray-500">
          Ready to take your business to the next level? Contact us today to
          discuss your project requirements and get started!
        </Typography>
      </div>
      <div className="container mx-auto">
        <Card shadow={true} className="border border-gray/50">
          <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-2 md:gap-28">
            <div className="w-full mt-8 md:mt-0 md:px-10 h-full p-5">
              <form action="#" onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Full Name"
                    name="name"
                    value={formvalue.name}
                    onChange={handleInput}
                    placeholder="eg. Ayush Paul"
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Phone Number"
                    name="number"
                    value={formvalue.number}
                    onChange={handleInput}
                    placeholder="eg. 989 492 9764"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  value={formvalue.email}
                  onChange={handleInput}
                  placeholder="eg. ayush@email.com"
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  value={formvalue.message}
                  onChange={handleInput}
                  required
                  containerProps={{
                    className: "!min-w-full mb-10 md:mb-28",
                  }}
                />
                {!submitted ? (
                  <div className="w-full flex justify-end">
                    <Button
                      loading={submitting}
                      className="w-full md:w-fit"
                      type="submit"
                      color="gray"
                      size="md"
                    >
                      Send message
                    </Button>
                  </div>
                ) : (
                  <h3>
                    Thank you for submitting, We will get back to you soon.
                  </h3>
                )}
              </form>
            </div>
            <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              {/* <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="tel:+91 86176 38628">+91 86176 38628</a>
                </Typography>
              </div> */}
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="mailto:contact@messyprogrammer.in">
                    contact@messyprogrammer.in
                  </a>
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <HomeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  West Bengal, India
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <div id="Linkedin" className="w-8">
                  <a
                    href="https://www.linkedin.com/company/messyprogrammer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28.87 28.87"
                      id="linkedin"
                    >
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <rect
                            width="28.87"
                            height="28.87"
                            fill="#0b86ca"
                            rx="6.48"
                            ry="6.48"
                          ></rect>
                          <path
                            fill="#fff"
                            d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div id="Instagram" className="w-8">
                  <a
                    href="https://www.instagram.com/messyprogrammer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28.87 28.87"
                      id="instagram"
                    >
                      <defs>
                        <linearGradient
                          id="a"
                          x1="-1.84"
                          x2="32.16"
                          y1="30.47"
                          y2="-3.03"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fed576"></stop>
                          <stop offset=".26" stop-color="#f47133"></stop>
                          <stop offset=".61" stop-color="#bc3081"></stop>
                          <stop offset="1" stop-color="#4c63d2"></stop>
                        </linearGradient>
                      </defs>
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <rect
                            width="28.87"
                            height="28.87"
                            fill="url(#a)"
                            rx="6.48"
                            ry="6.48"
                          ></rect>
                          <g data-name="<Group>">
                            <path
                              fill="#fff"
                              d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                              data-name="<Compound Path>"
                            ></path>
                            <path
                              fill="#fff"
                              d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                              data-name="<Compound Path>"
                            ></path>
                            <path
                              fill="#fff"
                              d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                              data-name="<Path>"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div id="facebook" className="w-8">
                  <a
                    href="https://www.facebook.com/profile.php?id=100092181036763"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      id="facebook"
                    >
                      <path
                        fill="#1976D2"
                        d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                      ></path>
                      <path
                        fill="#FAFAFA"
                        fill-rule="evenodd"
                        d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div id="youtube" className="w-8">
                  <a
                    href="https://www.youtube.com/@messyprogrammer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28.87 28.87"
                      id="youtube"
                    >
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <rect
                            width="28.87"
                            height="28.87"
                            fill="#fd3832"
                            rx="6.48"
                            ry="6.48"
                          ></rect>
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M8 19.77a1.88 1.88 0 0 1-1.24-1.21c-.54-1.48-.7-7.66.34-8.88A2 2 0 0 1 8.46 9c2.79-.3 11.41-.26 12.4.1a1.94 1.94 0 0 1 1.22 1.17c.59 1.53.61 7.09-.08 8.56a1.89 1.89 0 0 1-.87.88c-1.04.52-11.75.51-13.13.06zm4.43-2.9l5-2.6-5-2.62z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default ContactForm;
