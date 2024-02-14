"use client";
import React from "react";
import FeedbackCard from "../components/feedback-card";
import { Carousel, Typography } from "@material-tailwind/react";
import { CarouselStylesType } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Almost 10 projects with Suman and he always delivered before the due date!",
    client: "hollyopk",
    title: "Brazil",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6c381f7f5636287b7446d72d9ba29fe9-1547489298164/f57638ef-dc76-48a2-9a3a-31c2f5a2bcec.jpg",
  },
  {
    feedback:
      "Suman was a game-changer! His ingenious solution, quick implementation, and creative thinking exceeded my expectations. I highly recommend him for any programming needs.",
    client: "pyramking",
    title: " United States",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/14e6163c4b1e57da59311ba1a21afaf2-1576343010258/0dc44265-d60d-4953-aae3-c713ca6feac9.jpeg",
  },
  {
    feedback:
      "Really pleased to work with Suman. This is the second project and I'm really happy with the work delivered. Fast, with knowledge about coding, and proactive. Will count with you whenever we can. Thanks for all the work done!",
    client: "bubucela",
    title: "Spain",
    img: "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
  },
  {
    feedback:
      "Very cooperative, quick in response and quick in delivery. Fast and high quality work. Do not look anywhere else!",
    client: "felix_merkle",
    title: "Germany",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/56cd41cd7ad010d1001ec7a72e1841af-1688680989286/66389f78-58ed-4794-8026-6202995953c6.png",
  },
  {
    feedback:
      "It was a pleasure working with Suman. He gets straight to the point and gives you the correct expectations step by step. He is more skilled than most of the other devs I've spoken with up to this point. He was able to handle the sophisticated project I asked to completion when other devs weren't. I highly recommend him!",
    client: "lanmanhw",
    title: "United States",
    img: "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
  },
  {
    feedback:
      "As always, Suman was reactive, quick to understand and adapt to our needs and also quick to deliver.",
    client: "policymakr",
    title: "United States",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/932ac591a7ac44dbcb8f24d0be3b3c5b-1463021011677931109.1429281/BD29C452-14A5-4B18-A07D-E11AD82B0F84",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Our Clients Are Saying
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Our mission is to empower companies with the Tech!
          </Typography>
        </div>

        {/* <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3"> */}
        <div className="flex flex-col items-center justify-center align-middle w-full">
          <Carousel
            className="rounded-xl"
            autoplay={true}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-8 bg-light-green-700"
                        : "w-4 bg-light-green-700/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {FEEDBACKS.map((props, key) => (
              <FeedbackCard key={key} {...props} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default StudentsFeedback;
