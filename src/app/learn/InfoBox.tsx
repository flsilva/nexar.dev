import { ChildrenProps } from "../ChildrenProps";

export const InfoBox = ({ children }: ChildrenProps) => (
  <div className="flex flex-col py-4 px-7 !my-12 bg-[#dfebf6] dark:bg-[#182635] border-l-4 rounded-r border-l-[#4433ff] dark:border-l-[#617bff]">
    {children}
  </div>
);
