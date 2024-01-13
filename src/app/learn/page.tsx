import "@code-hike/mdx/dist/index.css";
import "../github-from-css.css";
import LearnCopy from "./LearnCopy.mdx";
import { LogoIcon } from "../LogoIcon";
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-5xl">
        <Link href="/" className="flex flex-row items-center">
          <LogoIcon className="fill-black dark:fill-white" />
          <p className="mt-2 ml-2 text-xl">Nexar</p>
        </Link>
        <article className="mt-8 text-left prose lg:prose-xl dark:prose-invert !max-w-5xl">
          <LearnCopy />
        </article>
      </div>
    </div>
  );
}
