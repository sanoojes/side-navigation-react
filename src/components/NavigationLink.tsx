import { ReactNode } from "react";

interface NavigationLinkProps {
  children: ReactNode;
  link?: string;
  name: string;
}
const NavigationLink = ({ children, link, name }: NavigationLinkProps) => {
  return (
    <a
      className="flex p-1 rounded cursor-pointer hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
      href={link ? link : "#"}
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </a>
  );
};

export default NavigationLink;
