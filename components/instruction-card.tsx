import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export const InstructionCard = ({
  num,
  title,
}: {
  num: number;
  title: React.JSX.Element | string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Step {num}</CardDescription>
        <CardTitle className="font-light text-xl">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};
