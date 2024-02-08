"use client";

import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  return (
    <div className="bg-background flex items-center w-full p-4 gap-x-2 justify-between">
      <span className="text-2xl">Insta Track</span>
      <ModeToggle />
    </div>
  );
};
