import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Banner = () => {
  return (
    <section className="py-32 bg-secondary-foreground px-12 space-y-5">
      <h1 className="text-center text-primary-foreground md:text-left lg:text-5xl md:text-4xl text-3xl">
        Explore Who Unfollowed You on Instagram
      </h1>
      <div className="flex justify-center w-full md:justify-start gap-4">
        <Button asChild variant="secondary">
          <Link href="#tracker">Explore</Link>
        </Button>
        <Button
          asChild
          className="border-none bg-secondary-foreground group/inst"
        >
          <Link href="#instructions">
            See Instruction{"  "}
            <ChevronRight
              className="group-hover/inst:translate-x-1 ease-in-out duration-300"
              size={16}
            />
          </Link>
        </Button>
      </div>
    </section>
  );
};
