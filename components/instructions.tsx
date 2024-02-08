import React from "react";
import { InstructionCard } from "@/components/instruction-card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface StepInterface {
  num: number;
  title: React.JSX.Element | string;
}

const steps: StepInterface[] = [
  {
    num: 1,
    title: (
      <div>
        Navigate to{" "}
        <Link
          href="https://accountscenter.instagram.com/info_and_permissions/"
          className="underline text-blue"
        >
          Account Center
        </Link>
      </div>
    ),
  },
  {
    num: 2,
    title: 'Click "Download your information".',
  },
  {
    num: 3,
    title: 'Click "Request a download"',
  },
  {
    num: 4,
    title: 'Select your Account and Click "Next"',
  },
  {
    num: 5,
    title: 'Click "Select types of information".',
  },
  {
    num: 6,
    title: 'Click the "Followers and following" field and Click "Next"',
  },
  {
    num: 7,
    title: 'Select "All time" in Date Range field',
  },
  {
    num: 8,
    title: "Select JSON in Format field",
  },
  {
    num: 9,
    title: 'Click "Submit request"',
  },
  {
    num: 10,
    title: 'Wait until finish Download request and Click "Download"',
  },
  {
    num: 11,
    title: "Unzip the Downloaded zip file",
  },
  {
    num: 12,
    title: "Upload JSON files to relevant input fields",
  },
];

export const Instructions = () => {
  return (
    <section
      id="instructions"
      className="py-6 flex flex-col justify-center items-center"
    >
      <h2 className="text-center lg:text-4xl text-3xl pt-6 pb-10">
        Instructions
      </h2>

      <Carousel className="md:w-[80vw] w-[60vw]">
        <CarouselContent className="">
          {steps.map((element: StepInterface) => (
            <CarouselItem
              key={element.num}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <InstructionCard
                  num={element.num}
                  title={element.title}
                  key={element.num}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
