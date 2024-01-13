import Link from "next/link";
import { LogoIcon } from "./LogoIcon";
import LandingCopy from "./LandingCopy.mdx";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full items-center">
      <header className="flex flex-col m-6 items-center">
        <LogoIcon
          className="fill-black dark:fill-white"
          width="10rem"
          height="10rem"
        />
        <p className="mt-4 text-4xl">Nexar</p>
        <p className="mt-4 text-xl text-center">
          Application architecture for Next.js App Router apps
        </p>
        <Link
          href="/learn"
          className="mt-10 bg-[#252525] dark:bg-white text-white dark:text-[#252525] p-4 rounded-3xl"
        >
          Learn Nexar
        </Link>
      </header>
      <div className="flex flex-col mt-3 md:mt-6">
        <article className="text-left prose lg:prose-xl dark:prose-invert !max-w-5xl">
          <LandingCopy />
        </article>
        <Link
          href="/learn"
          className="self-center md:self-start mt-16 bg-[#252525] dark:bg-white text-white dark:text-[#252525] p-4 rounded-3xl"
        >
          Learn Nexar
        </Link>
      </div>
    </div>
  );
}
