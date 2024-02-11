import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Banner = () => {
  return (
    <section className="py-32 bg-[url('/images/hero.png')] bg-cover bg-no-repeat bg-[right_top_-1em] md:bg-[right_top_1em] lg:bg-[center_top_-1em] xl:bg-[center_top_-7em] px-12 space-y-5">
      <h1 className="text-center text-primary-foreground md:text-left lg:text-5xl md:text-4xl text-3xl">
        Explore Who Unfollowed You on Instagram
      </h1>
      <div className="flex justify-center w-full md:justify-start gap-4">
        <Button asChild variant="secondary">
          <Link href="/#tracker">Explore</Link>
        </Button>
        <Button
          asChild
          className="border-none bg-transparent hover:bg-transparent group/inst"
        >
          <Link href="/#instructions">
            See Instructions{"  "}
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
