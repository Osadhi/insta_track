import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

interface ScrollBoxInterface {
  list: any[];
  title: string;
}

export const ScrollBox = ({ list, title }: ScrollBoxInterface) => {
  return (
    <ScrollArea className="w-full h-[50vh] rounded-md border">
      <div className="p-4 space-y-4">
        {list.length == 0 ? (
          <p className="text-center">No {title}</p>
        ) : (
          <>
            {list.map((element) => (
              <Link
                key={element.value}
                className="text-sm flex"
                href={element.href}
                target="_blank"
              >
                {element.value}
              </Link>
            ))}
          </>
        )}
      </div>
    </ScrollArea>
  );
};
