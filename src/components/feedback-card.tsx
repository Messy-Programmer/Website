import React from "react";

import {
  Typography,
  Card,
  CardBody,
  Avatar,
  Rating,
} from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
  reviewLink: string;
}

export function FeedbackCard({
  img,
  feedback,
  client,
  title,
  reviewLink,
}: FeedbackCardProps) {
  return (
    <a href={reviewLink} target="_blank" rel="noopener noreferrer">
      <Card shadow={false} className="items-center text-left">
        <CardBody className="flex flex-col items-center">
          <Avatar src={img} className="mb-2" alt={client} size="xl" />
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="mt-1 mb-5 block font-normal"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="mb-6 font-normal text-center text-gray-500"
          >
            &quot;{feedback}&quot;
          </Typography>
          <Rating value={5} readonly />
        </CardBody>
      </Card>
    </a>
  );
}
export default FeedbackCard;
